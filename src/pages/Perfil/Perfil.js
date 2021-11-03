import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getUserId } from "../../services/auth";
import "./Perfil.css";
function Perfil() {
  const [fullname, setFullname] = useState();
  const [emailadress, setEmailladress] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [userbirthdate, setUserbirthdate] = useState();
  const [useradress, setUseradress] = useState();
  // const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const user_id = getUserId();

  async function updateData(e) {
    const body = {
      name: fullname,
      email: emailadress,
      phone: phonenumber,
      adress: useradress,
      birthdate: userbirthdate,
    };
    setTeste(!teste);
    try {
      await api.put(`/user/${user_id}`, body);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function getData() {
    const response = await api.get(`/user/${user_id}`);
    setData(response.data);
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
              <p className="quadro-dados">{data.name}</p>
              <p className="quadro-dados">{data.email}</p>
              <p className="quadro-dados">{data.phone}</p>
              <p className="quadro-dados">{data.birthdate}</p>
              <p className="quadro-dados">{data.adress}</p>
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
                placeholder={data.name}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              ></input>
              <input
                id="emailadress"
                className="quadro-dados"
                type="email"
                placeholder={data.email}
                value={emailadress}
                onChange={(e) => setEmailladress(e.target.value)}
              ></input>
              <input
                id="phonenumber"
                className="quadro-dados"
                type="text"
                placeholder={data.phone}
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></input>
              <input
                id="birthdate"
                className="quadro-dados"
                type="date"
                value={userbirthdate}
                placeholder={data.birthdate}
                onChange={(e) => setUserbirthdate(e.target.value)}
              ></input>
              <input
                id="adress"
                className="quadro-dados"
                type="text"
                placeholder={data.adress}
                value={useradress}
                onChange={(e) => setUseradress(e.target.value)}
              ></input>
              {/* <input
                id="password"
                className="quadro-dados"
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              ></input> */}
            </div>
          </div>
          <div className="quadro3">
            <Button
              className="alterardados"
              variant="light"
              onClick={updateData}
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
