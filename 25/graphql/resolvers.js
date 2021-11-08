export default {
  Query: {
    hello: () => 'Hello world from graphql!',
    getUsers: () => ([{ username: 1 }]),
  },
};
