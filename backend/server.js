import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors());

// Routes
server.use("/api/products", productRoutes);
server.use("/api/users", usersRoutes);
server.use("/api/cart", cartRoutes);

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB database"))
  .catch((err) => console.log(err));

// Start server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
