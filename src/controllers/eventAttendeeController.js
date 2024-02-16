import bcrypt from "bcrypt";
import { addeventAttendeeService,geteventAttendeeService,updateeventAttendeeService} from "../services/eventAttendeeService.js";
import { eventAttendeeValidator } from "../validator/eventAttendeeValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

 // EventID INT,
// AttendeeID INT,

/////////////////
// UPLOADING A NEW eventAttendee

export const addeventAttendee = async (req, res) => {
   const { EventID, AttendeeID } = req.body;
   const { error } = eventAttendeeValidator({
      EventID,
      AttendeeID,
   });
   console.table(req.body);
   if (error) {
     console.log("this is the error", error);
     return res.status(400).send(error.details[0].message);
   } else {
     try {
       const neweventAttendee = { EventID, AttendeeID};
       const response = await addeventAttendeeService(neweventAttendee);
       if (response.message) {
         console.log(response.message);
         sendServerError(res, response.message);
       } else {
         sendCreated(res, "eventAttendee UPLOADED successfully");
         console.log("succefull");
       }
     } catch (error) {
       console.log(error.message);
       sendServerError(res, error.message);
     }
   }
 };


  /////////////////////////////////////
// GETTING ALL eventAttendee

export const geteventAttendees = async (req, res) => {
   try {
     const data = await geteventAttendeeService();
     if (data.lenth === 0) {
       sendNotFound(res, "no eventAttendee please");
     } else {
      
       res.status(200).send(data)
       sendCreated(res, "collected all eventAttendee");
    
     
     }
   } catch (error) {}
 };
 

  ///////////////////////////////////////////////
// GRETTING eventAttendeeS BY ID
export const geteventAttendeesById = async (req,res)=>{
   try {
      const data = await updateeventAttendeeService()
      const eventAttendee = data.find((item)=>item.EventID==req.params.id )
      if (!eventAttendee){
         sendNotFound(res, "eventAttendee not found")
      }
      else{
         res.status(200).send(eventAttendee)
      }
   } catch (error) {
      sendServerError(res, error.message)
   }
 }
 

 
//////////////////////////////////////
// UPDATING eventattendee



export const updateeventAttendee= async (req, res) => {
   try {
     const data = await geteventAttendeeService();
     const event = data.find((item) => item.EventID == req.params.id);
     if (!event) {
       sendNotFound(res, "event to update not found");
     } else {
       if ((req, res, req.body)) {
         const { EventID,AttendeeID} = req.body;
         if (EventID) {
           event.EventID = EventID;
         }
         if (AttendeeID) {
           event.AttendeeID = AttendeeID;
         }
         const updatedeventAttendee = await geteventAttendeeService(event);
         //res.status(200).json(updatedevent);
         console.log(updatedeventAttendee);
         sendCreated(res, "event updated successfully");
       } else {
         sendServerError(res, "Please provide a complete field");
       }
     }
   } catch (error) {
     sendServerError(res, error.message);
   }
 };