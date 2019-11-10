const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')


// На случай работы без контроллера
// router.get('/login', (req, res) => {
//   res.status(200).json({
//     login: true
//   })
// })

router.post('/login', controller.login)
router.post('/register', controller.register)


module.exports = router
