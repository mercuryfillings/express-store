const express = require('express')
const PORT = process.env.port || 3000

const app = express()

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello there!')
})

app.get('/product', (req, res) => {
  res.send('Hello there, welcome to product!')
})

app.get('/products', (req, res) => {
  res.send('Hello there, welcome to products!')
})

app.get('/products/:id', (req, res) => {
  res.send('Product Page')
  console.log(req.params);
});