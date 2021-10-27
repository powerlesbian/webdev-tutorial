import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.password || !this.isModified("password")) return next;

  this.password = await bcrypt.hash(
    this.password,
    parseInt(process.env.HASH)
  );
  next();
});

UserSchema.methods.toJSON = function () {
  const user = this;

  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateVerificationToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
    algorithm: "RS256",
  });
};

UserSchema.statics.checkExistingField = async (field, value) => {
  const checkField = await User.findOne({ [`${field}`]: value });

  return checkField;
};

const User = mongoose.model("User", UserSchema);

export default User;
