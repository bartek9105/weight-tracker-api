const express = require('express')
const router = express.Router()

const { addStats, getStats } = require('../controllers/stats.controller')

router.post('/', addStats)
router.get('/', getStats)

module.exports = router