import mongoose from "mongoose";
import {
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  REGEX_EMAIL,
} from "../../constants.mjs";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: MIN_USERNAME_LENGTH,
    max: MAX_USERNAME_LENGTH,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return REGEX_EMAIL.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: MIN_PASSWORD_LENGTH,
    max: MAX_PASSWORD_LENGTH,
  },
  avatarNumber: {
    type: Number,
    default: 1,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
