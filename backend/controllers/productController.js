import { validationResult } from "express-validator";
import { Product } from "../models/product";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, price, quantity } = req.body;

  try {
    const product = new Product({
      name,
      description,
      price,
      quantity,
    });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { name, description, price, quantity } = req.body;

  try {
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;

    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    let product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    await product.remove();

    res.json({ msg: "Product removed" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
