import { verifyAccessToken } from "../lib/tokenUtils.js";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      const err = new Error("Unauthorized");
      err.name = "unauthorizedError";
      throw err;
    }
    const user = verifyAccessToken(token);
    req.user_id = user.id;
    next();
  } catch (err) {
    next(err);
  }
};
