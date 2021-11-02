import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./Agendamento.css";

function Agendamento() {
  return (
    <div className="baseAgendamento">
      <div className="containerAgendamento">
        <div className="rightL">
          <div className="titleA">Próximos Eventos: </div>
          <div>Data: 18/10/21</div>
          <div>Horário: 18:00</div>
          <div>Médico: Ivete Santiago</div>
        </div>

        <div className="rightC">
          <div className="formA">
            <h1 className="textTitle">Novo Agendamento:</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="">Selecione um profissional</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Selecione a Especialidade</option>
                  <option>Cardiologia</option>
                  <option>Neurologia</option>
                  <option>Pneumologia</option>
                </Form.Select>

                <Form.Label htmlFor="Selecione uma data">
                  Selecione uma data
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Selecione</option>
                  <option>01/01/21</option>
                  <option>11/10/21</option>
                  <option>21/01/21</option>
                  <option>09/05/21</option>
                </Form.Select>
                <Form.Label htmlFor="Selecione um horario">
                  Selecione um horario
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Selecione</option>
                  <option>08:00</option>
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          <div className="agend">
            <Button className="agendBtn" variant="outline-dark">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agendamento;