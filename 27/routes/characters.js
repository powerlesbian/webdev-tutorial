import { Router } from 'express';

import Character from '../models/Character.js';

const router = Router();

router.get('/api/characters', async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

router.post('/api/characters', async (req, res) => {
  console.log(req.body);
  const newChar = await Character.create(req.body);
  res.json(newChar);
});

router.delete('/api/characters', async (req, res) => {
  console.log(req.body);
  const deletedChar = await Character.deleteOne({ name: req.body.name });
  res.json(deletedChar);
});

export default router;
