import express from 'express'
const router = express.Router()
const jwt = require('jsonwebtoken')
import bcrypt from 'bcryptjs'
import db from './src/db.js'
import { UserTable } from '../src/drizzle/schema.js'

router.post('/add', async (req, res) => {
  const { name, email, password } = req.body
  try {
    user = await db.select().from(UserTable).where({ email })

    if (user) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const user = await db.insert(UserTable).values({
      name,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    await db
      .update(UserTable)
      .set({ password: hashedPassword })
      .where({ email })

    const payload = {
      user: {
        id: user
      }
    }

    jwt.sign(
      payload,
      'secret',
      {
        expiresIn: '7 days'
      },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (err) {
    console.log(err)
    res.status(500).json('user not created')
  }
})
