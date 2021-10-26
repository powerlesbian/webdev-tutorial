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
  const filteredCharacters = db.data.characters.filter(({ name }) => name !== req.body.name);
  db.data.characters = filteredCharacters;
  await db.write();
  res.json(db.data);
});

export default router;
