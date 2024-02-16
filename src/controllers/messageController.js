import bcrypt from "bcrypt";
import { addmessageService,getmessageService,updateeventService} from "../services/messageService.js";
import { messageValidator } from "../validator/messageValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";



export const createmessage = async (req, res) => {
   
   const { MessageID, SenderID, ReceiverID, MessageDate ,Content } = req.body;
   const { error } = messageValidator({
      MessageID,
      SenderID,
      ReceiverID,
      MessageDate,
  Content
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
    
       const newmessage = { MessageID, SenderID, ReceiverID, MessageDate ,Content};
       const response = await addmessageService(newmessage);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
        res.status(200).send(newmessage)
         console.log("succefull");
       }
     } catch (error) {
       console.log(error.message);
       sendServerError(res, error.message);
     }
   }
 };

///////////////////////////

//  getting all messages


export const getmessages = async (req, res) => {
  try {
    const data = await getmessageService();
    if (data.lenth === 0) {
      sendNotFound(res, "no messages please");
    } else {
      res.status(200).send(data)
      console.log("succefull");
    
    }
  } catch (error) {}
};

/////////////////////////////////////////////////////////////////////

// getting a message by id


export const getmessagesById = async (req,res)=>{
  try {
     const data = await getmessageService()
     const message = data.find((item)=>item.MessageID==req.params.id )
     if (!message){
        sendNotFound(res, "message not found")
     }
     else{
        res.status(200).send(message)
     }
  } catch (error) {
     sendServerError(res, error.message)
  }
}



//////////////////////////////////////
// UPDATING message



export const updatemessage = async (req, res) => {
  try {
    const data = await getmessageService();
    const message = data.find((item) => item.MessageID == req.params.id);
    if (!message) {
      sendNotFound(res, "message to update not found");
    } else {
      if ((req, res, req.body)) {
        const { MessageID, SenderID, ReceiverID, MessageDate,Content} = req.body;
        if (MessageID) {
          message.MessageID = MessageID;
        }
        if (SenderID) {
          message.SenderID = SenderID;
        }
        if (ReceiverID) {
          message.ReceiverID = ReceiverID;
        }
        if (MessageDate) {
          message.MessageDate = MessageDate;
        }
        if (Content) {
          message.Content = Content;
        }
      
        const updatedmessage = await updateeventService(message);
        //res.status(200).json(updatedmessage);
        console.log(updatedmessage);
        sendCreated(res, "message updated successfully");
      } else {
        sendServerError(res, "Please provide a complete field");
      }
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};