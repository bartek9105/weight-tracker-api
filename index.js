const express = require('express')
const cors = require('cors')
const dbConnection = require('./db')
require('dotenv').config()

dbConnection()

const statsRoutes = require('./routes/stats.route')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/stats', statsRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
