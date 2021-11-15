import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: String,
  game: String
});

const Character = mongoose.model("Character", CharacterSchema);

export default Character;
