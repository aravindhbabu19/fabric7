import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
         <nav class="navbar navbar-dark bg-black text-white navbar-expand-lg">
            
                <Link class='text-decoration-none' to={'/'}>
                <img src='./Images/Fab/logo1.jpeg' height={100} width={100} class='rounded ms-2'/>
                </Link>
                <button type="button" class="navbar-toggler me-2" data-bs-toggle="collapse" data-bs-target="#ull">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="ull">
                    
                    <ul class="navbar-nav ms-auto">
                        <Link class='text-decoration-none ' to={'/'}>
                        <li class="nav-item ms-3 me-5"><a class="nav-link active nav1-color" href="">Home</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/About'}>
                        <li class="nav-item ms-3 me-5"><a class="nav-link active" href="">About Us</a></li>
                        </Link>
                        
                        <Link class='text-decoration-none' to={'/Services'}>
                        <li class="nav-item ms-3 me-5"><a class="nav-link active" href="">Services</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Project'}>
                        <li class="nav-item ms-3 me-5"><a class="nav-link active" href="">Projects</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Contact'}>
                        <li class="nav-item ms-3 me-5"><a class="nav-link active" href="">Contact Us</a></li>
                        </Link>
                    </ul>
                    
                    
                </div>
            
        </nav>
    </div>
  )
}

export default Navigation