import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./Perfil.css";

function Perfil() {
  return (
    <div className = "perfil">
       
        <div className="caxinha">
          <div className="quadro">
            <div className="quadro1">
              <p className="quuadro-titles">Nome Completo:</p>
              <p className="quuadro-titles">Endereço de Email:</p>
              <p className="quuadro-titles">Telefone:</p>
              <p className="quuadro-titles">Data de Nascimento:</p>
              <p className="quuadro-titles">Endereço:</p>
            </div>
            <div className="quadro2">
             <p className="quadro-dados">nome completo</p>
              <p className="quadro-dados">email</p>
              <p className="quadro-dados">telefone</p>
              <p className="quadro-dados">data</p>
              <p className="quadro-dados">endereço</p>
            </div>
          </div>
          <div className="quadro3">
            <Button className="alterardados" variant="light">Alterar Dados</Button>
          </div>
        </div>  
        
      </div>
      
    
  );
}
export default Perfil;