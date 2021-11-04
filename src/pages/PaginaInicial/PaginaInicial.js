import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from "@mui/material";
import api from "../../services/api";
import { getUserId } from "../../services/auth";
import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
import "./PaginaInicial.css";
import { useHistory } from "react-router-dom";

function PaginaInicial() {
  const history = useHistory();

  function medicos() {
    history.push("/ap/medicos");
  }

  function atendimento() {
    history.push("/ap/atendimento");
  }

  function agendamento() {
    history.push("/ap/agendamento");
  }

  function perfil() {
    history.push("/ap/perfil");
  }

  const user_id = getUserId();
  const [data, setData] = useState([]);

  async function getData() {
    const response = await api.get(`/consultation/${user_id}`);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="paginainicial">
      <div className="primeirosCards">
        <Card sx={{ width: 280 }} className="cards">
          <CardMedia
            component="img"
            height="180"
            image="/images/Agendamento.jpg"
            alt="foto"
          />
          <CardActions className="cardActions">
            <Button size="small" onClick={agendamento}>
              Agendamento
            </Button>
          </CardActions>
        </Card>
        <br></br>
        <Card sx={{ width: 280 }} className="cards">
          <CardMedia
            component="img"
            height="180"
            image="/images/medica.jpg"
            alt="foto"
          />
          <CardActions className="cardActions">
            <Button size="small" onClick={medicos}>
              Médicos
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="ultimosCards">
        <Card sx={{ width: 280 }} className="cards">
          <CardMedia
            component="img"
            height="180"
            image="/images/chat.png"
            alt="foto"
          />
          <CardActions className="cardActions">
            <Button size="small" onClick={atendimento}>
              Atendimento
            </Button>
          </CardActions>
        </Card>
        <br></br>
        <Card sx={{ width: 280 }} className="cards">
          <CardMedia
            component="img"
            height="180"
            image="/images/perfil.jpg"
            alt="foto"
          />
          <CardActions className="cardActions">
            <Button size="small" onClick={perfil}>
              Perfil
            </Button>
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
        <Card sx={{ width: 280 }} className="cards">
          <CardMedia component="txt" height="180" />
          <CardContent className="textoquadro">
            <div>
              <div className="centralizatexto">
              <p>Quadro de Eventos</p>
              </div>
              {data.map((consult, index) => {
                if (index > 4) {
                  return undefined;
                }
                return <Link href="/ap/agendamento">Consulta Agendada: {consult.date}</Link>;
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PaginaInicial;
