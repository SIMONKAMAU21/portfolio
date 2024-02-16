import bcrypt from "bcrypt";
import { addcommentService,getcommentService} from "../services/commentService.js";
import { commentValidator } from "../validator/commentValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

/////////////////
// CREATING A NEW comment

export const addcomment = async (req, res) => {
   const { CommentID, UserID, Content, CommentDate ,PostID} = req.body;
   const { error } = commentValidator({
     CommentID,
     UserID,
     Content,
     CommentDate,
     PostID,
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
       const newcomment = { CommentID, UserID, Content, CommentDate,PostID};
       const response = await addcommentService(newcomment);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
         sendCreated(res, "comment created successfully");
         console.log("succefull");
       }
     } catch (error) {
       console.log(error.message);
       sendServerError(res, error.message);
     }
   }
 };


 
 /////////////////////////////////////
// GETTING ALL comment

export const getcomments = async (req, res) => {
   try {
     const data = await getcommentService();
     if (data.lenth === 0) {
       sendNotFound(res, "no comment please");
     } else {
      
       res.status(200).send(data)
       sendCreated(res, "collected all comment");
       console.log("succefull");
     
     }
   } catch (error) {}
 };
 
 ///////////////////////////////////////////////
// GRETTING commentS BY ID
export const getcommentsById = async (req,res)=>{
   try {
      const data = await getcommentService()
      const comment = data.find((item)=>item.CommentID==req.params.id )
      if (!comment){
         sendNotFound(res, "comment not found")
      }
      else{
         res.status(200).send(comment)
      }
   } catch (error) {
      sendServerError(res, error.message)
   }
 }