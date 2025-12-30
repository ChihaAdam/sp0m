import dotenv from "dotenv";
dotenv.config();

const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  MONGODB_URI,
  FRONTEND_URL,
  ENV,
  FRONTEND_URL_LOCAL,
} = process.env;

//throw error if environment variables are not set
if (
  !ACCESS_TOKEN_SECRET ||
  !REFRESH_TOKEN_SECRET ||
  !ENV ||
  (!FRONTEND_URL && !FRONTEND_URL_LOCAL)
) {
  throw new Error("Missing environment variables");
}

//that string is for local development so exposing credentials is not a security issue
const DB_URI = MONGODB_URI || "mongodb://dev:dev123@localhost:27017";
const CURRENT_FRONTEND_URL = ENV === "dev" ? FRONTEND_URL_LOCAL : FRONTEND_URL;

export {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  DB_URI,
  ENV,
  CURRENT_FRONTEND_URL,
};
