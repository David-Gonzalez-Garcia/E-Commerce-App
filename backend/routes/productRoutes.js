import express from "express";
import productController from "../controllers/productController.js";
import productValidator from "../validators/productValidator.js";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);
productRouter.post(
  "/",
  productValidator.validateProduct,
  productController.createProduct
);
productRouter.get("/:id", productController.getProduct);
productRouter.put(
  "/:id",
  productValidator.validateProduct,
  productController.updateProduct
);
productRouter.delete("/:id", productController.deleteProduct);

export { productRouter };
