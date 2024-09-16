import jwt from 'jsonwebtoken'

const getUser = async username => {
  return {
    userId: 12,
    password: '12345678',
    username
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body
  const user = await getUser(username)
  if (username.password !== password) {
    return res.status(400).json({
      message: 'Invalid username or password'
    })
  }

  delete user.password

  const token = jwt.sign(user, 'secret', { expiresIn: '1h' })

  res.cookie('token', token, {
    httpOnly: true
  })

  return res.json(user)
}
