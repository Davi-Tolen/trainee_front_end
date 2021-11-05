import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MaskedInput from "react-input-mask";
import api from "../../services/api";
import "./Cadastro.css";
import {Alert} from '@mui/material';
import Stack from '@mui/material/Stack';
const Swal = require('sweetalert2');
// import {IconContext} from "react-icons/lib";
// import {IoMdSend} from "react-icons/io";

function Cadastro() {
  const history = useHistory();
  const [name, setName] = useState();
  const [birthdate, setBirthdate] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [adress, setAdress] = useState();
  const [password, setPassword] = useState();
  async function handleCadastro(e) {
    console.log(e);
    e.preventDefault();
    try {
      await api.post("/user", {
        name,
        birthdate,
        phone,
        email,
        adress,
        password,
      });
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      if (error.response.status === 403) {
        Swal.fire({
          // position: 'top-end',
          icon: 'error',
          title: 'Credenciais Inválidas!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          // position: 'top-end',
          icon: 'error',
          title: 'Preencha os campos corretamente!',
          showConfirmButton: false,
          timer: 1500
        })
      }
      console.warn(error);
    }
  }

  return (
    <div className="base">
      <div className="container">
        <div className="borderTwo">
          <div className="imagem2">
            <a className="link" href="/menu/home">
              <img
                className="logo2"
                src="/images/hospitaldaher.jpg"
                alt="logo"
                width="100vw"
                height="100vh"
              ></img>
            </a>
            <h1>Cadastro</h1>
          </div>
          <div>
            <Form className="dados">
              <Row className="mb-3">
                <Form.Group controlId="nome">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nome Completo"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">

                <Form.Group as={Col} controlId="nascimento">
                
                  <MaskedInput
                    className="maskedinput"
                    mask="99/99/9999"
                    placeholder="Nascimento"
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                  
                </Form.Group>
                

                
                <Form.Group as={Col} controlId="telefone">
                  <MaskedInput
                    className="maskedinput"
                    mask="(99)9999-9999"
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="endereço">
                  <Form.Control
                    type="address"
                    placeholder="Endereço"
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Endereço de email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="senha">
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Button className="cadBtn" type="submit" onClick={handleCadastro}>
                Enviar
              </Button>
              <div>
                <hr></hr>
                <p className="fazerlogin">
                  <label />
                  <Button
                    variant="link"
                    onClick={() => {
                      history.push("/Login");
                    }}
                  >
                    Fazer Login
                  </Button>
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    history.push("/menu/home");
                  }}
                >
                  Voltar para a Home
                </Button>
                <hr></hr>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
