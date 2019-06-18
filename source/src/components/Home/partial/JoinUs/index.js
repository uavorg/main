import React, { Component } from "react";
import css from "./assets/JoinUs.css";
import { injectIntl } from "react-intl";

class JoinUs extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { title, tip, manual, manual_link, download, download_link } = {
      title: formatMessage({ id: "JoinUs_title" }),
      tip: formatMessage({ id: "JoinUS_tip" }),
      manual: formatMessage({ id: "JoinUs_manual" }),
      manual_link: formatMessage({ id: "JoinUs_manual_link" }),
      download: formatMessage({ id: "JoinUs_download" }),
      download_link: formatMessage({ id: "JoinUs_download_link" })
    };
    return (
      <div className={css.container}>
        <div id="JoinUs" className={css.anchor} />
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.line} />
          <div className={css.tip}>{tip}</div>
          <a target="_blank" href={manual_link} className={css.tab}>
            <div className={css.img} />
            <span>{manual}</span>
          </a>
          <a target="_blank" href={download_link} className={css.tab}>
            <div className={css.img2} />
            <span>{download}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default injectIntl(JoinUs);
