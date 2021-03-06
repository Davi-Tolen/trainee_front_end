import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistória";
import Header from "./pages/Header";
import PaginaInicial from "./pages/PaginaInicial";
import NossosProfissionais from "./pages/NossosProfissionais";
import Contato from "./pages/Contato"
import MedicosAP from "./pages/MedicosAP";
import Perfil from "./pages/Perfil";
import Atendimento from "./pages/Atendimento";
import Agendamento from "./pages/Agendamento";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route path="/menu" component={UserMenu}/>
                <Route path="/ap" component={UserHeader}/>
                <Route component={()=> <Redirect to = "/menu/home" />}/>
            </Switch>
        </BrowserRouter>
    )
}

function UserMenu() {
    return(
        <Menu>
            <Switch>
                <Route exact path="/menu/home" component={Home}/>
                <Route exact path="/menu/nossahistoria" component={NossaHistoria}/>
                <Route exact path="/menu/nossosprofissionais" component={NossosProfissionais}/>
                <Route exact path="/menu/contato" component={Contato}/>
                <Route component={()=> <Redirect to = "/menu/home" />}/>
                
            </Switch>
        </Menu>
    )
}

function UserHeader(){
    return(
        <Header>
            <Switch>
                <Route exact path="/ap/paginainicial" component={PaginaInicial}/>
                <Route exact path="/ap/medicos" component={MedicosAP}/>
                <Route exact path="/ap/perfil" component={Perfil}/>
                <Route  exact path="/ap/atendimento" component={Atendimento}/>
                <Route exact path="/ap/agendamento" component={Agendamento}/>
            </Switch>
        </Header>
    )
}

export default Routes;