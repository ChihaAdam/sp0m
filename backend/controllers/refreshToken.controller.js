import { verifyRefreshToken, generateAccessToken } from "../lib/tokenUtils.js";
import { getRefreshTokenCookie } from "../lib/refreshUtils.js";

export const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = getRefreshTokenCookie(req.cookies);
    const user = verifyRefreshToken(refreshToken);
    const accessToken = generateAccessToken({
      id: user.id,
    });
    res.json({
      message: "new access token generated successfully",
      accessToken: `Bearer ${accessToken}`,
    });
  } catch (err) {
    next(err);
  }
};
