const ApiController = require("../Controller/Api/apiUser")
const Middleware = require("../Middleware/middlewareUser")
const router = require("express").Router()

router.get('/user', ApiController.findAllUser)
router.put('/user/:id', ApiController.updateUser)
router.post('/user', ApiController.cretaeUser)
router.delete('/user/:id',Middleware.checkAdmin, ApiController.deleteUser)

module.exports = router