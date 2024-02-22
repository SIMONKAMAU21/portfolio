import { Router } from "express";
import {creategroup,getgroups,getgroupsById} from "../controllers/groupController.js";
import { authMiddleware } from "../middlewares/userAuthentication.js";

const groupRouter = Router();
groupRouter.post("/groups/create",authMiddleware,creategroup);
groupRouter.get ("/groups/getgroups",authMiddleware, getgroups);
groupRouter.get("/groups/:id",authMiddleware,getgroupsById);

export default groupRouter;