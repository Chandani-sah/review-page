import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-4">
          <h2>Contact Us</h2>
          <p>Phone No: xxxxxxxxxx</p>
          <p>Email id: abc@gmail.com</p>
        </div>

        <div className="col-4">
          <h2>Social Links</h2>
          <p>
            <a href="#" className="fa fa-facebook" style = {{marginRight: "5px"}}></a>
            <a href="#" className="fa fa-instagram" style = {{marginRight: "5px"}}></a>
            <a href="#" className="fa fa-twitter" style = {{marginRight: "5px"}}></a>
            <a href="#" className="fa fa-youtube" ></a>
          </p>
          
        </div>

        <div className="col-4">
          <h2>Mail Us</h2>
          <p>PathShala Private Ltd</p>
        </div>
      </div>
      <h6>&copy; {new Date().getFullYear()} Institute | All Rights Reserved</h6>
    </div>
  );
};

export default Footer;
