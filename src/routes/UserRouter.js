
import { Router } from "express";
import {registerUser,loginUser, getUsers, getUsersById, updateUser,} from "../controllers/userController.js";


const userRouter = Router();


userRouter.post("/users/register", registerUser);
userRouter.post("/users/auth/login", loginUser);
userRouter.get ("/users/getUser", getUsers);
userRouter.get("/users/:id",getUsersById);
userRouter.put("/users/:id", updateUser);

export default userRouter;