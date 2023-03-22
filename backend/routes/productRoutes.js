import express from "express";
import { check } from "express-validator";
import authMiddleware from "../middleware/authMiddleware";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = express.Router();

// @route   GET /products
// @desc    Get all products
// @access  Public
router.get("/", getProducts);

// @route   GET /products/:id
// @desc    Get a specific product by ID
// @access  Public
router.get("/:id", getProductById);

// @route   POST /products
// @desc    Create a new product
// @access  Private
router.post(
  "/",
  [
    authMiddleware,
    check("name", "Name is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("price", "Price must be a positive number").isFloat({ min: 0 }),
  ],
  createProduct
);

// @route   PUT /products/:id
// @desc    Update a specific product by ID
// @access  Private
router.put(
  "/:id",
  [
    authMiddleware,
    check("name", "Name is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("price", "Price must be a positive number").isFloat({ min: 0 }),
  ],
  updateProduct
);

// @route   DELETE /products/:id
// @desc    Delete a specific product by ID
// @access  Private
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
