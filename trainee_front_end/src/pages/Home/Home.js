import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
function Home () {
    return(
      <div className="home">
        <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
        <div className="entrada2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
        <div className="agende">
          <div className="agende1"><p className="atende-los">Estamos prontos para atende-lo com eficiência e conforto!</p></div>
          <div className="agende2"><Button variant="outline-light">Agende sua Consulta</Button></div>
        </div>
        <div className="historia">
          <div className="historia1">
            <p className="historiatitle">Nossa História</p>
            <img src="/images/logo-header1.png" alt="logo" className="historiaimage"></img>
          </div>
          <div className="historia2">
            <p className="historiaresumo">Em 1979, surgia em Brasília a Clínica Daher, um ponto de atendimento médico na área de cirurgia plástica estética e reparadora. Desde a sua criação, novas tecnologias surgiram e novas patologias foram descobertas, o que motivou a clínica a acompanhar essas mudanças aumentando o número de especialidades oferecidas, adquirindo novos equipamentos e ampliando suas instalações.</p>
            <Button href="/nossahistoria" variant="primary">Leia Mais</Button>
          </div>
        </div>  
        <div className="profissionais">
          <div className="profissionais1">
            <p className="profissionaistitle">Nossos Profissionais</p>
          </div>
          <div className="profissionais2">
            <div className="maryjane">
              <a href="/nossosprofissionais" className="link"><img src="/images/maryjane.png" alt="maryjane" className="maryjaneimg"></img></a>
              <a href="/nossosprofissionais" className="link"><p className="maryjanetext">Mary Jane</p></a>
            </div>
          </div>
     
          
        </div>
      </div>
    )
};

export default Home;