import jwt from 'jsonwebtoken'

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token')

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  try {
  } catch (err) {}
}
