const ApiService = require('../../Service/serviceApi')
const findAllUser = async (req, res) => {
    const data = await ApiService.findAllUser()
    return res.json(data)
}
const cretaeUser = async (req, res) => {
    const data = await ApiService.createUser(req,res)
    return res.json(data)
}
const deleteUser = async (req, res) => {
    const data = await ApiService.deleteUser(req,res)
    return res.json(data)
}
const updateUser = async (req, res) => {
    const data = await ApiService.updateUser(req,res)
    return res.json(data)
}
module.exports = {
    findAllUser: findAllUser,
    cretaeUser: cretaeUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
}