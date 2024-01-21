import express  from "express"
import mongoose from "mongoose"
import cors from "cors"
// import dotenv from "dotenv"

import userRoutes from './server/routes/user.js'
import questionRoutes from './server/routes/Questions.js'
import answerRoutes from './server/routes/Answers.js'
const app = express();
// dotenv.config()

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL= "mongodb+srv://harshil:harshil7226@stack-overflow-clone.sa1boe5.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect( CONNECTION_URL, { useNewUrlParser:true,useUnifiedTopology:true})
 .then(()=> app.listen(PORT,()=> {console.log(`server running on port ${PORT}`)}))
 .catch((err)=>console.log(err.message))

  