import React, { Component } from "react";
import css from "./assets/AdvangtagePanel.css";
import AdvangtageTab from "./partial/AdvangtageTab";
import { injectIntl } from "react-intl";
import cell from "./assets/cells.png";
import cpu from "./assets/cpu.png";
import phone from "./assets/phone.png";
import transfer from "./assets/transfer.png";
import view from "./assets/view.png";

class AdvangtagePanel extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { title, data } = {
      title: formatMessage({ id: "product_advangtage_title" }),
      data: [
        {
          title: formatMessage({ id: "product_advangtage_tip_1" }),
          bg: cell
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_2" }),
          bg: phone
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_3" }),
          bg: transfer
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_4" }),
          bg: cpu
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_5" }),
          bg: view
        }
      ]
    };
    return (
      <div
        className={css.container}
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div id={title} className={css.anchor} />
        <div className={css.title}>{title}</div>
        <div className={css.content}>
          {data.map((item, key) => (
            <AdvangtageTab key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(AdvangtagePanel);
