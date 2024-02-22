import { Router } from "express";
import {addevent,getevents,geteventsById,updateevent} from "../controllers/eventsController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";

const eventRouter = Router();
eventRouter.post("/events/add",authMiddleware,addevent);
eventRouter.get ("/events/getevents",authMiddleware, getevents);
eventRouter.get("/events/:id",authMiddleware,geteventsById);
eventRouter.put("/events/:id",authMiddleware, updateevent);

export default eventRouter;



