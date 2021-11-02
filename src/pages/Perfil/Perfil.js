import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Perfil.css";
function Perfil() {
  const [fullname, setFullname] = useState();
  const [emailadress, setEmailladress] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [userbirthdate, setUserbirthdate] = useState();
  const [useradress, setUseradress] = useState();
  const [password, setPassword] = useState();

  async function getData() {
    try {
      const response = await api.get(
        "/user/7276464d-0377-46b7-ada1-4eb652b042b3"
      );
      const user = response.data[0];
      const { user_id, name, email, phone, adress, birthdate } = user;
      const setfullname = () => setFullname(name);
      const setemailladress = () => setEmailladress(email);
      const setphonenumber = () => setPhonenumber(phone);
      const setuseradress = () => setUseradress(adress);
      const setuserbirthdate = () => setUserbirthdate(birthdate);

      function setar() {
        setfullname();
        setemailladress();
        setphonenumber();
        setuseradress();
        setuserbirthdate();
      }
      setar();
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
              <p className="quadro-dados">{fullname}</p>
              <p className="quadro-dados">{emailadress}</p>
              <p className="quadro-dados">{phonenumber}</p>
              <p className="quadro-dados">{userbirthdate}</p>
              <p className="quadro-dados">{useradress}</p>
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
              <p className="quuadro-titles">Senha:</p>
            </div>
            <div className="quadro2">
              <input
                id="fullname"
                className="quadro-dados"
                type="text"
                placeholder={fullname}
                onChange={(e) => setFullname(e.target.value)}
              ></input>
              <input
                id="emailadress"
                className="quadro-dados"
                type="email"
                placeholder={emailadress}
                onChange={(e) => setEmailladress(e.target.value)}
              ></input>
              <input
                id="phonenumber"
                className="quadro-dados"
                type="text"
                placeholder={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></input>
              <input
                id="birthdate"
                className="quadro-dados"
                type="date"
                placeholder={userbirthdate}
                onChange={(e) => setUserbirthdate(e.target.value)}
              ></input>
              <input
                id="adress"
                className="quadro-dados"
                type="text"
                placeholder={useradress}
                onChange={(e) => setUseradress(e.target.value)}
              ></input>
              <input
                id="password"
                className="quadro-dados"
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
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
