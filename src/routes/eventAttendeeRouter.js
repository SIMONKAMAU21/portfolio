import { Router } from "express";
import {addeventAttendee,geteventAttendees,updateeventAttendee,geteventAttendeesById} from "../controllers/eventAttendeeController.js";

const eventAttendeeRouter = Router();
eventAttendeeRouter.post("/eventAttendees/add",addeventAttendee);
eventAttendeeRouter.get ("/eventAttendees/geteventAttendees", geteventAttendees);
eventAttendeeRouter.get("/eventAttendees/:id",geteventAttendeesById);
eventAttendeeRouter.put("/eventAttendees/:id", updateeventAttendee);

export default eventAttendeeRouter;