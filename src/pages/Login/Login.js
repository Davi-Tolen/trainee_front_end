import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";
import { login } from "../../services/auth";

import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { useHistory } from "react-router";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handlelogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      const accessToken = response?.data?.accessToken;
      if (!accessToken) {
        return history.push("/menu/home");
      }
      console.log(response.data);
      login(response.data.accessToken);

      history.push("/ap/paginainicial");
    } catch (error) {
      if (error.response.status === 403) {
        alert("Credentials Invalidas!");
      } else {
        alert(error.response.data.notification);
      }
      console.warn(error);
    }
  }
  return (
    <div className="base">
      <div className="container">
        <div className="borderOne">
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
            <h1 className="title">Área do paciente</h1>
          </div>

          <Form className="inputs">
            <br></br>

            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Endereço de email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="senha">
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p></p>
              <Button
                className=" loginBtn"
                variant="danger"
                onClick={handlelogin}
              >
                Login
              </Button>

              <div>
                <p></p>
                <label /> <Button variant="link">Esqueceu a senha?</Button>
                <p></p>
              </div>
            </Form.Group>
            <div>
              <hr></hr>
              <p>OU</p>
              <hr></hr>
            </div>

            <Button variant="outline-dark">
              <GrFacebook />
              Continuar com Facebook
            </Button>

            <p></p>
            <Button variant="outline-dark">
              <FcGoogle />
              Continuar com Google
            </Button>

            <div>
              <hr></hr>
              <p>
                <label />
                <Button
                  variant="link"
                  onClick={() => {
                    history.push("/Cadastro");
                  }}
                >
                  Não tem uma conta? Registre-se
                </Button>
              </p>
              <hr></hr>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
