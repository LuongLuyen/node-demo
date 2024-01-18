const UserModel = require('../Model/modelUser')
const checkLogin = (req, res, next) => {
    const role = req.body.role
    if(role === 'USER' || role === 'ADMIN'){
        next()
    }else{
        res.json({"payload":"Bạn chưa đăng nhập"})
    }
}
const checkAdmin = async(req,res,next) => {
    user = await UserModel.findById({ _id:req.params.id })
    const role = user.role
    if(role === 'ADMIN'){
        next()
    }else{
        res.json({"payload":"Bạn không có quyền"})
    }
}
module.exports = {
    checkLogin: checkLogin,
    checkAdmin: checkAdmin
}