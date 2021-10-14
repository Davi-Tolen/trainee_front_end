import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
        <div>
             <div className="entrada">

                <div className="botao">
                  <Button href="/login" variant="outline-light"><div className="botao1">Agende sua Consulta</div></Button>
                </div>
                
                       
             </div>

        
        </div>
    )
};

export default Home;