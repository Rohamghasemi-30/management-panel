import { NavLink } from "react-router-dom";
import "../NavbarFirst/NavbarFirst.css"
import React from 'react'

function NavbarFirst() {
  return(
         <div className="nav-one">
         <div className="logo">
           <NavLink to="/"><img src="../src/image/logo.svg" alt="" /></NavLink>
         </div>
         <div className="search-box">
           <input type="search" placeholder='جستوجو'/>
         </div>
         <div className="login">
            <NavLink to="/login"><i class="fa-regular fa-user fa-xl"></i> <i class="fa-solid fa-caret-down fa-xl"></i></NavLink>
             <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
         </div>
       </div>
      );
}

export default NavbarFirst