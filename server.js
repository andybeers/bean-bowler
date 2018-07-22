const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const port = process.env.PORT || 3000
const app = express()

// Serve up our dope-ass website
app.use(express.static('./'))

// Scrape dat DOM
app.get('/api/menu', (req, res, next) => {
  axios
    .get('https://cambia.cafebonappetit.com/')
    .then(response => {
      const $ = cheerio.load(response.data, {
        normalizeWhitespace: true,
        decodeEntities: true,
      })
      const menu = $('#cafe-hours-2').html()
      res.send({ menu })
    })
    .catch(err => {
      next(err)
    })
})

// Error Handling
app.use((err, req, res) => {
  const code = err.code || 500
  const error = code === 500 ? 'Internal server error' : err.error
  console.error(err.error || err.message)
  res.status(code).send({ error })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
