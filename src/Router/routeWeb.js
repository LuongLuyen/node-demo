const WebController = require("../Controller/Web/webHome")
const router = require("express").Router()

router.get('/', WebController.findAllUser)

module.exports = router