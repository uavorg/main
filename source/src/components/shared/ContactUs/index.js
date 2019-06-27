import React, { Component } from "react";
import css from "./assets/ContactUs.css";
import qrcode from "../assets/qrcode.jpg";
import qrcode2 from "../assets/helper.jpg";
import { injectIntl } from "react-intl";
class ContactUs extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { title, account, helper, mail } = {
      title: formatMessage({ id: "contactUs_title" }),
      account: [
        formatMessage({ id: "contactUs_tip_1" }),
        formatMessage({ id: "contactUs_tip_2" })
      ],
      helper: [
        formatMessage({ id: "contactUs_tip_3" }),
        formatMessage({ id: "contactUs_tip_4" })
      ],
      mail: formatMessage({ id: "contactUs_mail" })
    };
    return (
      <div>
        <div id="contactUs" className={css.anchor} />
        <div className={css.container}>
          <div className={css.content}>
            <div className={css.title}>{title}</div>
            <div className={css.line} />
            <div className={css.tab}>
              {account.map((item, key) => (
                <div key={key}>{item}</div>
              ))}
              <img src={qrcode} alt="download" className={css.img} />
            </div>
            <div className={css.tab1}>
              {helper.map((item, key) => (
                <div key={key}>{item}</div>
              ))}
              <img src={qrcode2} alt="download" className={css.img} />
            </div>
            <div className={css.tab2}>
              UAVStack Organization
              <br />
              Beijing China
              <a href="mailto:uavstacksupport@163.com" className={css.email}>
                {mail}
              </a>
            </div>
          </div>
        </div>
        <p className={css.org}>© 2016-2018 UAVStack Organization</p>
      </div>
    );
  }
}

export default injectIntl(ContactUs);
