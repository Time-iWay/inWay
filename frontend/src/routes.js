import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Consult from "./pages/cadastroColsult/index";
import Home from "./pages/home/app";
import Profile from "./pages/profile/index";
import Opcoes from './pages/telaOpcoes/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new/consult" component={Consult} />
        <Route path="/profile" component={Profile} />
        <Route path="/start" component={Opcoes} />
        {/* <Route path="/" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
