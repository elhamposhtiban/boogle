import React from "react";
import "./style.css";
import background1 from '../../assets/image/2.jpg';

const backgroundStyle = {
  backgroundImage: `url(${background1})`
};


function Wrapper(props) {
  return <div className="wrapper" style= {backgroundStyle} >{props.children}</div>;
}

export default Wrapper;
