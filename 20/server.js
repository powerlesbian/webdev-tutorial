const express = require('express');
const users = require('./data/users');

const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world from graphql!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = 3001;

app.get('/api/users', (req, res) => res.json(users));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
