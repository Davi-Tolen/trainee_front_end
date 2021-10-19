import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
      <div className="home">
        <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
        <div className="entrada2"><Button variant="outline-light">Agende sua Consulta</Button></div>
        <div className="agende">
          <div className="agende1"><p className="atende-los">Estamos prontos para atende-lo com eficiência e conforto!</p></div>
          <div className="agende2"><Button variant="outline-light">Agende sua Consulta</Button></div>
        </div>
      </div>
    )
};

export default Home;