import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

  const testimonials = [
  {
    img:'Images/Fab/img1.jpeg',
    quote: "We approached Lakshmi Fabrication for a container based retail kiosk and were blown away by the finish and functionality. They customized every detail perfectly for our brand. Truly impressed with their quality and customer support.",
    author: "Rohit Mehta, Retail Business Owner",
  },
  {
    img:'Images/Fab/img4.jpeg',
    quote: "Lakshmi Fabrication did a fantastic job installing our main gate and custom window grills. The designs were modern, the welding was solid, and the team was highly professional throughout. They delivered exactly what we wanted on time and within budget.",
    author: "Mrs. Sangeetha R , Coimbatore",
  },
  {
    img:'Images/Fab/img2.jpeg',
    quote: "Our food truck was built from scratch by Lakshmi Fabrication and it turned out better than we imagined. From the layout to the finishing touches, everything was top-notch. Their attention to detail and technical knowledge really made a difference.",
    author: " Chef Varun S , Madurai",
  },
  {
    img:'Images/Fab/img3.jpeg',
    quote: "We hired Lakshmi Fabrication to install a modular swimming pool at our farmhouse, and they executed it flawlessly. The structure is safe, beautifully finished, and exactly as per our specifications. Highly recommended.",
    author: " Sridhar Kumar, Property Owner",
  },
  {
    img:'Images/Fab/img5.jpeg',
    quote: "Lakshmi Fabrication transformed our empty space into a fully functional multi-sport turf with a dedicated badminton court. The turf quality is excellent and maintenance friendly. Perfect for both kids and adults.",
    author: " Rajesh M , Community Organizer",
  },
];
 const [current, setCurrent] = useState(0);
 const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
       <div class='home-div'>
        <h1 class='home-head11 ms-3 pt-5'>  QUALITY IRON <span class='service-span1'>&</span> STEEL FABRICATION WORKS</h1>
        <h2 class='home-h ms-3'>Since 1995</h2>
         <Link class='text-decoration-none' to={'/Contact'}>
         <button class='service-button ms-3 mt-3'><a class="nav-link" href="">Contact Us</a></button>
         </Link>
       </div>
       <div class='home-div1'>
        <div class='row'>
          <div class='col-12 col-sm-12 col-md-6 col-lg-6'>
            <img src='./Images/Fab/weld10.jpeg' alt='' height={600} width={500} class='aboutus-img'/>
          </div>
          <div class='col-12 col-sm-12 col-md-6 col-lg-6 home-about'>
            <div class='service-head3 mt-5'>
            <h1 class='about-he mt-5'>ABOUT US</h1>
          </div>
          <p class='about-p1 mt-5'>About Lakshmi Fabrication & Welding Services
          Established in 1995, Lakshmi Fabrication & Welding Services has grown from a small welding unit into a trusted name in custom metal fabrication, welding, and sports infrastructure solutions. A proud family-run business now led by the second generation, we have carried forward our legacy of craftsmanship, precision, and a customer-first approach for over 25 years.<br></br><br></br> Our expertise spans a wide range of services, including iron gates, railing systems, roofing sheds, rolling shutters, structural fabrication, multi-sport synthetic turfs, modular and civil swimming pools, and custom-built portable food trucks. At Lakshmi Fabrication, we believe in transforming ideas into durable, stylish, and functional solutions for residential, commercial, and industrial clients. We are committed to using only high-quality materials and modern techniques to ensure strength, safety, and longevity in every project we deliver. Our team of experienced fabricators and welders work closely with clients to understand their vision, offering tailored designs that combine utility with aesthetic appeal.<br></br><br></br> Over the years, we have earned the trust of hundreds of clients by consistently delivering on time, maintaining high standards, and exceeding expectations. Innovation is at the core of our work, enabling us to stay ahead in the fields of sports infrastructure and mobile business solutions. Whether it’s a state-of-the-art multi-sports turf, a professional swimming pool, or a fully customized food truck, we bring technical expertise and attention to detail to every project, big or small.</p>
          </div>
        </div>
       </div>
       <div class='home-div2'>
          <div class='service-head3 mt-5'>
          <h1 class='service-head1 mt-5 d-flex justify-content-center'>Our Services</h1>
          </div>
      <div class='row'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/contkitch1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center '>Container Kitchen</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/contkiosk1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Container Kiosk</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3 pb-5'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/foodcart1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center '>Food Cart</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/portablefood1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head51  d-flex justify-content-center '>Portable food Cabin</h5>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/bad.png' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Badminton Court</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/Pickle.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center '>Pickle Ball Court </h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/multisport1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center '>Multi Sport Turf</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/bask.jpeg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Basketball court</h5>
        </div>
      </div>
      <div class='row'>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/wall.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Boundary Walls</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/roof.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Roofing Shed</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/roll.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center '>Rolling Shutter</h5>
        </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-3 pb-5'>
          <div class='d-flex justify-content-center'>
          <img src='./Images/Fab/grill1.jpg' alt='' height={250} width={250} class='service-img mt-5'/>
          </div>
          <h5 class='service-head5 d-flex justify-content-center'>Iron Grill</h5>
        </div>
      </div>
       </div>
       <div class='home-div3'>
        <div class='service-head3 mt-5'>
        <h1 class='d-flex justify-content-center pt-3 mt-3 home-ser'>Why Us</h1>
        </div>
        <p class='about-fab1 mt-5 pb-5 '>At Lakshmi Fabrication & Welding Services, we don’t just build structures we build trust, durability, and long-term value. With over 25 years of industry experience, we bring unmatched expertise in custom metalwork, welding, and modern infrastructure solutions. What sets us apart is our commitment to quality craftsmanship, timely delivery, and personalized service tailored to each client’s needs. Whether it’s a residential gate, a commercial shed, a custom-built food truck, or a sports turf installation, we approach every project with precision, passion, and professionalism. From design to execution, we use only high-grade materials and proven techniques to ensure safety, style, and strength in every detail. When you choose Lakshmi Fabrication, you’re choosing a team that stands by its work and stands by you.</p>
       </div>
    <div class='home-test'>
      <h2 class='home-what mt-5 '>What our customers say's about us</h2>
     <div className="testimonial-slider">
      <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, index) => (
          <div className="slide" key={index}>
            <img src={t.img} alt='1' height={150} width={170} class='test-ho'/>
            <p>"{t.quote}"</p>
            <h4>- {t.author}</h4>
          </div>
        ))}
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home