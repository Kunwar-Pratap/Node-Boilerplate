import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI: string | undefined = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables.')
}

const connectToDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB Successfully Connected: ${conn.connection.host}`)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error during DB connection: ${error.message}`)
    } else {
      console.error('An unknown error occurred during DB connection!')
    }
    process.exit(1)
  }
}

export default connectToDB
