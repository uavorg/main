import React, { Component } from "react";
import css from "./assets/DocumentTab.css";
import { injectIntl } from "react-intl";

class DocumentTab extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { data } = {
      data: [
        {
          title: formatMessage({ id: "product_help_1_tip" }),
          link: formatMessage({ id: "product_help_1_link" })
        },
        {
          title: formatMessage({ id: "product_help_2_tip" }),
          link: formatMessage({ id: "product_help_2_link" })
        },
        {
          title: formatMessage({ id: "product_help_3_tip" }),
          link: formatMessage({ id: "product_help_3_link" })
        }
      ]
    };
    return (
      <div
        className={css.container}
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div
          id={formatMessage({ id: "product_help_title" })}
          className={css.anchor}
        />
        <div className={css.title}>
          {formatMessage({ id: "product_help_title" })}
        </div>
        {data.map((item, key) => (
          <a href={item.link} target="_blank" key={key} className={css.tab}>
            {item.title}
          </a>
        ))}
      </div>
    );
  }
}
export default injectIntl(DocumentTab);
