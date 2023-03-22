import { check } from "express-validator";

const userValidator = [
  check("email", "Email is required").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
];

export default userValidator;
