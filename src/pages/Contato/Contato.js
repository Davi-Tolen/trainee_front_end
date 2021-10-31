import React from "react";
import {Form, Button}  from "react-bootstrap";
import "./Contato.css"

function Contato () {
  return(
    <div className="contato">
      <div className="contate">
        <div className="contate1">
          <p className="contate-nos">Contate-nos</p>
          <p className="contatar">Sinta-se a vontade para nos contatar através do nosso formulário de contato:</p>
        </div>
        <div className="forms">
          <Form className="form1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="name"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
          </Form>
          <Button className="enviar" variant="primary">Enviar</Button>
        </div>
      </div>
      <div className="localiza">
        <div className="localiza1">
          <img src="/images/mapa.png" alt="mapa" className="mapa"></img>
        </div>
        <div className="localiza2">
          <p className="">Venha se Consultar:</p>
          <p className="estamos">Estamos abertos e preparados para cuidar das suas necessidades.</p>
        </div>

      </div>
        
      
      
    </div>
  )
}

export default Contato;