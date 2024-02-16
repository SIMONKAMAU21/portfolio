import bcrypt from "bcrypt";
import { addfriendService,getfriendService} from "../services/friendService.js";
import { friendValidator } from "../validator/friendValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

// CREATING A NEW friend


export const createFriend = async (req, res) => {
   
   const { FriendshipID, User1ID, User2ID, FriendshipDate } = req.body;
   const { error } = friendValidator({
      FriendshipID,
      User1ID,
      User2ID,
      FriendshipDate,
  
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
    
       const newfriend = { FriendshipID, User1ID, User2ID, FriendshipDate };
       const response = await addfriendService(newfriend);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
        res.status(200).send(newfriend)
         console.log("succefull");
       }
     } catch (error) {
       console.log(error.message);
       sendServerError(res, error.message);
     }
   }
 };

///////////////////////////

//  getting all friends


export const getfriends = async (req, res) => {
  try {
    const data = await getfriendService();
    if (data.lenth === 0) {
      sendNotFound(res, "no friends please");
    } else {
      res.status(200).send(data)
      console.log("succefull");
    
    }
  } catch (error) {}
};

/////////////////////////////////////////////////////////////////////

// getting a friend by id


export const getfriendsById = async (req,res)=>{
  try {
     const data = await getfriendService()
     const friend = data.find((item)=>item.FriendshipID==req.params.id )
     if (!friend){
        sendNotFound(res, "friend not found")
     }
     else{
        res.status(200).send(friend)
     }
  } catch (error) {
     sendServerError(res, error.message)
  }
}
