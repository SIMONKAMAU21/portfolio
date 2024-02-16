import { Router } from "express";
import {creategroup,getgroups,getgroupsById} from "../controllers/groupController.js";

const groupRouter = Router();
groupRouter.post("/groups/create",creategroup);
groupRouter.get ("/groups/getgroups", getgroups);
groupRouter.get("/groups/:id",getgroupsById);

export default groupRouter;