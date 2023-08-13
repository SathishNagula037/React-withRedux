import express from 'express'
import mongoose from 'mongoose'
import http from 'http'
import bodyParser from 'body-parser'
import userRouter from './Routers/UserRouter.js'
import productRouter from './Routers/productRouter.js'

import dotenv from 'dotenv'
import cartRouter from './Routers/CartRouter.js'


const app = express()
dotenv.config({ path: './config.env'})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({parameterLimit:10000000, extended: true, limit:"500mb"}));

//test 
app.get('/', (req, res) => {
    console.log("hello world")
})

app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', cartRouter)





//Mongodb setup here sa

mongoose.connect('mongodb://0.0.0.0:27017/sathishRedux', {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connectted...')
})

 const port =  5000;
app.listen(5000, () => {
    console.log(`server on port ",${port}`)
})