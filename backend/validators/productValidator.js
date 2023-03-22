import { check } from "express-validator";

const productValidator = [
  check("name", "Name is required").not().isEmpty(),
  check("price", "Price must be a positive number").isFloat({ min: 0 }),
];

export default productValidator;
