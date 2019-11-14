const addPage = require('./addPage')
const editPage = require('./editPage')
const main = require('./main')
const userList = require('./userList')
const userPages = require('./userPages')
const wikiPage = require('./wikipage')
const express = require('express')
const layout = require('./layout')
const app = express()

module.exports = { addPage, editPage, main, userList, userPages, wikiPage }

app.get('/', (req, res, next) => {
  try {
    //await res.send(main)
    res.send(main())
  } catch (error) {
    next(error)
  }
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
