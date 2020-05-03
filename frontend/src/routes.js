import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Consult from "./pages/cadastroColsult/index";
import Home from "./pages/home/App";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new/consult" component={Consult} />
        {/* <Route path="/" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
