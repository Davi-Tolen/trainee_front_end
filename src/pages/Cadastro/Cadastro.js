import React, { useState } from "react";
import { Form, Button, List, ListItem, ListItemText, Row, Col, Typography, ListGroupItem } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import "./Cadastro.css";
// import {IconContext} from "react-icons/lib";
// import {IoMdSend} from "react-icons/io";

function Cadastro(){
    const [name, setName] = useState();
    const [birthdate, setBirthdate] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [adress, setAdress] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

   async function handleCadastro(e){
       e.preventDefault();
       try {
           const response = await api.post('/user', {name, birthdate, phone, email, adress, password});
           alert("Usuário criado com sucesso !");
           
       } catch (error) {
           if(error.response.status === 403){
              alert("Credentials Invalidas!");
            }
            else{
              alert("Preencha todos os campos corretamente!");
            }
            console.warn(error)
       }
      
   
   };
   

       



    return (
        
        <div className="base">
            <div className="container">
                <div className="borderTwo">
                    <div className="imagem2">
                        <a className="link" href="/menu/home"><img className="logo2" src="/images/hospitaldaher.jpg" alt="logo" width="100vw" height="100vh"></img></a>
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
                                    onChange={(e)=> setName(e.target.value)}
                                    />
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group as={Col} controlId="nascimento">
                                    <Form.Control type="birthday" placeholder="Nascimento" onChange={(e)=> setBirthdate(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="telefone">
                                        <Form.Control type="phone" placeholder="Telefone" onChange={(e)=> setPhone(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group controlId="endereço">
                                        <Form.Control type="address" placeholder="Endereço" onChange={(e)=> setAdress(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder="Endereço de email" onChange={(e)=> setEmail(e.target.value)}/>
                                    </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group controlId="senha">
                                            <Form.Control type="password" placeholder="Senha" onChange={(e)=> setPassword(e.target.value)}/>
                                        </Form.Group>
                                    </Row>

                                    <Button className="cadBtn" variant="danger" type="submit" onClick= {handleCadastro} >
                                        Enviar
                                    </Button> 
                                    <a href= "/login"><p className="fazerlogin">Fazer Login</p></a>

                            </Form>
                    </div>
                </div>
            </div>
        </div>   
    );

}
export default Cadastro;