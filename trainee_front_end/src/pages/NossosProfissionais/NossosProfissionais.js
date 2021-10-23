import React, { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import "./NossosProfissionais.css"

function NossosProfissionais(){
  const [filtro, setFiltro] = useState("selecione");
  const [showCardiologia,setshowCardiologia] = useState(true);
  const [showNeurologia, setshowNeurologia] = useState(true);
  const [showPneumologia, setshowPneumologia] = useState(true);

  useEffect(()=> {
    if (filtro === "cardiologia") { setshowCardiologia(true)} else if (filtro ==="selecione") {setshowCardiologia(true)} else {setshowCardiologia(false)} 
  }, [filtro])
  useEffect(()=> {
    if (filtro === "neurologia") { setshowNeurologia(true)} else if (filtro ==="selecione") {setshowNeurologia(true)} else {setshowNeurologia(false)} 
  }, [filtro])
   useEffect(()=> {
    if (filtro === "pneumologia") { setshowPneumologia(true)} else if (filtro ==="selecione") {setshowPneumologia(true)} else {setshowPneumologia(false)} 
  }, [filtro])

  
  return(
  <div className="nossosprofisisonais">
    <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
    <div className="entrada2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
    <div className="agende">
      <div className="agende1"><p className="atende-los">Estamos prontos para atende-lo com eficiência e conforto!</p></div>
      <div className="agende2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
    </div>
    <div className="filtroprof">
      <p className="filtro1">Escolha a especialidade que você procura:</p>
      
      <div className="filtro2">
        <Form.Select className="form-select1" aria-label="Default select example" onChange={(e) => setFiltro(e.target.value)  }>
          <option value="selecione">Selecione a Especialidade</option>
          <option value="cardiologia">Cardiologia</option>
          <option value="neurologia">Neurologia</option>
          <option value="pneumologia">Pneumologia</option>
        </Form.Select>
      </div>
    </div>
    <div id="profissionais" className="profissionais">
      { showCardiologia && <div id="cardiologia1" className="prof">
      <div className="prof1">
        <img src="/images/maryjane.png" alt="maryjane" className="profimg"></img>
        <p className="proftitle">Mary Jane</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Cardiologista</p>
        <p className="profdescript">Descrição: Mary Jane é uma acadêmica formada na Univesridade Federal de Minas Gerais, especializada na área de cardiologia.</p>
        <p className="profvalue">Valor da consulta: R$ 200,00</p>
      </div>
      </div>}
      { showNeurologia && <div id="neurologia1"className="prof">
      <div className="prof1">
        <img src="/images/ivetesangalo.png" alt="ivetesangalo" className="profimg"></img>
        <p className="proftitle">Ivete Sangalo</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Neurologia</p>
        <p className="profdescript">Descrição: Ivete é uma acadêmica formada na Universidade Federal de Minas Gerais especializada em neurologia.</p>
        <p className="profvalue">Valor da consulta: R$ 250,00</p>
      </div>
      
      
      </div>}
      { showPneumologia && <div id="pneumologia1" className="prof">
      <div className="prof1">
        <img src="/images/neymarjunior.png" alt="neymarjunior" className="profimg"></img>
        <p className="proftitle">Neymar Junior</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Pneumologia</p>
        <p className="profdescript">Descrição: Neymar é um acadêmico formado na Universidade Federal de Minas Gerais especializada em pneumologia.</p>
        <p className="profvalue">Valor da consulta: R$ 180,00</p>
      </div>
      </div>}
      { showCardiologia && <div id="cardiologia2" className="prof">
      <div className="prof1">
        <img src="/images/maryjane.png" alt="carolainesantos" className="profimg"></img>
        <p className="proftitle">Carolaine Santos</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Cardiologista</p>
        <p className="profdescript">Descrição: Carolaine Santos é uma acadêmica formada na Univesridade Federal de Minas Gerais, especializada na área de cardiologia.</p>
        <p className="profvalue">Valor da consulta: R$ 200,00</p>
      </div>
      
      
      </div>}
      { showNeurologia && <div id="neurologia2" className="prof">
      <div className="prof1">
        <img src="/images/ivetesangalo.png" alt="paolaparmesini" className="profimg"></img>
        <p className="proftitle">Paola Parmesini</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Neurologia</p>
        <p className="profdescript">Descrição: Paola Parmesini é uma acadêmica formada na Universidade Federal de Minas Gerais especializada em neurologia.</p>
        <p className="profvalue">Valor da consulta: R$ 250,00</p>
      </div>
      </div>}
      { showPneumologia && <div id="pneumologia2" className="prof">
      <div className="prof1">
        <img src="/images/neymarjunior.png" alt="francisley francisco" className="profimg"></img>
        <p className="proftitle">Francisley Francisco</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Pneumologia</p>
        <p className="profdescript">Descrição: Francisley Francisco é um acadêmico formado na Universidade Federal de Minas Gerais especializada em pneumologia.</p>
        <p className="profvalue">Valor da consulta: R$ 180,00</p>
      </div>
      
      
      </div>}
    </div>
  </div>
  
  
  
  )
}

export default NossosProfissionais;