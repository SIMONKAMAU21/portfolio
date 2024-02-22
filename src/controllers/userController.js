import bcrypt from "bcrypt";
import {
  addUserService,
  getUserService,
  updateUserService,
  findByCredentialsService,
  deleteUserService,
} from "../services/UserService.js";
import {
  userValidator,
  userLoginValidator,
} from "../validator/UserValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
  notAuthorized,
} from "../helper/HelperFunctions.js";
import logger from "../utils/logger.js";
import nodemailer from "nodemailer";
import emailTemp from "../emailTemp.js";
// import { response } from "express";

export const sendMail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: "waxox49273@ebuthor.com",
    subject: "<h1>welcome to mailapp</h1>",
    html: emailTemp,
  };
  try {
    logger.info("Sending mail...");
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        logger.error(error);
        res.status(500).send(error);
      } else {
        logger.info(`Email sent: ${info.response}`);
        res.status(200).send(info.response);
      }
    });
  } catch (error) {
    logger.error(error);
  }
};

// RIGISTERING A USER

export const registerUser = async (req, res) => {
  let { UserID, Username, Email, Password, TagName, Location } = req.body;
  const { error } = userValidator({
    UserID,
    Username,
    Email,
    Password,
    TagName,
    Location,
  });

  console.table(req.body);

  if (error) {
    console.log("this is the error", error);
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);
      let newUser = {
        UserID,
        Username,
        Email,
        Password: hashedPassword,
        TagName,
        Location,
      };

      console.log(newUser);
      const response = await addUserService(newUser);
      if (response.message) {
        console.log(response.message);
        sendServerError(res, response.message);
      } else {
        // sendMail();
        sendCreated(res, "user created successfully");
        console.log("successful");
      }
    } catch (error) {
      console.log(error.message);
      sendServerError(res, error.message); // Corrected to error.message
    }
  }
};

// login user

export const loginUser = async (req, res) => {
  const { Email, Password } = req.body;
  const { error } = userLoginValidator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const userFoundResponse = await findByCredentialsService({
        Email,
        Password,
      });
      console.log("res", userFoundResponse);
      if (userFoundResponse.error) {
        notAuthorized(res, userFoundResponse.error);
      } else {
        res.status(200).send(userFoundResponse);
      }
    } catch (error) {
      return res, "invalid account";
      console.log(error.message);
    }
  }
};

// getting all users

export const getUsers = async (req, res) => {
  try {
    const data = await getUserService();
    if (data.lenth === 0) {
      sendNotFound(res, "no users please");
    } else {
      res.status(200).json(data);
      console.table(data);
    }
  } catch (error) {}
};

// getting a user by id

export const getUsersById = async (req, res) => {
  try {
    const data = await getUserService();
    const user = data.find((item) => item.UserID == req.params.id);
    if (!user) {
      sendNotFound(res, "user not found");
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

//////////////////////////////////////
// UPDATING USER

export const updateUser = async (req, res) => {
  try {
    const data = await getUserService();
    const user = data.find((item) => item.UserID == req.params.id);
    if (!user) {
      sendNotFound(res, "User to update not found");
    } else {
      if ((req, res, req.body)) {
        const { Username, Email, Password, TagName, Location } = req.body;
        if (Username) {
          user.Username = Username;
        }
        if (Email) {
          user.Email = Email;
        }
        if (Password) {
          user.Password = Password;
        }
        if (TagName) {
          user.TagName = TagName;
        }
        if (Location) {
          user.Location = Location;
        }
        const updatedUser = await updateUserService(user);
        //res.status(200).json(updatedUser);
        console.log(updatedUser);
        sendCreated(res, "User updated successfully");
      } else {
        sendServerError(res, "Please provide a complete field");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// deleting a user

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getUserService();
    const userToDelete = data.find((item) => (item.UserID = id));
    if (!userToDelete) {
      sendNotFound(res, "user not found");
    } else {
      await deleteUserService(id);
      sendCreated(res, `user with ID ${id} deleted succefully`);
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};
