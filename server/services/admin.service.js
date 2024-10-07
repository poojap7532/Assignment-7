const { adminSchema } = require("../model");

// find admin email
const findEmail = (email) => {
  return adminSchema.findOne({ email });
};

// add admin
const addAdmin = (body) => {
  return adminSchema.create(body);
};

// get admin
const getAdmin = () => {
  return adminSchema.find();
};

// find admin for delete
const findAdminById = (id) => {
  adminSchema.findById(id);
};

// delete admin
const deleteAdmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};

// update admin
const updateAdmin = (body, id) => {
  return adminSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  findEmail,
  addAdmin,
  getAdmin,
  findAdminById,
  deleteAdmin,
  updateAdmin,
};
