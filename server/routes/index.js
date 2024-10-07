const express = require("express");
const routes = express.Router();
const bookRoute = require("./book.route");
const adminRoute = require("./admin.route");
const userRoute = require("./user.route");
const { authenticate } = require("../middlewares/auth");

routes.use("/book", bookRoute);
routes.use("/admin",authenticate, adminRoute);
routes.use("/user",
// authenticate,
 userRoute);

module.exports = routes;
