import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Cadastro.css"

function Cadastro(){
    return (
        <div className="base">
            <div className="container">
                <div>
                    <h1>Cadastro</h1>
                    <Form className="dados">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="nome">
                            <Form.Label>Primeiro Nome</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            placeholder="Primeiro nome"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="sobrenome">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            placeholder="Sobrenome"
                            />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Endereço de email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Senha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="Endereço">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control placeholder="Endereço" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="phone" placeholder="Telefone" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Estado">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>ES</option>
                                <option>MG</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="CEP">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control />
                                </Form.Group>
                        </Row>

                        <Button variant="primary" type="enviar">
                        Enviar
                        </Button>

                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Cadastro;