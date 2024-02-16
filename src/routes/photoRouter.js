import { Router } from "express";
import {addphoto,getphotos,getphotosById,updatephoto} from "../controllers/photoController.js";

const photoRouter = Router();
photoRouter.post("/photos/add",addphoto);
photoRouter.get ("/photos/getphotos", getphotos);
photoRouter.get("/photos/:id",getphotosById);
photoRouter.put("/photos/:id", updatephoto);

export default photoRouter;