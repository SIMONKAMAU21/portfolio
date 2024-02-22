import { Router } from "express";
import {createFriend, getfriends, getfriendsById} from "../controllers/friendshipController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";
const friendRouter = Router();

friendRouter.post("/friends/create",authMiddleware,createFriend);
friendRouter.get ("/friends/getfriends",authMiddleware,getfriends);
friendRouter.get("/friends/:id",authMiddleware,getfriendsById);

export default friendRouter;