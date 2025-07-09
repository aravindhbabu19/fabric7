import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';



const Contact = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post('https://fabric7.onrender.com/contact',{name,email,phone,message})
    .then((result)=>{
      console.log(result)
      toast.success("Your info was successfully submitted. Our team will contact you shortly")
    })
    .catch(err=>console.log(err))
  }


  

//  const handleSubmit=(e)=>{

//     e.preventDefault()
//     axios.post('http://localhost:3500/api/v1/Fabrication',{name,email,phone,message})
//     .then((result)=>{
//         console.log(result)
//         toast.success("your Data Register Successfully")
//     }
    
// )
//     .catch(err=>console.log(err))
// } 



  return (
    <div>
      <div class='contact-div'>
        <h1 class='contact-head11 ms-3 pt-5'> PRECISION <span class='service-span12'>MEETS</span> PERFORMANCE</h1>
         <Link class='text-decoration-none' to={'/Contact'}>
         <button class='service-button ms-3 mt-3'><a class="nav-link" href="">Contact Us</a></button>
         </Link>
      </div>
      <div class='contact-br'>
        <div class='service-head3 mt-5'>
        <h1 class='d-flex justify-content-center contact-head mt-5'>GET IN TOUCH</h1>
        </div>
        <p class='contact-p12 mt-5'>Looking to get started on your next project? Whether it's a custom metal fabrication, a durable roofing shed, a modern food truck, or a complete sports infrastructure setup, Lakshmi Fabrication & Welding Services is here to help. Our team is just a call or message away and ready to assist you with expert advice, clear pricing, and on-site assessments. We understand that every project is unique, which is why we take the time to listen to your needs and provide personalized solutions that match your vision and budget. Reach out today to discuss your requirements, request a free quote, or schedule a site visit. Let’s work together to bring your ideas to life with strength, style, and precision.</p>
        <div class='row pb-5 ms-5'>
        <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-5 contact-form1'>
         <form class='contact-form' onSubmit={handleSubmit}>
            <label class='form-label'>Name</label>
            <input type="text" required='true' name='nam' class='form-control' placeholder='Enter Your Name' size="50" value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
            <label class='form-label'>Contact Number</label>
            <input type="text" required='true' name='cont' class='form-control' placeholder='Enter Your Contact No' size="50" value={phone} onChange={(e)=>setPhone(e.target.value)} /><br></br>
            <label class='form-label'>Email I'd</label> 
            <input type="text" required='true' name='ema' class='form-control' placeholder='Enter Your Email' size="50" value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <label class='form-label'></label>
            <textarea rows='5' required='true' cols='50'  placeholder='Message' name='mess' class='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button type='submit'  class='btn btn-dark mt-3' >Submit</button>
        </form>
        </div>
        <div class=' col-12 col-sm-12 col-md-12 col-lg-6 mt-5 contact-map1'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4698641413697!2d77.4934306!3d12.941757899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1bdb876e69%3A0xd333d81e7b499e2!2scourier%20service%20Trackon!5e0!3m2!1sen!2sin!4v1750745798539!5m2!1sen!2sin" class='contact-map rounded ms-3' height={580} width={550} title='add' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Contact
