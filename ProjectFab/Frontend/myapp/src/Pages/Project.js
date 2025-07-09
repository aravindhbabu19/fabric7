import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div>
    <div class='project-div'>
        <h1 class='project-head11 ms-3 pt-5'> PRECISION <span class='service-span12'>MEETS</span> PERFORMANCE</h1>
         <Link class='text-decoration-none' to={'/Contact'}>
         <button class='service-button ms-3 mt-3'><a class="nav-link" href="">Contact Us</a></button>
         </Link>
    </div>
    <div class='project-div1'>
      <div class='service-head3 mt-5'>
        <h1 class='service-head1 d-flex justify-content-center pb-5'>Our Projects</h1>
      </div>
      <div class='row'>
        <div class='project-col1  col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
           <img src='./Images/Fab/project1.jpeg' alt='' height={350} width={350} class='project-imag' />
          </div>
          <h5 class='project-head5 '>Turf Maintenance</h5>
        </div>
        <div class='project-col1 col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
            <img src='./Images/Fab/project2.jpeg' alt='' height={350} width={350} class='project-imag '/>
          </div>
          <h5 class='project-head5 '>Food Cart</h5>
        </div>
        <div class='project-col1 col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
           <img src='./Images/Fab/project3.jpeg' alt='' height={350} width={350} class='project-imag '/>
          </div>
          <h5 class='project-head5 '>Custom Fabrication</h5>
        </div>
      </div>
      <div class='row pt-5 pb-5'>
        <div class='project-col1 col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
           <img src='./Images/Fab/bad.webp' alt='' height={350} width={350} class='project-imag '/>
          </div>
          <h5 class='project-head5 '>Badminton Court</h5>
        </div>
        <div class='project-col1 col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
           <img src='./Images/Fab/swim.png' alt='' height={350} width={350} class='project-imag '/>
          </div>
          <h5 class='project-head5 '>Swimming Pool</h5>
        </div>
        <div class='project-col1 col-12 col-sm-12 col-md-4 col-lg-4 pb-4'>
          <div>
           <img src='./Images/Fab/tablete.jpg' alt='' height={350} width={350} class='project-imag '/>
          </div>
          <h5 class='project-head5'>Table Tennis</h5>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Project