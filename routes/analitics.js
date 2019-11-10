const express = require('express')
const router = express.Router()
const controller = require('../controllers/analitics')

router.get('/overview', controller.ovweview)
router.get('/analitics', controller.ovweview)


module.exports = router
