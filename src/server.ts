import cluster from 'cluster'
import os from 'os'
import http from 'http'
import app from './app'
import dotenv from 'dotenv'
import connectDB from './config/database'

dotenv.config()

const totalCPUs: number = os.cpus().length

const PORT: number = parseInt(process.env.PORT || '9000')

connectDB().then(() => {
  if (cluster.isPrimary) {
    console.log(`🔹 Primary ${process.pid} is running`)

    for (let i = 0; i < totalCPUs; i++) {
      cluster.fork()
    }

    cluster.on('exit', (worker) => {
      console.log(`Worker ${worker.process.pid} died. Restarting...`)
      cluster.fork()
    })

    console.log(`Server is running on http://localhost:${PORT}`)
  } else {
    const server = http.createServer(app)

    server.listen(PORT, () => {
      console.log(`Worker ${process.pid} listening on http://localhost:${PORT}`)
    })
  }
})
