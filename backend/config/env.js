import dotenv from "dotenv";
dotenv.config();

const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  MONGODB_URI,
  FRONTEND_URL,
  ENV,
  FRONTEND_URL_LOCAL,
  REDIS_PASSWORD,
  GMAIL_ADDRESS,
  GMAIL_PASSWORD,
} = process.env;

//throw error if environment variables are not set
if (
  !ACCESS_TOKEN_SECRET ||
  !REFRESH_TOKEN_SECRET ||
  !ENV ||
  (!FRONTEND_URL && !FRONTEND_URL_LOCAL) ||
  !GMAIL_ADDRESS ||
  !GMAIL_PASSWORD
) {
  throw new Error("Missing environment variables");
}

//that string is for local development so exposing credentials is not a security issue
const DB_URI = MONGODB_URI || "mongodb://dev:dev123@localhost:27017";
const CURRENT_FRONTEND_URL = ENV === "dev" ? FRONTEND_URL_LOCAL : FRONTEND_URL;
const CACHE_PASSWORD = REDIS_PASSWORD || "dev123";
export {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  DB_URI,
  ENV,
  CACHE_PASSWORD,
  CURRENT_FRONTEND_URL,
  GMAIL_ADDRESS,
  GMAIL_PASSWORD,
};
