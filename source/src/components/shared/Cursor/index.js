import React, { Component } from "react";
import Mail from "./Mail";
import QCode from "./QRCode";
import Top from "./Top";
import css from "./assets/Cursor.css";
import { injectIntl } from "react-intl";

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: -1,
    };
  }
  setCount =(c )  =>{
    this.setState(prevState => ({
      count: c
    }));
  }

  render() {
    return (
      <div className={css.cursor}>
        <QCode setShow ={(show)=>{this.setCount(show? 0 : -1)}} show = {this.state.count === 0}/>
        <Mail setShow ={(show)=>{this.setCount(show? 1 : -1)}} show = {this.state.count === 1}/>
        <Top/>
      </div>
    );
  }
}

export default injectIntl(Cursor);
