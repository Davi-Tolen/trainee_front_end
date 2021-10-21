import React from "react";
import { useState } from "react";
import { Button, Form} from "react-bootstrap";
import "./NossosProfissionais.css"

function NossosProfissionais(){
  const [filtro, setFiltro] = useState();
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
          <option>Selecione a Especialidade</option>
          <option value="cardiologia">Cardiologia</option>
          <option value="neurologia">Neurologia</option>
          <option value="pneumologia">Pneumologia</option>
        </Form.Select>
      </div>
    </div>
    <div className="prof">
      <div className="prof1">
        <img src="/images/maryjane.png" alt="maryjane" className="profimg"></img>
        <p className="proftitle">Mary Jane</p>
      </div>
      <div className="prof2">
        <p className="profespecialidade">Especialidade: Cardiologista</p>
        <p className="profdescript">Descrição: Mary Jane é uma acadêmica formada na Univesridade Federal de Minas Gerais, especializada na área de cardiologia.</p>
        <p className="profvalue">Valor da consulta: R$ 200,00</p>
      </div>
    </div>
    <div className="prof">
      <div className="prof1">
        <img src="" alt="" className="profimg"></img>
        <p className="proftitle"></p>
      </div>
      <div className="prof2">
        <p className="profdescript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof1">
        <img src="" alt="" className="prof3img"></img>
        <p className="prof3title"></p>
      </div>
      <div className="prof2">
        <p className="prof3descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof4-1">
        <img src="" alt="" className="prof4img"></img>
        <p className="prof4title"></p>
      </div>
      <div className="prof4-2">
        <p className="prof4descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof5-1">
        <img src="" alt="" className="prof5img"></img>
        <p className="prof5title"></p>
      </div>
      <div className="prof5-2">
        <p className="prof5descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof6-1">
        <img src="" alt="" className="prof6img"></img>
        <p className="prof6title"></p>
      </div>
      <div className="prof6-2">
        <p className="prof6descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof7-1">
        <img src="" alt="" className="prof7img"></img>
        <p className="prof7title"></p>
      </div>
      <div className="prof7-2">
        <p className="prof7descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof8-1">
        <img src="" alt="" className="prof8img"></img>
        <p className="prof8title"></p>
      </div>
      <div className="prof8-2">
        <p className="prof8descript"></p>
      </div>
    </div>
    <div className="prof">
      <div className="prof9-1">
        <img src="" alt="" className="prof9img"></img>
        <p className="prof9title"></p>
      </div>
      <div className="prof9-2">
        <p className="prof9descript"></p>
      </div>
    </div>

    
  </div>
  
  
  )
}

export default NossosProfissionais;