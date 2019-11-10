const app = require('./app')
const port = process.env.PORT | 5000

// app.listen(5000, function () {
//   console.log('Server has been started')

// Тестовый роут
// app.get('/', (req, res) => {
//    res.status(200).json({
//      message: 'Working'
//    })
// })

app.listen(port, () =>  console.log('Server has been started '+`${port}`))

