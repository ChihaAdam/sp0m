import mongoose from "mongoose";
import { hashPassword } from "../lib/hashPassword.js";
const credentialSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Credential = mongoose.model("Credential", credentialSchema);

export default Credential;
