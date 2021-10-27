
import { Router } from "express";
import authController from "../controllers/auth.js";
import authentication from '../middleware/authenticate.js';

const { signup, login, protectedRoute } = authController;
const { authenticate } = authentication;

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/protected', authenticate, protectedRoute);

export default authRouter;
