const router = require('express').Router()
const Controller = require('../controller')

router.get('/home', Controller.homePageController)
router.get('/main', Controller.mainPageController)

module.exports = router