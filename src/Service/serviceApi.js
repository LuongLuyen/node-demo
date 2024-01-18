const UserModel = require('../Model/modelUser')

const createUser = async(req,res) => {
    try {
        const { name, userName, password,email,role} = req.body
        const data = new UserModel({ name, userName, password,email, role})
        data.save(data)
        return data
    } catch (error) {
        return error
    }
}
const updateUser = async(req,res) => {
    try {
        console.log(req.params.id)
        await UserModel.updateOne({_id:req.params.id}, req.body)
        const data =req.body
        return data
    } catch (error) {
        return error
    }
}
const deleteUser = async(req,res) => {
    try {
        const id = req.params.id
        await UserModel.deleteOne({ _id:id })
        const data= await UserModel.find()
        return data
    } catch (error) {
        return error
    }
}
const findAllUser = async(req,res) => {
    try {
        const data= await UserModel.find()
        return data
    } catch (error) {
        return error
    }
}


module.exports = {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    findAllUser: findAllUser,
}