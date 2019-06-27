import React, { Component } from "react";
import css from "./assets/Cursor.css";
import {  injectIntl, intlShape } from "react-intl";
import QRIcon from "./assets/qricon.png";
import qrcode from "../assets/qrcode.jpg";
import qrcode2 from "../assets/helper.jpg";
import Icon from "antd/lib/icon";

class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover:false
    };
  }

  showModal = () => {
   this.props.setShow(true);
  };
  handleClose = () => {
    this.props.setShow(false);
  };

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <div className={css.button} onMouseOver={()=>{ this.setState({ hover:true })}} onMouseOut={()=>{ this.setState({ hover:false })}}>
          {this.state.hover ?
            (
              <div  onClick={this.showModal}>
                {formatMessage({ id: "cursor_qrcode_title" })}
              </div>
            ) :
            (
              <img src={QRIcon} alt="tri"/>
            )
          }
        </div>
        <div className={css.tab} style={{opacity:this.props.show? 1:0}} >
          <Icon className={css.close}type="close" onClick={this.handleClose} />
          <p style={{fontSize:18}}>{formatMessage({ id: "cursor_qrcode_title2" })}</p>
          <div className={css.tab2}  >
            <img src={qrcode} alt="download" />
            <div>{formatMessage({ id: "contactUs_tip_1" })}</div>
            <div style={{color:"#FFA500"}}>{formatMessage({ id: "contactUs_tip_2" })}</div>
          </div>
          <div className={css.tab2}  >
            <img src={qrcode2} alt="download" />
            <div>{formatMessage({ id: "cursor_qrcode_tip1" })}</div>
            <div style={{color:"#FFA500"}}>{formatMessage({ id: "cursor_qrcode_tip2" })}</div>
          </div>
        </div>
      </div>
    );
  }
}

QRCode.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(QRCode);
