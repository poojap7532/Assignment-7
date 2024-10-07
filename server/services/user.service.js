const { userSchema } = require("../model")

// find user by email
const findUserByEmail = (email) => {
    return userSchema.findOne({ email });
}

// add user
const addUser = (body) =>{
    return userSchema.create(body)
}

// get user
const getUser = () => {
    return userSchema.find()
}

// find user for delete
const findUserById = (id) => {
    return userSchema.findById(id)
}

// delete user
const deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

// update user
const updateUser = (body, id)=>{
    return userSchema.findByIdAndUpdate(id,{ $set: body})
}

module.exports= {findUserByEmail, addUser, getUser, findUserById, deleteUser, updateUser}