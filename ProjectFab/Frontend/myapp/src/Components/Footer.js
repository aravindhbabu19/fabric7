import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class='footer-footer bg-black text-white p-4'>
        <div class='row'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <h4 class='footer-h4'>LAKSHMI FABRICATIONS</h4>
            <hr class='footer-divider' />
            <p class=''></p><br></br>
            <h4 class='footer-h4'>OUR SOCIAL MEDIA</h4> <br></br>
            
            <Link class='footer-l text-decoration-none text-white' to='https://www.facebook.com/people/Lakshmi-Fabricator/pfbid02K3t3WSxQbSydHjH1LY2UCnoZFj8VdffvqKZK8ndxTEZrpp35XH2B9hqfZoUjScDl/?rdid=zDlOPT62PqIqjKpr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AypWmgWFT%2F'>Facebook</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.google.com/maps/place/courier+service+Trackon/@12.941758,77.493431,16z/data=!4m6!3m5!1s0x3bae3f1bdb876e69:0xd333d81e7b499e2!8m2!3d12.9417579!4d77.4934306!16s%2Fg%2F11lnww_zry?hl=en&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D'>Google</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ylrd2vm'>Instagram</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://x.com/?lang=en-in'>X</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.youtube.com/'>Youtube</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-white' to='https://www.threads.com/'>Threads</Link><br></br><br></br>
            </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4 '>
            <h4 class='footer-h4'>ADDRESS</h4>
            <hr class='' />
            <p class='footer-p'>LAKSHMI ENTERPRISES<br></br> #197 1st Cross, Kenchanapura cross,<br></br> Jnana Jyothi Nagar Ullal, 80ft Ring Road Bengaluru-56<br></br>Karnataka<br></br>India<br></br> <br></br>GSTIN NUMBER : 29EXPPB7831G1Z3</p>
            <h4 class=''>Mob :</h4>
            <p class='footer-p'>+91 9019500835 , 8453498863</p>
            <h4 class=''>Email :</h4>
            <p class='footer-p'>lakshmifabricator3@gmail.com</p>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'> 
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4698641413697!2d77.4934306!3d12.941757899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f1bdb876e69%3A0xd333d81e7b499e2!2scourier%20service%20Trackon!5e0!3m2!1sen!2sin!4v1750745798539!5m2!1sen!2sin" class='service-map' title='add' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class='row'>
          <div class='col footer-2  mt-3'>
          <p>Copyrights © 2025 Lakshmifabrication. All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer