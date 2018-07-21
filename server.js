const express = require('express')
const cheerio = require('cheerio')

const port = process.env.PORT || 3000
const app = express()

app.get('/bilbos', (req, res) => {
  res.send('dope dude')
})
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
