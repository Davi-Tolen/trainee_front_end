import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link } from "@mui/material";
import React from "react";
// import { Card, Button } from "react-bootstrap";
import "./PaginaInicial.css"
import {useHistory} from "react-router-dom"

function PaginaInicial(){
    const history = useHistory()

    function medicos(){
        history.push("/ap/medicos")
    }

    function atendimento(){
        history.push("/ap/atendimento")
    }

    function agendamento(){
        history.push("/ap/agendamento")
    }

    function perfil(){
        history.push("/ap/perfil")
    }

    return(
        <div className="paginainicial">
            <div className= "containerPi">
            <div className="primeirosCards">
                <Card sx={{width: 270}} className="cards">
                    <CardMedia
                    component="img"
                    height="180"
                    image="/images/Agendamento.jpg"
                    alt="foto"
                    />
                    <CardActions className="cardActions">
                        <Button size="small" onClick={agendamento}>Agendamento</Button>
                    </CardActions>
                </Card>
                <br></br>
                <Card sx={{width: 270}} className="cards">
                    <CardMedia
                    component="img"
                    height="180"
                    image="/images/medica.jpg"
                    alt="foto"
                    />
                    <CardActions className="cardActions">
                        <Button size="small" onClick={medicos}>Médicos</Button>
                    </CardActions>
                </Card>
            </div>

            <div className="ultimosCards">
                <Card sx={{width: 270}} className="cards">
                    <CardMedia
                    component="img"
                    height="180"
                    image="/images/chat.png"
                    alt="foto"
                    />
                    <CardActions className="cardActions">
                        <Button size="small" onClick={atendimento}>Atendimento</Button>
                    </CardActions>
                </Card>
                <br></br>
                <Card sx={{width: 270}} className="cards">
                    <CardMedia
                    component="img"
                    height="180"
                    image="/images/perfil.jpg"
                    alt="foto"
                    />
                    <CardActions className="cardActions">
                        <Button size="small" onClick={perfil}>Perfil</Button>
                    </CardActions>
                </Card>
            </div>

            {/* <div ultimosCards>
                <Card sx={{width: 280}} className="cards">
                <CardMedia
                component="img"
                height="180"
                image="/images/chat.png"
                alt="foto"
                />
                <CardActions className="cardActions">
                    <Button size="small" onClick={atendimento}>Atendimento</Button>
                </CardActions>
                </Card>
                <br></br>
                <Card sx={{width: 280}} className="cards">
                    <CardMedia
                    component="img"
                    height="180"
                    image="/images/perfil.jpg"
                    alt="foto"
                    />
                    <CardActions className="cardActions">
                        <Button size="small" onClick={perfil}>Perfil</Button>
                    </CardActions>
                </Card>
            </div> */}

            <div className="quadro">
            <br></br>
            <br></br>
            <Card sx={{width: 270}} className="cards">
                    <CardMedia
                    component="txt"
                    height="180"
                    />
                    <CardContent className="textoquadro">
                        <div>
                        <Typography>Quadro de Avisos</Typography>
                        <div className="avisos">
                        <Typography >
                        <Link onClick={agendamento}>Consulta Dra Ivete 12/04/2002</Link>
                        </Typography>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            </div>
        </div>
    )
}

export default PaginaInicial;