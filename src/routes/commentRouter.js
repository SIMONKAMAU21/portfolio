import { Router } from "express";
import {addcomment,getcomments,getcommentsById} from "../controllers/commentController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";
const commentRouter = Router();
commentRouter.post("/comments/add",authMiddleware,addcomment);
commentRouter.get ("/comments/getcomments",authMiddleware, getcomments);
commentRouter.get("/comments/:id",authMiddleware,getcommentsById);

export default commentRouter;