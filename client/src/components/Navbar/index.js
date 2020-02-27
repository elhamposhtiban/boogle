import React from "react";
import "./style.css"



const Navbar = (props)=> {

   return (
<nav className="navbar navbar-expand-lg  navbar-style sticky-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item">
      <h1 className="lead second-title">  Saved books </h1>
      </li>
      <li className="nav-item">
      <h1 className="lead second-title"> YOUR BEST SCORE : </h1>
      </li>
      
    </ul>
  </div>
</nav> )
}
   
export default Navbar;