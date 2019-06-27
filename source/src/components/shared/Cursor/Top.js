import React, { Component } from "react";
import css from "./assets/Cursor.css";
import {  injectIntl, intlShape } from "react-intl";
import topIcon from "./assets/topicon.png";
import { Link } from "react-router-dom";

class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover:false
    };
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Link to={"/"} className={css.button} onMouseOver={()=>{ this.setState({ hover:true })}} onMouseOut={()=>{ this.setState({ hover:false })}}>
          {this.state.hover ?
            (
              <div >
                {formatMessage({ id: "cursor_top" })}
              </div>
            ) :
            (
              <img src={topIcon} alt="tri"/>
            )
          }
        </Link>
      </div>
    );
  }
}

QRCode.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(QRCode);
