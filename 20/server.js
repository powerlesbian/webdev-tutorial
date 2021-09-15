const express = require('express');
const users = require('./data/users');

const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = 3001;

app.get('/api/users', (req, res) => res.json(users));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
