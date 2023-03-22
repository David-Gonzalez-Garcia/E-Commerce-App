import express from "express";
import usersController from "../controllers/usersController.js";
import userValidator from "../validators/userValidator.js";

const userRouter = express.Router();

userRouter.post("/", userValidator.validateUser, usersController.createUser);
userRouter.post("/login", usersController.loginUser);
userRouter.post("/logout", usersController.logoutUser);

export { userRouter };
