import express from "express"
import mongoose from "mongoose"
import router from "./router/indexRoute"
const app = express()
import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1', router)

// mongoose.connect("mongodb://localhost:27017/HMS", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to the database')
// }).catch(() => {
//     console.log('There was an error connecting to your database')
// });


mongoose.connect(process.env.MONGODBURI as string)
.then(() => {
    console.log('Connected to the database')
}).catch(() => {
    console.log('There was an error connecting to your database')
})

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})