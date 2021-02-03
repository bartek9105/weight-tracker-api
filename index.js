const express = require('express')
const dbConnection = require('./db')
require('dotenv').config()

dbConnection()

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
