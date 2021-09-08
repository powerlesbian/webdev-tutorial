const express = require('express');
const users = require('./data/users');

const app = express();

const PORT = 3001;

app.get('/api/users', (req, res) => res.json(users));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
