const express=require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
dotenv.config({path:path.join(__dirname,'Config','config.env')})
const Form=require('./Routes/Form')
const Connectdb = require('./Config/Connectdb')
const cors = require('cors');
const PORT=process.env.PORT||3500
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());


app.use('/api/v1/',Form)


Connectdb()


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})