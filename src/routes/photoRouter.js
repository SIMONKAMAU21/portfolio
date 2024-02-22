import { Router } from "express";
import {addphoto,getphotos,getphotosById,updatephoto} from "../controllers/photoController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";

const photoRouter = Router();
photoRouter.post("/photos/add",authMiddleware,addphoto);
photoRouter.get ("/photos/getphotos",authMiddleware, getphotos);
photoRouter.get("/photos/:id",authMiddleware,getphotosById);
photoRouter.put("/photos/:id",authMiddleware, updatephoto);

export default photoRouter;