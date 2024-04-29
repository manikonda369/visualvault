// import * as dotenv from 'dotenv'
// dotenv.config()
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { VerifyRoute } from './routes/verify.js'
import { DigestRoutes } from './routes/digest.js'
import { router as contactRoutes } from './routes/contact.js'
import { router as imageRoutes } from './routes/image.js'
import { router as userRoutes } from './routes/users.js'

const port = 5000;

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/verify', VerifyRoute)
app.use('/api/user/', userRoutes)
app.use('/api/image/', imageRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/digest', DigestRoutes)

mongoose.set('strictQuery', true)
mongoose
    .connect(`mongodb+srv://kumarsaimanikonda369:kumarsaimanikonda369@cluster0.gise7pt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("MongoDB connection successful")
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`)
        })
    })
    .catch(err => console.log(err))