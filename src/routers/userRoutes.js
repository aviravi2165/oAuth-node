import express from "express";
import * as userController from "../controllers/userController.js";

const router = new express.Router();

router.get(
  "/",
  userController.sayHello
);

export default router;
