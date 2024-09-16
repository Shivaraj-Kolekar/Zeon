import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const databaseUrl = process.env.DATABASE_URL

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

export default config
