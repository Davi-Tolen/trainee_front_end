import React from "react";
import "./NossosProfissionais.css"
import { Button} from "react-bootstrap";
function NossosProfissionais(){
  return(
  <div className="nossosprofisisonais">
    <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
    <div className="entrada2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
    <div className="agende">
      <div className="agende1"><p className="atende-los">Estamos prontos para atende-lo com eficiência e conforto!</p></div>
      <div className="agende2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
    </div>
    <div className="filtroprof">
      <p className="filtro1">Escolha a especialidade que você procura:</p>
      
  
    
    </div>
    
    
  </div>
  
  
  )
}

export default NossosProfissionais;