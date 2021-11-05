import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MaskedInput from "react-input-mask";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { getUserId } from "../../services/auth";
import { logout } from "../../services/auth";
import "./Perfil.css";
function Perfil() {
  const history = useHistory();
  const [fullname, setFullname] = useState();
  const [emailadress, setEmailladress] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [userbirthdate, setUserbirthdate] = useState();
  const [useradress, setUseradress] = useState();
  const [data, setData] = useState([]);
  const user_id = getUserId();
  const [teste, setTeste] = useState(true);

  async function updateFirebase() {
    const response = await api.put("/update", { emailadress });
  }
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
      window.location.href = "/ap/perfil";
    } catch (error) {
      console.error(error);
    }
  }
  function handleUpdate() {
    updateData();
    updateFirebase();
  }
  async function deleteFirebase() {
    try {
      await api.delete(`/delete/${user_id}`);
    } catch (error) {}
  }
  async function deleteUser() {
    try {
      await api.delete(`/user/${user_id}`);
      logout();
      history.push("/menu/home");
    } catch (error) {}
  }
  async function handleDelete() {
    deleteFirebase();
    deleteUser();
  }
  async function getData() {
    const response = await api.get(`/user/${user_id}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

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
              {/* <p className="quuadro-titles">Senha:</p> */}
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
              <MaskedInput
                id="phonenumber"
                mask="(99)9999-9999"
                className="quadro-dados"
                type="text"
                placeholder={data.phone}
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></MaskedInput>
              <MaskedInput
                id="birthdate"
                mask="99/99/9999"
                className="quadro-dados"
                type="text"
                value={userbirthdate}
                placeholder={data.birthdate}
                onChange={(e) => setUserbirthdate(e.target.value)}
              ></MaskedInput>
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
              onClick={handleUpdate}
            >
              Confirmar Mudanças
            </Button>
          </div>

          <div className="quadro3">
            <Popup
              trigger={
                <Button className="alterardados" variant="light">
                  Excluir Usuário
                </Button>
              }
              position="top center"
            >
              <div>
                <p>Tem certeza que deseja fazer isso ?</p>
                <Button
                  className="confirmando"
                  variant="light"
                  onClick={handleDelete}
                >
                  Sim
                </Button>
              </div>
            </Popup>
          </div>
        </div>
      )}
    </div>
  );
}
export default Perfil;
