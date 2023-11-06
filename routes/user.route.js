import express from "express";
import {
  getUserController,
  loginController,
  registerUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users/:id", getUserController);
router.post("/users", registerUserController);
router.post("/users/auth", loginController);

export default router;
