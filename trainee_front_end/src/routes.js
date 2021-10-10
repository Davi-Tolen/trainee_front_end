import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;