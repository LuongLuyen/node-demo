const UserModel = require('../Model/modelUser')

const findAllUser = async(req,res) => {
    try {
        const data= await UserModel.find()
        return data
    } catch (error) {
        return error
    }
}


module.exports = {
    findAllUser: findAllUser,
}