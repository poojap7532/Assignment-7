const { createToken } = require("../middlewares/auth");
const { adminService } = require("../services");

// add admin
const addAdmin = async (req, res) => {
  console.log(req.body);

  try {
    let body = req.body;

    if (!body) {
      throw new Error("data not get");
    }

    let adminExist = await adminService.findEmail(req.body.email);

    if (adminExist) {
      throw new Error("email must be unique");
    }

    let admin = await adminService.addAdmin(body);
    if (!admin) {
      throw new Error("admin not added");
    }

    res.status(201).json({
      message: "admin added succesfully",
      admin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// get admin
const getAdmin = async (req, res) => {
  try {
    let admin = await adminService.getAdmin();

    if (!admin) {
      throw new Error("admin not found");
    }

    res.status(200).json({
      message: "admin get successfully",
      admin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// delete admin
const deleteAdmin = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);

    let adminExist = await adminService.findAdminById(id);

    if (!adminExist) {
      throw new Error("admin not found");
    }

    let admin = await adminService.deleteAdmin(id);
    res.status(200).json({
      message: "admin delete successfully",
      admin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// update admin
const updateAdmin = async (req, res) => {
  //   console.log(req.body, "body");
  //   console.log(req.params, "params");
  try {
    let body = req.body;
    let { id } = req.params;

    if (!body || !id) {
      throw new Error("admin not get");
    }

    let adminExist = await adminService.findAdminById(id);

    if (!adminExist) {
      throw new Error("admin not found");
    }

    let admin = await adminService.updateAdmin(body, id);

    if (!admin) {
      throw new Error("admin not update");
    }

    res.status(200).json({
      message: "admin updated successfully",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// login
const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email, "email");

    // let Email = req.body.email;
    // let reqPassword = req.body.password;

    // if (!Email || !reqPassword) {
    //   throw new Error("data not get");
    // }

    let admin = await adminService.findEmail(email);

    if (!admin) {
      throw new Error("admin not found");
    } else {
      if (password === admin.password) {
        console.log(admin, "admin");
        let token = createToken(admin);
        res.cookie("token", token);
        res.status(200).json({ message: "login success", token });
      } else {
        throw new Error("password invalid");
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

module.exports = { addAdmin, getAdmin, deleteAdmin, updateAdmin, login };
