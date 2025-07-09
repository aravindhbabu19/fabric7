const Formmodel = require("../Model/Formmodel");

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lakshmifabricator3@gmail.com',
    pass: 'qspn ktlg frvj lqrt'   
  }
});

exports.getApplication=async(req,res,next)=>{
    Formmodel.create(req.body)
    .then((application)=>res.json(application))
    .catch((err)=>console.log(err))
    const { name, email,phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "lakshmifabricator3@gmail.com",  // send to yourself
    subject: `New Contact Form Submission`,
    text: `
New message from your website contact form:

Name: ${name}
Email: ${email}
Phone:${phone}
Message: ${message}
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
}

