import express, { type Application } from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoute'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

app.use(cors())

app.use(express.json())

app.use('/api/users', userRoutes)

export default app
