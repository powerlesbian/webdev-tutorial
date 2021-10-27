import { config } from "dotenv";
config();

import express from "express";
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import passport from "passport";

import characterRoutes from './routes/characters.js';
import authRoutes from './routes/auth.js';

mongoose.connect("mongodb://mongo:27017/nintendo-characters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(morgan('tiny'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

passport.initialize();

app.use((req, res, next) => {
  console.log('Hello from middleware!');
  next();
});

app.use(characterRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
