import React from "react";
import SavedList from "../SavedList"
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
      <a href="/saved" className= "btn btn-success btn-style" > SAVED BOOKS</a>
      </li>
      <li className="nav-item">
      <h1 className="lead second-title"> Welcome To Boogle Library </h1>
      </li>
      
    </ul>
  </div>
</nav> )
}
   
export default Navbar;