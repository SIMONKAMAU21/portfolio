import { Router } from "express";
import {addeventAttendee,geteventAttendees,updateeventAttendee,geteventAttendeesById} from "../controllers/eventAttendeeController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";
const eventAttendeeRouter = Router();
eventAttendeeRouter.post("/eventAttendees/add",authMiddleware,addeventAttendee);
eventAttendeeRouter.get ("/eventAttendees/geteventAttendees",authMiddleware, geteventAttendees);
eventAttendeeRouter.get("/eventAttendees/:id",authMiddleware,geteventAttendeesById);
eventAttendeeRouter.put("/eventAttendees/:id",authMiddleware, updateeventAttendee);

export default eventAttendeeRouter;