import { Router } from "express";
import {createmessage, getmessages, getmessagesById,updatemessage} from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.post("/messages/create",createmessage);
messageRouter.get ("/messages/getmessages", getmessages);
messageRouter.get("/messages/:id",getmessagesById);
messageRouter.put("/messages/:id", updatemessage);

export default messageRouter;