import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';
const About = () => {
  return (
    <div>
      <div class='about-div'>
         <h1 class='service-head ms-3 pt-5'> PRECISION <span class='service-span'>MEETS</span>  PERFORMANCE</h1>
         <Link class='text-decoration-none' to={'/Contact'}>
         <button class='service-button ms-3 mt-3'><a class="nav-link" href="">Contact Us</a></button>
         </Link>
      </div>
      <div class='about-d'>
      <div className='row'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6'>
          <img src='./Images/Fab/weld10.jpeg' alt='' height={500} width={500} class='aboutus-img'/>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6'>
        <div class='service-head3 mt-5'>
        <h1 class='about-he mt-5'>ABOUT US</h1>
        </div>

        <p class='about-p1 mt-5'>About Lakshmi Fabrication & Welding Services
       Established in 1995, Lakshmi Fabrication & Welding Services has grown from a small welding unit into a trusted name in custom metal fabrication, welding, and sports infrastructure solutions. A proud family-run business now led by the second generation, we have carried forward our legacy of craftsmanship, precision, and a customer-first approach for over 25 years.<br></br><br></br> Our expertise spans a wide range of services, including iron gates, railing systems, roofing sheds, rolling shutters, structural fabrication, multi-sport synthetic turfs, modular and civil swimming pools, and custom-built portable food trucks. At Lakshmi Fabrication, we believe in transforming ideas into durable, stylish, and functional solutions for residential, commercial, and industrial clients. We are committed to using only high-quality materials and modern techniques to ensure strength, safety, and longevity in every project we deliver. Our team of experienced fabricators and welders work closely with clients to understand their vision, offering tailored designs that combine utility with aesthetic appeal.<br></br><br></br> Over the years, we have earned the trust of hundreds of clients by consistently delivering on time, maintaining high standards, and exceeding expectations. Innovation is at the core of our work, enabling us to stay ahead in the fields of sports infrastructure and mobile business solutions. Whether it’s a state-of-the-art multi-sports turf, a professional swimming pool, or a fully customized food truck, we bring technical expertise and attention to detail to every project, big or small.</p>
        </div>
      </div>
      <div class='row about-row mt-5 pt-2'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/founder2.jpg' alt='' height={300} width={300} class='aboutus-img2  mt-4'/>
          </div>
          <h3 class='about-fo mt-3'>Loganathan Palani</h3>
          <p class='about-fo1 mt-3'>Founder</p>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-4'>
          <div class='service-head3'>
          <h2 class='about-us1'>Vision</h2>
          </div>
          <p class='about-p3 mt-3'>To be the most trusted name in fabrication and welding services across India, delivering innovative, durable, and customizable solutions that enhance both functionality and aesthetics in infrastructure and lifestyle.</p>
          <div class='service-head3'>
          <h2 class='about-us'>Mission</h2>
          </div>
          <p class='about-p4 mt-3'>To provide high-quality metal fabrication and welding services using state-of-the-art techniques.</p>
          <p class='about-p4 mt-3'>To serve diverse industries from homes and businesses to sports and food infrastructure with tailored fabrication solutions.</p>
          <p class='about-p4 mt-3'>To uphold our legacy of excellence while continuously innovating and adapting to modern demands.</p>
          <p class='about-p4 mt-3'>To ensure customer satisfaction, on-time delivery, and affordable pricing.</p>
        </div>
      </div>
      <div class='row about-row1 mt-5'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/bharath.jpeg' alt='' height={300} width={300} class='aboutus-img2 mt-4'/>
          </div>
          <h3 class='about-fo2 mt-3'>Bharath Loganathan</h3>
          <p class='about-fo3 mt-3'>Proprietor</p>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6 mt-4'>
          <div class='service-head3'>
          <h2 class='about-he'>Core Values</h2>
          </div>
        <p class='about-pa mt-4'><p class='about-pa1'>Integrity:</p> Honesty and transparency in every project and customer relationship.</p>
        <p class='about-pa'><p class='about-pa1'>Craftsmanship:</p> Skilled fabrication rooted in decades of hands-on expertise.</p>
        <p class='about-pa'><p class='about-pa1'>Innovation:</p> Embracing modern methods to meet evolving industry needs.</p>
        <p class='about-pa'><p class='about-pa1'>Reliability:</p> Durable work that stands the test of time and usage.</p>
        <p class='about-pa'><p class='about-pa1'>Responsiveness:</p> Timely delivery, clear communication, and flexible service.</p>
        <p class='about-pa'><p class='about-pa1'>Legacy & Leadership:</p> A proud family-run business built on tradition and driven by progress.</p>
        </div>
      </div>
      <div class='mt-5'>
        <div class='service-head3'>
        <h1 class='about-fab mt-5'>Why Choose Lakshmi Fabrication?</h1>
        </div>
        <p class='about-fab1 mt-5 pb-5'>At Lakshmi Fabrication & Welding Services, we don’t just build structures we build trust, durability, and long-term value. With over 25 years of industry experience, we bring unmatched expertise in custom metalwork, welding, and modern infrastructure solutions. What sets us apart is our commitment to quality craftsmanship, timely delivery, and personalized service tailored to each client’s needs. Whether it’s a residential gate, a commercial shed, a custom-built food truck, or a sports turf installation, we approach every project with precision, passion, and professionalism. From design to execution, we use only high-grade materials and proven techniques to ensure safety, style, and strength in every detail. When you choose Lakshmi Fabrication, you’re choosing a team that stands by its work and stands by you.</p>
      </div>
      </div>
    </div>
  )
}

export default About