import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./Perfil.css";

function Perfil() {
  const [fullname, setFullname] = useState();
  async function getData() {
    try {
      const response = await api.get(
        "/user/d3257937-5fd8-4ce6-bd9e-4c15537db437"
      );
      console.log(response);
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado!");
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const [teste, setTeste] = useState(true);
  return (
    <div className="perfil">
      {teste ? (
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
            <Button
              className="alterardados"
              variant="light"
              onClick={() => setTeste((antigo) => !antigo)}
            >
              Alterar Dados
            </Button>
          </div>
        </div>
      ) : (
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
              <input
                id="fullname"
                className="quadro-dados"
                type="text"
                placeholder="Nome Completo"
                onChange={(e) => setFullname(e.target.value)}
              ></input>
              <input
                id="emailadress"
                className="quadro-dados"
                type="text"
                placeholder="Endereço de Email"
              ></input>
              <input
                id="phonenumber"
                className="quadro-dados"
                type="text"
                placeholder="Telefone"
              ></input>
              <input
                id="birthdate"
                className="quadro-dados"
                type="text"
                placeholder="Data de Nascimento"
              ></input>
              <input
                id="adress"
                className="quadro-dados"
                type="text"
                placeholder="Endereço"
              ></input>
            </div>
          </div>
          <div className="quadro3">
            <Button
              className="alterardados"
              variant="light"
              onClick={() => setTeste((antigo) => !antigo)}
            >
              Confirmar Mudanças
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Perfil;
