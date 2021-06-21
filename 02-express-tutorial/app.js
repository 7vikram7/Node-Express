const app = require('express')()

const {products} = require('./data')

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})