const express = require('express')

let app = express()

app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

app.listen(3000, err => {
  if (err) {
    console.log('Error!')
  } else {
    console.log('Success!')
  }
})

module.exports = app
