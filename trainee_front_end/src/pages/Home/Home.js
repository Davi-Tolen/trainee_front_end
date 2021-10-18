import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
      <div className="home">
        <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
        <div className="entrada2"><Button variant="outline-light">Light</Button></div>
      </div>
    )
};

export default Home;