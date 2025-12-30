import mongoose from "mongoose";
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
    page: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    },
  },
  {
    timestamps: true,
  }
);

const Credential = mongoose.model("Credential", credentialSchema);

export default Credential;
