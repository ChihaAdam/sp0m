import { verifyRefreshToken, generateAccessToken } from "../lib/tokenUtils.js";

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      const err = new Error("Unauthorized");
      err.name = "unauthorizedError";
      throw err;
    }
    const user = verifyRefreshToken(refreshToken);
    const accessToken = generateAccessToken(user);
    res.json({
      message: "new access token generated successfully",
      accessToken: `Bearer ${accessToken}`,
    });
  } catch (err) {
    next(err);
  }
};
