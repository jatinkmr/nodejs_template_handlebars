const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3000

// setting up the engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/', require('./routes/'))

// error handler
app.use(function (err, req, res, next) {
    console.log('err -> ', err)
    return res.status(500).send({
        error: true,
        message: err
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`)
})
