import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const databaseUrl =
  'postgresql://neondb_owner:xNI5TesP7cGf@ep-square-voice-a5d4bjog.us-east-2.aws.neon.tech/neondb?sslmode=require'

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set in .env file')
}

const config = defineConfig({
  schema: './src/drizzle/schema.js',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl
  },
  verbose: true,
  strict: true
})

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  connectionString:
    'postgres://username:password@ep-square-voice-a5d4bjog.us-east-2.aws.neon.tech:5432/database'
}
