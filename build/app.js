import "dotenv/config";
import express from "express";
import userRoutes from "./routers/userRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(userRoutes);

app.listen(PORT, () => {
  const timstamp = new Date();
  console.log(`PORT : ${PORT} - ${timstamp.toISOString().split("T")[1]}`);
});