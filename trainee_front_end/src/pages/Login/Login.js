import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./Login.css"
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { useHistory } from "react-router";



function Login(){
    const history = useHistory();
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
                            <p></p>
                            <Button variant="danger">Login</Button> 

                                <div>
                                    <p></p>
                                    <label/> <Button variant="link">Esqueceu a senha?</Button> 
                                    <p></p>
                                    <label/><Button variant="link" onClick={()=>{history.push("/Cadastro");
                                    }}>Não tem uma conta? Registre-se</Button>
                                </div>
                        </Form.Group>
                                <div>
                                    <hr></hr>
                                    <p>OU</p>
                                    <hr></hr>
                                </div>

                            <Button variant="outline-dark"><GrFacebook/>
                            Continuar com Facebook</Button>
                            <p></p>
                             <Button variant="outline-dark"><FcGoogle/>
                            Continuar com Google</Button>    
                          
                    </Form>
                </div>
            </div>
        </div>
    
    );
}

export default Login;