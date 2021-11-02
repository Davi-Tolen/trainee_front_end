import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import "./Agendamento.css";

function Agendamento() {
  const [filtro, setFiltro] = useState("selecione");
  const [showCardiologia,setshowCardiologia] = useState(true);
  const [showNeurologia, setshowNeurologia] = useState(true);
  const [showPneumologia, setshowPneumologia] = useState(true);

  useEffect(()=> {
    if (filtro === "cardiologia") { setshowCardiologia(true)} else if (filtro ==="selecione") {setshowCardiologia(true)} else {setshowCardiologia(false)}
    if (filtro === "neurologia") { setshowNeurologia(true)} else if (filtro ==="selecione") {setshowNeurologia(true)} else {setshowNeurologia(false)}
    if (filtro === "pneumologia") { setshowPneumologia(true)} else if (filtro ==="selecione") {setshowPneumologia(true)} else {setshowPneumologia(false)} 
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
              <div className="filtroespecialidade">
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setFiltro(e.target.value)  }>
                  <option value="selecione">Selecione o profissional</option>
                  <option value="Mary Jane">Mary Jane</option>
                  <option value="Ivete Sangalo">Ivete Sangalo</option>
                  <option value="Neymar Junior">Neymar Junior</option>
                  <option value="Carolaine Santos">Carolaine Santos</option>
                  <option value="Paola Parmesini">Paola Parmesini</option>
                  <option value="Neymar Junior">Neymar Junior</option>
                  <option value="Francisley Francisco">Francisley Francisco</option>
                </Form.Select>
              </div>
              <div className="filtroespecialidade">
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setFiltro(e.target.value)  }>
                  <option value="selecione">Selecione a data</option>
                  <option value="05/11/2021">05/11/2021</option>
                  <option value="06/11/2021">06/11/2021</option>
                  <option value="08/11/2021">08/11/2021</option>
                  <option value="09/11/2021">09/11/2021</option>
                  <option value="10/11/2021">10/11/2021</option>
                  <option value="11/11/2021">11/11/2021</option>
                  <option value="12/11/2021">12/11/2021</option>
                </Form.Select>
              </div>
              <div className="filtroespecialidade">
                <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setFiltro(e.target.value)  }>
                  <option value="selecione">Selecione</option>
                  <option value="8h00">8h00</option>
                  <option value="9h00">9h00</option>
                  <option value="10h00">10h00</option>
                  <option value="11h00">11h00</option>
                  <option value="13h00">13h00</option>
                  <option value="14h00">14h00</option>
                  <option value="15h00">15h00</option>
                  <option value="16h00">16h00</option>
                  <option value="17h00">17h00</option>
                  <option value="18h00">18h00</option>
                </Form.Select>
              </div>

            </div>
          </div>
          <div className="quadro3">
            <Button
              className="alterardados"
              variant="light"
            >
              Confirmar
            </Button>
          </div>
        </div>
    </div>
    // <div className="baseAgendamento">
    //   <div className="containerAgendamento">
    //   <div className="caxinha">
    //       <div className="quadro">
    //         <div className="quadro1">
    //           <p className="quuadro-titles">Nome Completo:</p>
    //           <p className="quuadro-titles">Endereço de Email:</p>
    //           <p className="quuadro-titles">Telefone:</p>
    //           <p className="quuadro-titles">Data de Nascimento:</p>
    //           <p className="quuadro-titles">Endereço:</p>
    //         </div>

    //         <div className="quadro2">
    //           <p className="quadro-dados">nome completo</p>
    //           <p className="quadro-dados">email</p>
    //           <p className="quadro-dados">telefone</p>
    //           <p className="quadro-dados">data</p>
    //           <p className="quadro-dados">endereço</p>
    //         </div>
    //       </div>
    //       <div className="quadro3">
    //         <Button
    //           className="alterardados"
    //           variant="light"
    //         >
    //           Alterar Dados
    //         </Button>
    //       </div>
    //     </div>

    //     <div className="rightC">
    //       <div className="formA">
    //         <h1 className="textTitle">Novo Agendamento:</h1>
    //         <Form>
    //           <Form.Group className="mb-3">
    //             <Form.Label htmlFor="">Selecione um profissional</Form.Label>
    //             <Form.Select id="disabledSelect">
    //               <option>Selecione a Especialidade</option>
    //               <option>Cardiologia</option>
    //               <option>Neurologia</option>
    //               <option>Pneumologia</option>
    //             </Form.Select>

    //             <Form.Label htmlFor="Selecione uma data">
    //               Selecione uma data
    //             </Form.Label>
    //             <Form.Select id="disabledSelect">
    //               <option>Selecione</option>
    //               <option>01/01/21</option>
    //               <option>11/10/21</option>
    //               <option>21/01/21</option>
    //               <option>09/05/21</option>
    //             </Form.Select>
    //             <Form.Label htmlFor="Selecione um horario">
    //               Selecione um horario
    //             </Form.Label>
    //             <Form.Select id="disabledSelect">
    //               <option>Selecione</option>
    //               <option>08:00</option>
    //               <option>09:00</option>
    //               <option>10:00</option>
    //               <option>11:00</option>
    //             </Form.Select>
    //           </Form.Group>
    //         </Form>
    //       </div>
    //       <div className="agend">
    //         <Button className="agendBtn" variant="outline-dark">
    //           Confirmar
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  );
}
export default Agendamento;