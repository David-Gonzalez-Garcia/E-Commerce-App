import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Connected to database");
});
