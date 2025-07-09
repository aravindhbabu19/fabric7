const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
const PORT=process.env.PORT||8081;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app=express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lakshmifabricator3@gmail.com',
    pass: 'qspn ktlg frvj lqrt'   
  }
});

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:'lakshmi'
})

app.post('/contact',async(req,res)=>{
    const sql= "INSERT INTO fabrication(name, email, phone,message) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.phone + "','" + req.body.message + "')";
    // const values=[
    //     req.body.name,
    //     req.body.phone,
    //     req.body.email,
    //     req.body.message
    // ]
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error")
        }
        return res.json(data )
    })
    const mailOptions = {
    from: req.body.email,
    to: "lakshmifabricator3@gmail.com",  // send to yourself
    subject: `New Contact Form Submission`,
    text: `
New message from your website contact form:

Name: ${req.body.name}
Email: ${req.body.email}
Phone:${req.body.phone}
Message: ${req.body.message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    // res.send("Thanks for contacting us!");
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
    return;
  }
})


app.get('/',(req,res)=>{
    return res.json("From Backend Side");
})

app.listen(PORT,()=>{
    console.log("Listening")
})