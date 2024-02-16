import { Router } from "express";
import {addevent,getevents,geteventsById,updateevent} from "../controllers/eventsController.js";

const eventRouter = Router();
eventRouter.post("/events/add",addevent);
eventRouter.get ("/events/getevents", getevents);
eventRouter.get("/events/:id",geteventsById);
eventRouter.put("/events/:id", updateevent);

export default eventRouter;



