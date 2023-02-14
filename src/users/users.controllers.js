const Users = require('../models/users.models')

const findAllUser = async () => {
    const data = await Users.findAll()
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createNewUser = async (userObj) => {
    const newUser = {
        firstName : userObj.firstName,
        lastName : userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        profileImage: userObj.profileImage,
        phone : userObj.phone
    }
    const data = await Users.create(newUser)
    return data
}

const updateUser = async (id, userObj) => {
    const data = await Users.update(userObj,{
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUser,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser
}