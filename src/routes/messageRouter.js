import { Router } from "express";
import {createmessage, getmessages, getmessagesById,updatemessage} from "../controllers/messageController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";
const messageRouter = Router();

messageRouter.post("/messages/create",authMiddleware,createmessage);
messageRouter.get ("/messages/getmessages",authMiddleware, getmessages);
messageRouter.get("/messages/:id",authMiddleware,getmessagesById);
messageRouter.put("/messages/:id",authMiddleware, updatemessage);

export default messageRouter;