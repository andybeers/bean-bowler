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
        decodeEntities: true,
      })
      const menu = $('#daypart-2-4').text()
      res.send({ menu })
    })
    .catch(err => {
      next(err)
    })
})

// Error Handling
app.use((err, req, res, next) => {
  const code = err.code || 500
  const error = code === 500 ? 'Internal server error' : err.error
  console.error(err.error || err.message)
  res.status(code).send({ error })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
