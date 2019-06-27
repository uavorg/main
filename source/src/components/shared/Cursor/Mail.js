import React, { Component } from "react";
import css from "./assets/Cursor.css";
import {  injectIntl, intlShape } from "react-intl";
import mailIcon from "./assets/mailIcon.png";
import Icon from "antd/lib/icon";

class Mail extends Component {
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
                {formatMessage({ id: "contactUs_mail" })}
              </div>
            ) :
            (
              <img src={mailIcon} alt="tri"/>
            )
          }
        </div>
        <div className={css.tab} style={{opacity:this.props.show? 1:0}} >
          <Icon className={css.close}type="close" onClick={this.handleClose} />
          <p>UAVStack Organization  &nbsp;&nbsp;Beijing China </p>
          <p style={{color:"#69C1ED"}}>UAVStackSupport@163.com  </p>
          <a href="mailto:uavstacksupport@163.com" className={css.email}>
            { formatMessage({ id: "contactUs_mail" })}
          </a>
        </div>
      </div>
    );
  }
}

Mail.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Mail);
