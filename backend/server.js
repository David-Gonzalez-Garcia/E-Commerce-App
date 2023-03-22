import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/cart", cartRoutes);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
