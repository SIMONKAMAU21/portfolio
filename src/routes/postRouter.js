import { Router } from "express";
import {addpost,getposts,getpostsById,updatepost} from "../controllers/postController.js";

const postRouter = Router();
postRouter.post("/posts/add",addpost);
postRouter.get ("/posts/getposts", getposts);
postRouter.get("/posts/:id",getpostsById);
postRouter.put("/posts/:id", updatepost);


export default postRouter;