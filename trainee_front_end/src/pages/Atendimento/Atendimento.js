import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./Atendimento.css";

function Atendimento() {
  return (
    <div className="baseAtendimento">
      <div className="containerAtendimento">
        <div className="mainBorder">
          <h5 className="writingAtt">Contate-nos:</h5>
          <p>
            <h6 className="writingAtt2">
              Sinta-se a vontade para nos contatar através do nosso formulário
              de contato
            </h6>
          </p>
          {/* <div className="borderMain"> */}
        </div>
        <div className="borderForm">
          <Form className="putsIn">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            > 
              <Form.Label >Mensagem</Form.Label>
              <Form.Control  as="textarea" rows={10} />
              
            </Form.Group>
            <Button variant="info">Enviar</Button>{" "}
          </Form>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div className="footertitle">
            <a href="/menu/contato" className="link">
              <p className="footertitle1">Contato:</p>
            </a>
          </div>
          <div className="footeremail">
            <a href="/menu/contato" className="link">
              <img
                src="/images/emailicon.png"
                className="footeremailicon"
                alt="iconeemail"
              ></img>
            </a>
            <a href="/menu/contato" className="link">
              <p className="footeremailtext">
                daherhospitallagosul@email.com.br
              </p>
            </a>
          </div>
          <div className="footerlocal">
            <a href="/menu/contato" className="link">
              <img
                src="/images/localicon.png"
                className="footerlocalicon"
                alt="iconelocal"
              ></img>
            </a>
            <a href="/menu/contato" className="link">
              <p className="footerlocaltext">
                {" "}
                Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte{" "}
              </p>
            </a>
          </div>
          <div className="footertel">
            <a href="/menu/contato" className="link">
              <img
                src="/images/telicon.png"
                className="footertelicon"
                alt="iconetelefone"
              ></img>
            </a>
            <a href="/menu/contato" className="link">
              <p className="footerteltext">
                {" "}
                (00) 99999-7777 | (00) 3663-8768{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="footer2">
          <div className="footermidia">
            <a href="/menu/contato" className="link">
              <img
                src="/images/instaicon.png"
                alt="instagram"
                className="footerinstaicon"
              ></img>
            </a>
            <a href="/menu/contato" className="link">
              <img
                src="/images/faceicon.png"
                alt="facebook"
                className="footerfaceicon"
              ></img>
            </a>
            <a href="/menu/contato" className="link">
              <img
                src="/images/twitericon.png"
                alt="twiter"
                className="footertwitericon"
              ></img>
            </a>
          </div>
          <div className="footercpe">
            <img
              src="/images/footercpe.png"
              alt="CPE"
              className="footercpeimg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atendimento;