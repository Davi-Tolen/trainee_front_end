import React, { useState } from "react";
import { Form, Button, List, ListItem, ListItemText, Row, Col, Typography, ListGroupItem } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css";
// import {IconContext} from "react-icons/lib";
// import {IoMdSend} from "react-icons/io";

function Cadastro(){
    const [nome, setNome] = useState();
    const [nascimento, setNascimento] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [endereco, setEndereco] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();

    function login(){
        alert("Bem Vindo" + nome);
        history.push("login")
    }

    return (
        
        <div className="base">
            <div className="container">
                <div className="borderTwo">
                    <div className="imagem2">
                        <img className="logo2" src="/images/hospitaldaher.jpg" alt="logo" width="100vw" height="100vh"></img>
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
                                    onChange={(e)=> setNome(e.target.value)}
                                    />
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group as={Col} controlId="nascimento">
                                    <Form.Control type="birthday" placeholder="Nascimento" onChange={(e)=> setNascimento(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="telefone">
                                        <Form.Control type="phone" placeholder="Telefone" onChange={(e)=> setTelefone(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group controlId="endereço">
                                        <Form.Control type="address" placeholder="Endereço" onChange={(e)=> setEndereco(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder="Endereço de email" onChange={(e)=> setEmail(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group controlId="senha">
                                            <Form.Control type="password" placeholder="Senha" onChange={(e)=> setSenha(e.target.value)}/>
                                        </Form.Group>
                                    </Row>

                                    <Button className="cadBtn" variant="danger" type="submit" onClick={login}>
                                        Enviar
                                    </Button> 

                            </Form>
                    </div>
                </div>
            </div>
        </div>
);

}
export default Cadastro;