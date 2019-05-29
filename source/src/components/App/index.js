import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Download from "../Download";
import Document from "../Document";
import NoMatch from "../NoMatch";
import Home from "../Home";
import Product from "../Product";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/document" component={Document} />
          <Route path="/download" component={Download} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
