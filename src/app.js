const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { readdirSync } = require("fs");

const app = express();
const errorMiddleware = require("./error/error-middleware");

// CORS config in dev environment
app.use(cors({ origin: true, credentials: true }));

// CORS config in prod environment
// const allowedOrigins = [
//   'https://admin.meraretail.dev',
//   'https://seller.meraretail.dev',
//   'https://meraretail.dev',
// ];
// app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/********** IMPORTING ROUTES *************/
// Importing test routes
readdirSync(`${__dirname}/test-service/routes`).forEach((file) => {
  if (file.endsWith(".js")) {
    app.use("/api/test", require(`./test-service/routes/${file}`));
  }
});

// Route not found
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
