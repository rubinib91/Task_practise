import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './router/routes.js'


dotenv.config()
const app=express()

app.use(cors())
app.use(express.json())

app.use("/api/register",route)

const Port_number = process.env.PORT || 3000

app.listen(Port_number,()=>{
    console.log(`Server Connected SUccessfully http://localhost:${Port_number}`)
})

// http://localhost:5000/api/register

