import bcrypt from "bcrypt";
import { addUserService, getUserService,updateUserService} from "../services/UserService.js";
import { userValidator } from "../validator/UserValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

export const registerUser = async (req, res) => {
  const { UserID, Username, Email, Password, TagName,Location } = req.body;
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
      const newUser = { UserID, Username, Email, Password, TagName,Location };
      const response = await addUserService(newUser);
      if (response.message) {
        console.log(response.message);
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "user created successfully");
        console.log("succefull");
      }
    } catch (error) {
      console.log(error.message);
      sendServerError(res, error.message);
    }
  }
};

export const loginUser = async (req, res) => {
  try {
  } catch (error) {}
};



// getting all users
export const getUsers = async (req, res) => {

  try {
    const data = await getUserService();
    if (data.lenth === 0) {
      sendNotFound(res, "no users please");
    } else {
      res.status(200).json(data)
      console.log("succefull");
    
    }
  } catch (error) {}
};

// getting a user by id 

export const getUsersById = async (req,res)=>{
   try {
      const data = await getUserService()
      const user = data.find((item)=>item.UserID==req.params.id )
      if (!user){
         sendNotFound(res, "user not found")
      }
      else{
         res.status(200).send(user)
      }
   } catch (error) {
      sendServerError(res, error.message)
   }
}

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