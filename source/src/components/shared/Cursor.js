import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import css from "./assets/Shared.css";
import tri from "./assets/tri.png";

class Cursor extends Component {
  render() {
    return (
      <Link to={"/"} className={css.cursor}>
        <img src={tri} alt="tri" className={css.tri} />
        <FormattedMessage id="top" />
      </Link>
    );
  }
}

export default Cursor;
