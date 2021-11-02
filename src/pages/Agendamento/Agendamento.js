import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";

import "./Agendamento.css";

function Agendamento() {
  const [docId, setDocId] = useState();
  const [data, setData] = useState();
  const [horario, setHorario] = useState();
  const [filtro, setFiltro] = useState("selecione");
  const [showCardiologia,setshowCardiologia] = useState(true);
  const [showNeurologia, setshowNeurologia] = useState(true);
  const [showPneumologia, setshowPneumologia] = useState(true);
  const [showTodos, setShowTodos] = useState(true)

  async function handleAgendamento(e){
    e.preventDefault();
    try{
      await api.post("/consultation", {
        docId,
        data,
        horario,
      });
      alert("Consulta marcada com sucesso!")
    } catch (error) {
      alert("preencha os campos corretamente!")
    }
  }

  useEffect(()=> {
    if (filtro === "cardiologia") { setshowCardiologia(true)} else {setshowCardiologia(false)}
    if (filtro === "neurologia") { setshowNeurologia(true)} else {setshowNeurologia(false)}
    if (filtro === "pneumologia") { setshowPneumologia(true)} else {setshowPneumologia(false)} 
    if (filtro === "selecione") { setShowTodos(true)} else {setShowTodos(false)}
  }, [filtro])

  return (
    <div className="agendamento">
        <div className="caixa">
        <p className="textTitle">Novo agendamento:</p>
          <div className="quadro">
            <div className="quadro1">
              <p className="quuadro-titles">Especialidade:</p>
              <p className="quuadro-titles">Profissional:</p>
              <p className="quuadro-titles">Data:</p>
              <p className="quuadro-titles">Horário:</p>
            </div>

            <div className="quadro2">
              <div className="filtroespecialidade">
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setFiltro(e.target.value)  }>
                  <option value="selecione">Selecione a Especialidade</option>
                  <option value="cardiologia">Cardiologia</option>
                  <option value="neurologia">Neurologia</option>
                  <option value="pneumologia">Pneumologia</option>
                </Form.Select>
              </div>
              <div className="filtroprofissionais">
                {showCardiologia && <div>
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setDocId(e.target.value)  }>
                  <option value="selecione">Selecione o profissional</option>
                  <option value="b1ec2eb0-7f2f-4f71-b0c1-ffef54341b43">Mary Jane</option>
                  <option value="Carolaine Santos">Carolaine Santos</option>
                </Form.Select>
                </div>}
                {showNeurologia && <div>
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setDocId(e.target.value)  }>
                  <option value="selecione">Selecione o profissional</option>
                  <option value="Ivete Sangalo">Ivete Sangalo</option>
                  <option value="Paola Parmesini">Paola Parmesini</option>
                </Form.Select>
                </div>}
                {showPneumologia && <div>
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setDocId(e.target.value)  }>
                  <option value="selecione">Selecione o profissional</option>
                  <option value="Neymar Junior">Neymar Junior</option>
                  <option value="Francisley Francisco">Francisley Francisco</option>
                </Form.Select>
                </div>}
                {showTodos && <div>
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setDocId(e.target.value)  }>
                  <option value="selecione">Selecione o profissional</option>
                  <option value="b1ec2eb0-7f2f-4f71-b0c1-ffef54341b43">Mary Jane</option>
                  <option value="Carolaine Santos">Carolaine Santos</option>
                  <option value="Ivete Sangalo">Ivete Sangalo</option>
                  <option value="Paola Parmesini">Paola Parmesini</option>
                  <option value="Neymar Junior">Neymar Junior</option>
                  <option value="Francisley Francisco">Francisley Francisco</option> 
                </Form.Select>
                </div>}
              </div>
              <Form.Group controlId="data" >
                <Form.Control type="date" placeholder="Data" onChange= {(e) => setData(e.target.value)}  />
              </Form.Group>
              <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setHorario(e.target.value)  }>
                  <option value="selecione">Selecione o horário</option>
                  <option value="8h00">8h00</option>
                  <option value="9h00">9h00</option>
                  <option value="10h00">10h00</option>
                  <option value="11h00">11h00</option>
                  <option value="12h00">12h00</option>
                  <option value="13h00">13h00</option>
                  <option value="14h00">14h00</option>
                  <option value="15h00">15h00</option>
                  <option value="16h00">16h00</option>
                  <option value="17h00">17h00</option>
                  <option value="18h00">18h00</option>
              </Form.Select>

            </div>
          </div>
          <div className="quadro3">
            <Button
              className="alterardados"
              variant="light"
              onClick={handleAgendamento}
            >
              Confirmar
            </Button>
          </div>
        </div>
    </div>

  );
}
export default Agendamento;