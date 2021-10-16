import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
        <div className="alicerce">
             <div className="entrada">

                <div className="botao">
                  <Button className="agendesuaconsulta" href="/login" variant="outline-light"><div className="botao1">Agende sua Consulta</div></Button>
                </div>
              </div> 
            <div className="alicerce1">    
              <div className="historia1">
                <h1 className="title">Nossa História</h1>
                <img className="logo-header" src="/images/logo-header.png" alt="logo" width="471px"></img>
              </div>
              <div className="historia2">
              <p className="resumo">Em 1979, surgia em Brasília a Clínica Daher, um ponto de atendimento médico na área de cirurgia plástica estética e reparadora. Desde a sua criação, novas tecnologias surgiram e novas patologias foram descobertas, o que motivou a clínica a acompanhar essas mudanças aumentando o número de especialidades oferecidas, adquirindo novos equipamentos e ampliando suas instalações.</p>
              <Button className="leiamais" variant="danger" href="/nossahistoria">Leia Mais</Button> 
              </div> 
            </div>
            
              <div className="profissionais">
                <div claasName="profissionais1">
                  <h1 className="nossosprof">Nossos Profissionais</h1>
                </div>
                <div className="profissionais2">
                  <div className="maryjane">
                    <img className="maryjane1" src="/images/maryjane.png" alt="maryjane"></img>
                    <p className="maryname2">Mary Jane Watson</p>
                </div>
                  <div className="ivetesangalo">
                    <img className="ivetesangalo1" src="/images/ivetesangalo.png" alt="ivetesangalo"></img>
                    <p className="ivetesangalo2">Ivete Sangalo</p>
                  </div>
                  <div className="neymarjunior">
                    <img className="neymarjunior1" src="/images/neymarjunior.png" alt="neymarjunior"></img>
                    <p className="neymarjunior2">Neymar Júnior</p>
                  </div>
                </div>  
                <div className="profissionais3">
                  <Button className="vertodos" variant="outline-light" href="/nossosprofissionais">Ver Todos</Button>
                </div>
                  
                
                
                  
                
              </div>
                      
             

        
        </div>
    )
};

export default Home;