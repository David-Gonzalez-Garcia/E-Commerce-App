import express from "express";
import { check } from "express-validator";
import { createUser } from "../controllers/usersController";

const router = express.Router();

// @route   POST /users
// @desc    Create a new user account
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("username", "Please include a valid username").notEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  createUser
);

export { router as userRouter };
