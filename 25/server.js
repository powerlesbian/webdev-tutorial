import fs from 'fs';
import express from "express";
import morgan from 'morgan';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { ApolloServer, gql } from 'apollo-server-express';

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json'));

mongoose.connect("mongodb://localhost/nintendo-characters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

import characterRoutes from './routes/characters.js';

const app = express();

app.use(morgan('tiny'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

import typeDefs from './graphql/typedefs.js';
import resolvers from './graphql/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.use((req, res, next) => {
  console.log('Hello from middleware!');
  next();
});

app.use(characterRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
