export const getRefreshTokenCookie = (cookie) => {
  let refreshToken = cookie?.refreshToken?.split("Bearer ")[1];
  if (!refreshToken) {
    const err = new Error("Unauthorized");
    err.name = "unauthorizedError";
    throw err;
  }
  return refreshToken;
};
