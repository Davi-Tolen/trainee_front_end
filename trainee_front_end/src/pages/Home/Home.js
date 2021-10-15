import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
        <div>
             <div className="entrada">

                <div className="botao">
                  <Button className="agendesuaconsulta" href="/login" variant="outline-light"><div className="botao1">Agende sua Consulta</div></Button>
                </div>
              </div> 
                
              <div className="historia1">
                <h1 className="title">Nossa História</h1>
                <img className="logo-header" src="/images/logo-header.png" alt="logo" width="471px"></img>
              </div>
              <div className="historia2">
              <p className="resumo">Em 1979, surgia em Brasília a Clínica Daher, um ponto de atendimento médico na área de cirurgia plástica estética e reparadora. Desde a sua criação, novas tecnologias surgiram e novas patologias foram descobertas, o que motivou a clínica a acompanhar essas mudanças aumentando o número de especialidades oferecidas, adquirindo novos equipamentos e ampliando suas instalações.</p>
              <Button className="leiamais" variant="danger">Leia Mais</Button> 
              </div> 
            
              <div className="profissionais">
                <div claasName="profissionais1">
                <h1 className="nossosprof">Nossos Profissionais</h1>
                </div>
                <div className="profissionais2">
                  <img className="maryjane" src="/images/maryjane.png" alt="maryjane"></img>
                  <p className="maryname">Mary Jane Watson</p>
                
                  
                </div>
              </div>
                      
             

        
        </div>
    )
};

export default Home;