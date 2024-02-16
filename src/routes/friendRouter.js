import { Router } from "express";
import {createFriend, getfriends, getfriendsById} from "../controllers/friendshipController.js";

const friendRouter = Router();

friendRouter.post("/friends/create",createFriend);
friendRouter.get ("/friends/getfriends", getfriends);
friendRouter.get("/friends/:id",getfriendsById);

export default friendRouter;