import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const databaseUrl =
  'postgresql://neondb_owner:xNI5TesP7cGf@ep-square-voice-a5d4bjog.us-east-2.aws.neon.tech/neondb?sslmode=require'
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set in .env file')
}

const sql = neon(databaseUrl)
const db = drizzle(sql)

export default db
