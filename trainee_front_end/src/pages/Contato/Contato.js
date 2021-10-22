import React from "react";
import {Form}  from "react-bootstrap";
import "./Contato.css"

function Contato () {
  return(
    <div className="contato">
      <div className="contate">
        <div className="contate1">
          <p className="contate-nos">Contate-nos</p>
          <p className="contatar">Sinta-se a vontade para nos contatar através do nosso formulário de contato:</p>
        </div>
        <Form className="form1">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
         </Form>
        
      </div>
      
    </div>
  )
}

export default Contato;