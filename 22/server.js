import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import express from "express";
import { Low, JSONFile } from 'lowdb';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('Hello from middleware!');
  next();
});

app.get('/api/characters', (req, res) => res.json(db.data));

app.post('/api/characters', async (req, res) => {
  console.log(req.body);
  db.data.characters.push(req.body);
  await db.write();
  res.json(db.data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
