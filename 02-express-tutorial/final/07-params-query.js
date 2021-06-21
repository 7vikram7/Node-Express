const app = require('express')()

const {products} = require('./data')

app.get('/', (req, res) => {
    // res.json([{name: 'vikram'}, {name: 'vishakha'}])

    // res.json(products)

    res.send('<h1> New Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    console.log('api/invoked')
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    res.send('Random hardcoded review')
})

app.get('/api/products/:productID', (req, res) => {
    console.log(req)
    console.log(req.params)
    const {productID} = req.params
    const requestedProduct = products.find((product) => {
        if (product.id === Number(productID)) {
            return true
        }
        return false
    })

    if(!requestedProduct) {
        res.status(404).send('Product Does not exist')
    }

    res.json(requestedProduct)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)

    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0,limit)
    }
  
    res.status(200).json(sortedProducts)
  })

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})