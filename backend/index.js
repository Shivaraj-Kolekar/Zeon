import express from 'express'
import db from './src/db.js'

import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { eq } from 'drizzle-orm'
import dotenv from 'dotenv'
import { login } from './routes/login.js'
import { UserTable } from './src/drizzle/schema.js'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { assetsTable, employeesTable } from './src/drizzle/schema.js'
const app = express()
const port = 4000
app.use(express.static('public'))
dotenv.config({ path: '.env' })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for URL-encoded payloads
app.use(
  cors({
    origin: 'https://zeon-frontend.vercel.app'
  })
) // Enable CORS for all origins

app.use(express.json())

//JWT verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  }

  const actualToken = token.split(' ')[1] // Extract the token part

  jwt.verify(actualToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
    }
    req.userId = decoded.id
    next()
  })
}

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.email, email))
      .limit(1)
    if (existingUser.length > 0) {
      return res
        .status(409)
        .json({ message: 'User with this email already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await db
      .insert(UserTable)
      .values({
        name,
        email,
        password: hashedPassword
      })
      .returning({ insertedId: UserTable.id })

    const token = jwt.sign(
      { id: result[0].insertedId },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400 // expires in 24 hours
      }
    )

    res.status(201).json({ auth: true, token: token })
  } catch (error) {
    console.error('Registration error:', error)
    res
      .status(500)
      .json({ message: 'Error registering user', error: error.message })
  }
})

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const user = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.email, email))
      .limit(1)
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    const passwordIsValid = await bcrypt.compare(password, user[0].password)
    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ auth: false, token: null, message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // expires in 24 hours
    })

    res.status(200).json({ auth: true, token: token })
  } catch (error) {
    console.error('Login error:', error)
    res
      .status(500)
      .json({ message: 'Error on the server', error: error.message })
  }
})

/*Protected route example
app.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.id, req.userId))
      .limit(1)
    if (user.length === 0) return res.status(404).send('No user found.')

    // Remove password from the response
    const { password, ...userWithoutPassword } = user[0]
    res.status(200).send(userWithoutPassword)
  } catch (error) {
    res.status(500).send('There was a problem finding the user.')
  }
})*/

//ADD employee route
app.post('/addemp', async (req, res) => {
  try {
    const { employeeId, name, email, role, department, joindate } = req.body

    const emp = await db
      .insert(employeesTable)
      .values({ employeeId, name, email, role, department, joindate })
      .returning()
    res.status(200).json('employee data inserted succesfully')
  } catch (err) {
    console.log(err)

    res.status(500).json('data not inserted')
  }
})

//ADD asset route
app.post('/addasset', async (req, res) => {
  console.log('req.body:', req.body)
  try {
    const {
      assetId,
      assetname,
      type,
      status,
      category,
      assignedTo,
      createdAt,
      updatedAt
    } = req.body

    // Ensure createdAt and updatedAt are valid Date objects
    const createdAtDate = createdAt ? new Date(createdAt) : new Date()
    const updatedAtDate = updatedAt ? new Date(updatedAt) : new Date()

    const asset = await db
      .insert(assetsTable)
      .values({
        assetId,
        assetname,
        type,
        status,
        category,
        assignedTo,
        createdAt: createdAtDate,
        updatedAt: updatedAtDate
      })
      .returning()

    res.status(200).json('Asset data inserted successfully')
  } catch (err) {
    res.status(500).json('Data not inserted')
    console.log(err)
  }
})
//Get ALL employees info route
app.get('/emp', async (req, res) => {
  try {
    const result = await db.select().from(employeesTable)
    if (!res.headersSent) {
      res.status(200).json(result)
    }

    res.status(200).json('employee data fetched successfully.')
  } catch (err) {
    console.log(err)
    if (!res.headersSent) {
      res.status(500).json('Error fetching employee data.')
    }
  }
})

//Get ALL assets info route

app.get('/assets', async (req, res) => {
  try {
    const assetResult = await db.select().from(assetsTable)
    if (!res.headersSent) {
      res.status(200).json(assetResult)
    }

    res.status(200).json('asset data fetched succesfully')
  } catch (err) {
    console.log(err)
    if (!res.headersSent) {
      res.status(500).json('error occured while fetchinh the asset data')
    }
  }
})

//Update Employee route
app.put('/employee/:id', async (req, res) => {
  try {
    const result = await db
      .update(employeesTable)
      .set(req.body)
      .where(eq(employeesTable.employeeId, req.params.id))

      .returning()
    if (!res.headersSent) {
      res.status(200).json(result)
    }
    console.log('employee data updated succesfully')
  } catch (err) {
    console.log(err)

    if (!res.headersSent) {
      res.status(500).json('Error updating employee data.')
    }
  }
})

app.put('/asset/:id', async (req, res) => {
  try {
    const updatedData = { ...req.body }

    // Handle timestamp fields
    if (updatedData.createdAt) {
      updatedData.createdAt = new Date(updatedData.createdAt)
    }
    if (updatedData.updatedAt) {
      updatedData.updatedAt = new Date()
    } else {
      updatedData.updatedAt = new Date()
    }

    const result = await db
      .update(assetsTable)
      .set(updatedData)
      .where(eq(assetsTable.assetId, req.params.id))
      .returning()

    if (result.length === 0) {
      return res.status(404).json({ message: 'Asset not found' })
    }

    res.status(200).json(result[0])
    console.log('Asset data updated successfully')
  } catch (err) {
    console.error(err)
    if (!res.headersSent) {
      res
        .status(500)
        .json({ message: 'Error updating asset', error: err.message })
    }
  }
})

//Delete Employee route
// to delete employee
app.delete('/employee/:id', async (req, res) => {
  try {
    const result = await db
      .delete(employeesTable)
      .where(eq(employeesTable.employeeId, req.params.id))
      .returning()

    if (!res.headersSent) {
      res.status(200).json(result)
    }
  } catch (err) {
    console.log(err)

    if (!res.headersSent) {
      res.status(500).json('Error deleting employee data.')
    }
  }
})

app.delete('/asset/:id', async (req, res) => {
  try {
    await db
      .delete(assetsTable)
      .where(eq(assetsTable.assetId, req.params.id))
      .returning()
    if (!res.headersSent) {
      res.status(200).json('asset deleted successfully')
    }
  } catch (err) {
    console.log(err)

    if (!res.headersSent) {
      res.status(500).json('Error deleting asset data.')
    }
  }
})

//initial route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cookieParser())
//app.post('/login', login)

//app.post('/signup', cookieJwtAuth, signupRoute)

//Server port start route
app.listen(4001, () => {
  console.log('listening on port 4000')
})
