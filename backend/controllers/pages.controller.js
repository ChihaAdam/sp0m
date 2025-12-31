import { connectToDB } from "../config/dbConnection.js";
import Page from "../model/pages.js";

//Create page
export const createPage = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { title, type } = req.body;
    await connectToDB();
    await Page.create({
      title: title,
      type: type,
      author: user_id,
    });
    res.status(201).json({ message: "Page created successfully" });
  } catch (err) {
    next(err);
  }
};

//get facebook pages
export const getFacebookPages = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const pages = await Page.find({ author: user_id, type: "facebook" });
    res.status(200).json(pages);
  } catch (err) {
    next(err);
  }
};

//get instagram pages
export const getInstagramPages = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const pages = await Page.find({ author: user_id, type: "instagram" });
    res.status(200).json(pages);
  } catch (err) {
    next(err);
  }
};

//get google pages
export const getGooglePages = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const pages = await Page.find({ author: user_id, type: "google" });
    res.status(200).json(pages);
  } catch (err) {
    next(err);
  }
};

//get details of a page
export const getPageDetails = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { page_id } = req.params;
    await connectToDB();
    const page = await Page.findById(page_id);
    if (!page || page.author.toString() !== user_id) {
      const err = new Error("Page not found");
      err.name = "PageNotFoundError";
      throw err;
    }
    res.status(200).json(page);
  } catch (err) {
    next(err);
  }
};
