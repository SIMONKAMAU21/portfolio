import bcrypt from "bcrypt";
import {
  addpostService,
  deletePostService,
  getpostService,
  updatepostService,
} from "../services/postService.js";
import { postValidator } from "../validator/postValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

/////////////////
// CREATING A NEW post

export const addpost = async (req, res) => {
  const { PostID, UserID, Content, PostDate, Likes, Comments } = req.body;
  const { error } = postValidator({
    PostID,
    UserID,
    Content,
    PostDate,
    Likes,
    Comments,
  });
  console.table(req.body);
  if (error) {
    console.log("this is the error", error);
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const newpost = { PostID, UserID, Content, PostDate, Likes, Comments };
      const response = await addpostService(newpost);
      if (response.message) {
        console.log(response.message);
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "post created successfully");
        console.log("succefull");
      }
    } catch (error) {
      console.log(error.message);
      sendServerError(res, error.message);
    }
  }
};

/////////////////////////////////////
// GETTING ALL post

export const getposts = async (req, res) => {
  try {
    const data = await getpostService();
    if (data.lenth === 0) {
      sendNotFound(res, "no post please");
    } else {
      res.status(200).send(data);
      sendCreated(res, "collected all post");
      console.log("succefull");
    }
  } catch (error) {}
};

///////////////////////////////////////////////
// GRETTING postS BY ID
export const getpostsById = async (req, res) => {
  try {
    const data = await getpostService();
    const post = data.find((item) => item.PostID == req.params.id);
    if (!post) {
      sendNotFound(res, "post not found");
    } else {
      res.status(200).send(post);
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

//////////////////////////////////////
// UPDATING post

export const updatepost = async (req, res) => {
  try {
    const data = await getpostService();
    const post = data.find((item) => item.PostID == req.params.id);
    if (!post) {
      sendNotFound(res, "post to update not found");
    } else {
      if ((req, res, req.body)) {
        const { PostID, UserID, Likes, Content, Comments, PostDate } = req.body;
        if (PostID) {
          post.PostID = PostID;
        }
        if (UserID) {
          post.UserID = UserID;
        }
        if (Likes) {
          post.Likes = Likes;
        }
        if (Content) {
          post.Content = Content;
        }
        if (Comments) {
          post.Comments = Comments;
        }
        if (Comments) {
          post.PostDate = PostDate;
        }
        const updatedpost = await updatepostService(post);
        //res.status(200).json(updatedpost);
        console.log(updatedpost);
        sendCreated(res, "post updated successfully");
      } else {
        sendServerError(res, "Please provide a complete field");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

// DELETING POST
export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getpostService();
    const postToDelete = data.find((item) => item.PostID == req.params.id);
    if (!postToDelete) {
      sendNotFound(res, "post TO DELETE not found");
    } else {
      await deletePostService(id);
      sendCreated(res, `post with id ${id} deleted successfully`);
    }
  } catch (error) {
    sendServerError(res, "server error");
  }
};
