import React, { Component } from "react";
import { Helmet } from "react-helmet";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>404</title>
        </Helmet>
        404
      </div>
    );
  }
}

export default NoMatch;
