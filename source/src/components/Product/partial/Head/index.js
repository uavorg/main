import React, { Component } from "react";
import Header2 from "../../../shared/Header2.js";
import css from "./assets/Head.css";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState();
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { title, tip, use } = {
      title: formatMessage({ id: "documentTab_download_title2" }),
      tip: formatMessage({ id: "product_banner_tip" }),
      use: formatMessage({ id: "product_banner_use" })
    };
    return (
      <div className={css.container}>
        <Header2 />
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <p className={css.org}>{tip}</p>
          <Link to={"/download"} className={css.email}>
            {use}
          </Link>
        </div>
      </div>
    );
  }
}

export default injectIntl(Head);
