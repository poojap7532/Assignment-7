const express = require("express");
const { adminController } = require("../controller");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");

const route = express.Router();

route.post("/add", validate(adminValidation.admin), adminController.addAdmin);
route.get("/get", adminController.getAdmin);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put(
  "/update/:id",
  validate(adminValidation.admin),
  adminController.updateAdmin
);
route.post("/login", adminController.login);

module.exports = route;
