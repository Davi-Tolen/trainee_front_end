import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./Perfil.css";

function Perfil() {
  return (
    <div className="basePerfil">
      <div className="containerPerfil">
        <div className="cLeft">
          <div>Nome: Davi Tolentino</div>
          <p></p>
          <div>Email: davitolentino@cpejr.com.br</div>
          <p></p>

          <div>Senha: **</div>
          <p></p>

          <div>Endereço: Avenida Cristiano Machado, 0000</div>
          <p></p>

          <div>Data Nasc: 12/04/02</div>
          <p></p>

          <div>Telefone: (27)00000-0000</div>
          <p></p>

          <div>Médicos:</div>
          <p></p>
        </div>
        <div className="cRight">
          {/* <div className="Avatar"></div> */}
          <div className="btn-Perf">
            <Button variant="light">Alterar Dados</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Perfil;