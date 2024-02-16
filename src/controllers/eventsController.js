import bcrypt from "bcrypt";
import { addeventService,geteventService,updateeventService} from "../services/eventsService.js";
import { eventValidator } from "../validator/eventsValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

/////////////////
// UPLOADING A NEW event

export const addevent = async (req, res) => {
   const { EventID, EventName, Descri_ption, EventDate, Location,EventPosterURL} = req.body;
   const { error } = eventValidator({
      EventID,
      EventName,
      Descri_ption,
      EventDate,
     Location,
      EventPosterURL,
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
       const newevent = { EventID, EventName, Descri_ption, EventDate,Location,EventPosterURL};
       const response = await addeventService(newevent);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
         sendCreated(res, "event UPLOADED successfully");
         console.log("succefull");
      }
     } catch (error) {
        console.log(error.message);
        sendServerError(res, error.message);
     }
   }
 };
 
 
 /////////////////////////////////////
 // GETTING ALL event
 
 export const getevents = async (req, res) => {
    try {
     const data = await geteventService();
     if (data.lenth === 0) {
       sendNotFound(res, "no event please");
      } else {
         
         res.status(200).send(data)
         sendCreated(res, "collected all event");
         
         
      }
   } catch (error) {}
};
 

///////////////////////////////////////////////
// GRETTING eventS BY ID
export const geteventsById = async (req,res)=>{
   try {
      const data = await geteventService()
      const event = data.find((item)=>item.EventID==req.params.id )
      if (!event){
         sendNotFound(res, "event not found")
      }
      else{
         res.status(200).send(event)
      }
   } catch (error) {
      sendServerError(res, error.message)
   }
}




//////////////////////////////////////
// UPDATING event



export const updateevent = async (req, res) => {
   try {
     const data = await geteventService();
     const event = data.find((item) => item.EventID == req.params.id);
     if (!event) {
       sendNotFound(res, "event to update not found");
     } else {
       if ((req, res, req.body)) {
         const { EventID, EventName, Descri_ption, EventDate,Location,EventPosterURL} = req.body;
         if (EventID) {
           event.EventID = EventID;
         }
         if (EventName) {
           event.EventName = EventName;
         }
         if (Descri_ption) {
           event.Descri_ption = Descri_ption;
         }
         if (EventDate) {
           event.EventDate = EventDate;
         }
         if (Location) {
           event.Location = Location;
         }
         if (EventPosterURL) {
           event.EventPosterURL = EventPosterURL;
         }
       
         const updatedevent = await updateeventService(event);
         //res.status(200).json(updatedevent);
         console.log(updatedevent);
         sendCreated(res, "event updated successfully");
       } else {
         sendServerError(res, "Please provide a complete field");
       }
     }
   } catch (error) {
     sendServerError(res, error.message);
   }
 };