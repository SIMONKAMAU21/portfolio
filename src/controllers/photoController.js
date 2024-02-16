import bcrypt from "bcrypt";
import { addphotoService,getphotoService,updatephotoService} from "../services/photoService.js";
import { photoValidator } from "../validator/photoValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

////////////////////////////////////////////////////////////////////
// UPLOADING A NEW photo

export const addphoto = async (req, res) => {
   const { PhotoID, UserID, PhotoURL, UploadDate } = req.body;
   const { error } = photoValidator({
      PhotoID,
     UserID,
     PhotoURL,
     UploadDate,
   
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
       const newphoto = { PhotoID, UserID, PhotoURL, UploadDate};
       const response = await addphotoService(newphoto);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
         sendCreated(res, "photo UPLOADED successfully");
         console.log("succefull");
       }
     } catch (error) {
       console.log(error.message);
       sendServerError(res, error.message);
     }
   }
 };
////////////////////////////////////////////////////////////
// getting all photos
export const getphotos = async (req, res) => {

  try {
    const data = await getphotoService();
    if (data.lenth === 0) {
      sendNotFound(res, "no photos please");
    } else {
      res.status(200).json(data)
      console.log("succefull");
    
    }
  } catch (error) {}
};
 ///////////////////////////////////////////////////////////////
// getting a photo by id 

export const getphotosById = async (req,res)=>{
  try {
     const data = await getphotoService()
     const photo = data.find((item)=>item.PhotoID==req.params.id )
     if (!photo){
        sendNotFound(res, "photo not found")
     }
     else{
        res.status(200).send(photo)
     }
  } catch (error) {
     sendServerError(res, error.message)
  }
}




//////////////////////////////////////
// UPDATING photo



export const updatephoto = async (req, res) => {
  try {
    const data = await getphotoService();
    const photo = data.find((item) => item.PhotoID == req.params.id);
    if (!photo) {
      sendNotFound(res, "photo to update not found");
    } else {
      if ((req, res, req.body)) {
        const { PhotoID, UserID, PhotoURL, UploadDate} = req.body;
        if (PhotoID) {
          photo.PhotoID = PhotoID;
        }
        if (UserID) {
          photo.UserID = UserID;
        }
        if (PhotoURL) {
          photo.PhotoURL = PhotoURL;
        }
        if (UploadDate) {
          photo.UploadDate = UploadDate;
        }
      
        const updatedphoto = await updatephotoService(photo);
        //res.status(200).json(updatedphoto);
        console.log(updatedphoto);
        sendCreated(res, "photo updated successfully");
      } else {
        sendServerError(res, "Please provide a complete field");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};