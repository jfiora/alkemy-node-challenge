import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";

const router = Router();

router.post('/auth/login', signIn);
router.post('/auth/register', signUp);

export default router;