const WebService = require('../../Service/serviceWeb')

const findAllUser = async (req, res) => {
    const data = await WebService.findAllUser()
    return res.render('Page/home', { title: 'Ví dụ EJS', message: 'Xin chào, EJS!' })
}
module.exports = {
    findAllUser: findAllUser,
}