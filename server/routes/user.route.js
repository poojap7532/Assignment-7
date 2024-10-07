const express = require('express');
const validate = require('../middlewares/validate');
const { userValidation } = require('../validations');
const { userController } = require('../controller');

const route = express.Router()

route.post('/add',validate(userValidation.user),userController.addUser);
route.get('/get', userController.getUser);
route.delete('/delete/:id', userController.deleteUser);
route.put("/update/:id", validate(userValidation.user), userController.updateUser);
route.post('/login', userController.login)

module.exports = route

