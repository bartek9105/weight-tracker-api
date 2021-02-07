const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    res.status(400).send({ error: 'Fields cannot be empty' })
  }
}

module.exports = errorHandler