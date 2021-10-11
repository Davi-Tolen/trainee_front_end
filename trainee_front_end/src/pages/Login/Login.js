import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css"

function Login(){
    return (
        <div className="base">
            <div className="container">
                <div>
                    <h1>Área do paciente</h1>
                    <Form className="inputs">
                        <br></br>
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="Endereço de email" />
                        </Form.Group>
                        <br></br>
                        <Form.Group controlId="senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary">Login</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;