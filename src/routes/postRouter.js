import { Router } from "express";
import {addpost,deletePost,getposts,getpostsById,updatepost} from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";

const postRouter = Router();
postRouter.post("/posts/add",authMiddleware,addpost);
postRouter.get ("/posts/getposts",authMiddleware, getposts);
postRouter.get("/posts/:id",authMiddleware,getpostsById);
postRouter.put("/posts/:id",authMiddleware, updatepost);
postRouter.delete("/posts/:id",authMiddleware, deletePost);


export default postRouter;