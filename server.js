const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')

const port = process.env.PORT || 3000
const app = express()

app.use(cors())

// Serve up our dope-ass website
app.use(express.static('./dist'))

// Scrape dat DOM
app.get('/api/menu', (req, res, next) => {
  axios
    .get('https://cambia.cafebonappetit.com/cafe/the-trellis/')
    .then(response => {
      const $ = cheerio.load(response.data, {
        decodeEntities: true,
      })
      const menu = $('#cafe-hours-2 .g-col div:contains("Closed")').html()
      console.log(menu)
      res.send({ menu })
    })
    .catch(err => {
      next(err)
    })
})

// Error Handling
/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, next) => {
  const code = err.code || 500
  const error = code === 500 ? 'Internal server error' : err.error
  console.error(err.error || err.message)
  res.status(code).send({ error })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
