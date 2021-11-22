import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  }
});

const Character = mongoose.model("Character", CharacterSchema);

export default Character;
