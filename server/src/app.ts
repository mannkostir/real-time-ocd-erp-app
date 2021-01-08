import express from 'express'
import mongoose from 'mongoose'
import config from './config'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json({ extended: true }))

app.use(cookieParser())

// mongoose
//   .connect(config.databaseURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .catch((err) => console.error(err))

app.listen(config.port, () => {
  console.log(`Server has been started on port ${config.port}`)
})
