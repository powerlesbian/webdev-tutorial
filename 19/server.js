const express = require('express');
const products = require('./data/products');

const app = express();

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
