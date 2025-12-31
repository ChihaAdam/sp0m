const DB_ERRORS = {
  11000: {
    message: "User already exists",
    status: 409,
  },
};

const SERVER_ERRORS = {
  loginError: {
    message: "username or password is incorrect",
    status: 401,
  },
  unknownError: {
    message: "An unknown error occurred",
    status: 500,
  },
  unauthorizedError: {
    message: "Unauthorized",
    status: 401,
  },
  JsonWebTokenError: {
    message: "Unauthorized",
    status: 401,
  },
  TokenExpiredError: {
    message: "Unauthorized",
    status: 401,
  },
  NotBeforeError: {
    message: "Unauthorized",
    status: 401,
  },
  PageNotFoundError: {
    message: "Page not found",
    status: 404,
  },
};

export const errorHandlingMiddleware = (err, req, res, next) => {
  const name = err.name;
  let error;
  console.log(err);
  if (name == "MongoServerError") {
    const code = err.code;
    error = DB_ERRORS[code] || SERVER_ERRORS["unknownError"];
  } else {
    error = SERVER_ERRORS[name] || SERVER_ERRORS["unknownError"];
  }
  res.status(error.status).json({ message: error.message });
};
