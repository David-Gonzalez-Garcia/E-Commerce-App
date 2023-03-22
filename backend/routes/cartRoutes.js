import express from "express";
import authMiddleware from "../middleware/authMiddleware";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController";

const router = express.Router();

// @route   GET /cart
// @desc    Get the contents of a user's shopping cart
// @access  Private
router.get("/", authMiddleware, getCart);

// @route   POST /cart
// @desc    Add a product to a user's shopping cart
// @access  Private
router.post("/", authMiddleware, addToCart);

// @route   DELETE /cart/:id
// @desc    Remove a product from a user's shopping cart
// @access  Private
router.delete("/:id", authMiddleware, removeFromCart);

export default router;
