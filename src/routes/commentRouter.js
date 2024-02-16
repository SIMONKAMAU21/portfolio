import { Router } from "express";
import {addcomment,getcomments,getcommentsById} from "../controllers/commentController.js";

const commentRouter = Router();
commentRouter.post("/comments/add",addcomment);
commentRouter.get ("/comments/getcomments", getcomments);
commentRouter.get("/comments/:id",getcommentsById);

export default commentRouter;