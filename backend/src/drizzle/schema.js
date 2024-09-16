import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  date
} from 'drizzle-orm/pg-core'
import { neon } from '@neondatabase/serverless' // Import Neon client
import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'

dotenv.config({ path: '.env' })

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set in .env file')
}

// Define tables
export const employeesTable = pgTable('employees', {
  id: serial('id').primaryKey(),
  employeeId: varchar('employee_id', { length: 6 }).notNull().unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  role: text('role').notNull(),
  department: text('department').notNull(),
  joindate: date('join_date').notNull()
})

export const UserTable = pgTable('Users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull()
})

export const assetsTable = pgTable('assets', {
  id: serial('id').primaryKey(),
  assetId: varchar('asset_id', { length: 5 }).notNull().unique(),
  assetname: text('assetname').notNull(),
  type: text('type').notNull(),
  status: text('status').notNull(),
  category: text('category').notNull(),
  assignedTo: varchar('assigned_to', { length: 30, array: true }).references(
    () => employeesTable.employeeId,
    { onDelete: 'set null' }
  ),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date())
})

// Set up Neon connection and Drizzle ORM
const sql = neon(databaseUrl)
export const db = drizzle(sql)

export default {
  employeesTable,
  assetsTable,
  UserTable,
  db
}
