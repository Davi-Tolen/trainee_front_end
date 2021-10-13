import React from "react";
import { Form, Button, List, ListItem, ListItemText, Row, Col, Typography, ListGroupItem } from "react-bootstrap";
import "./Cadastro.css";
// import {IconContext} from "react-icons/lib";
// import {IoMdSend} from "react-icons/io";

function Cadastro(){
    return (
        <div>
            <div className="containerCadastroDiv">
                <div className="imagem">
                    <img className="logo" src="/images/hospitaldaher.jpg" alt="logo" width="150px" height="150px"></img>
                </div>
            </div>
        <div className="base">
            <div className="container">
                <div className="titlecadastro">
                    <div className="localCadastro">
                        <h2>Cadastro</h2>
                    </div>
                </div>
                <div>
                    <Form className="dados">
                    <Row className="mb-3">
                        <Form.Group controlId="nome">
                            <Form.Control
                            required
                            type="text"
                            placeholder="Nome Completo"
                            />
                        </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nascimento">
                                <Form.Control type="birthday" placeholder="Nascimento" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="telefone">
                                <Form.Control type="phone" placeholder="Telefone" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="endereço">
                                <Form.Control type="address" placeholder="Endereço" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Endereço de email" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="senha">
                                <Form.Control type="password" placeholder="Senha"/>
                            </Form.Group>
                        </Row>

                        <Button className="butao" variant="danger" type="submit" >
                        Enviar
                        </Button> 

                    </Form>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Cadastro;