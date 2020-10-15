import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";
import logoImg from "../images/logo.svg";
import { FiArrowRight } from "react-icons/fi";


function Landing() {
    return (
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="logo Happy"/>
          
          <main>
            <h1>Leve felicidade ao mundo!!</h1>
            <p>visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
  
          <div className="location">
            <strong>Dourados</strong>
            <span>Mato Grosso do Sul</span>
          </div>
  
          <Link to="/orphanages-map" className="enter-app"> <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" /> </Link>
  
        </div>  
      </div>
    );
  }

  export default Landing;