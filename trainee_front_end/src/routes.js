import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistória";


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route path="/" component={UserMenu}/>
            </Switch>
        </BrowserRouter>
    )
}

function UserMenu() {
    return(
        <Menu>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/nossahistoria" component={NossaHistoria}/>
                <Route component={()=> <Redirect to = "./home" />}/>
                
            </Switch>
        </Menu>
    )
}

export default Routes;