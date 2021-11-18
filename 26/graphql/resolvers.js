import Character from "../models/Character.js";

export default {
  Query: {
    getCharacters: async () => await Character.find(),
  },
  Mutation: {
    addCharacter: async (parent, args) => await Character.create(args),
    deleteCharacter: async (parent, args) => await Character.deleteOne({ name: args.name }),
  }
};
