import React from "react";
import "./NossaHistória.css";
import { Button } from "react-bootstrap";

function NossaHistoria() {
    return (
        <div className="nossahistoria">
            <div className="entrada1"><img src="/images/entrada1.png" alt="entrada" className="entrada1"></img></div>
            <div className="entrada2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
            <div className="agende">
                <div className="agende1"><p className="atende-los">Estamos prontos para atende-lo com eficiência e conforto!</p></div>
                <div className="agende2"><Button href="/login" variant="outline-light">Agende sua Consulta</Button></div>
            </div>

            <div className="tituloetexto">
                <p className="title">Conheça a nossa história</p>
                <div className="texto">
                <p className="paragrafo1">
Em 1979, surgia em Brasília a Clínica Daher, um ponto de atendimento médico na área de cirurgia plástica
estética e reparadora. Desde a sua criação, novas tecnologias surgiram e novas patologias foram descobertas, 
o que motivou a clínica a acompanhar essas mudanças aumentando o número de especialidades oferecidas, 
adquirindo novos equipamentos e ampliando suas instalações.</p>
                <p className="paragrafo2">
Dessa forma, a necessidade de ampliar o atendimento médico à sociedade transformou a unidade,
em 1998, no Hospital Daher Lago Sul, um hospital geral que realiza diversos serviços com a mesma competência,
segurança e conforto que atraiu seus primeiros clientes saúde.</p>
                <p className="paragrafo3">
Com quatro décadas de existência, consolidou-se como referência entre os serviços de saúde de Brasília
devido a suas confortáveis estruturas, procedimentos modernos, seguros e eficazes e atendimento acolhedor,
o que o torna mais do que um hospital: um centro de hospitalidade.</p>
            </div>
            </div>

            <div className="imagem1">
                <img className="logo" src="/images/logo-header.png" alt="logo" width="250px"></img>
                <img className="medico" src="/images/medicosorrindo.png" alt="medico" width="250px"></img>
            </div>

        </div>
    )
}

export default NossaHistoria;