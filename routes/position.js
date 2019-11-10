const express = require('express')
const router = express.Router()
const controller = require('../controllers/position')

// На случай работы без контроллера
// router.get('/login', (req, res) => {
//   res.status(200).json({
//     login: true
//   })
// })

router.get('/:categoryId', controller.getByCategoryId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)


module.exports = router
