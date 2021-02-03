const Stats = require('../models/Stats')

exports.addStats = async (req, res, next) => {
  try {
    const stats = new Stats(req.body)
    await stats.save()
    res.send({ success: true })
  } catch (error) {
    console.log(error)
  }
}

exports.getStats = async (req, res, next) => {
  try {
    const stats = await Stats.find()
    res.send({ success: true, stats })
  } catch (error) {
    console.log(error)
  }
}