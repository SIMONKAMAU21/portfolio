
import { Router } from "express";
import {registerUser,loginUser, getUsers, getUsersById, updateUser,deleteUser} from "../controllers/userController.js";
import {authMiddleware}from "../middlewares/userAuthentication.js"

const userRouter = Router();


userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);
userRouter.get ("/users/getUser",authMiddleware, getUsers);
userRouter.get("/users/:id",authMiddleware,getUsersById);
userRouter.put("/users/:id",authMiddleware, updateUser);
userRouter.delete("/users/:id",authMiddleware, deleteUser);

export default userRouter;