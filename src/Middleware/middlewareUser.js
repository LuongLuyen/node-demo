const checkLogin = (req, res, next) => {
    const role = req.body.role
    if(role === 'USER' || role === 'ADMIN'){
        next()
    }else{
        res.json({"payload":"Bạn chưa đăng nhập"})
    }
}
const checkAdmin = (req,res,next) => {
    const role = req.body.role
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