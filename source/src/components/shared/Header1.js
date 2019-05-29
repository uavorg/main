import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitchBtn from "./LanguageSwitchBtn.js";
import { FormattedMessage, injectIntl } from "react-intl";
import css from "./assets/Shared.css";
import logo from "./assets/logo.png";

class Header1 extends Component {
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  render() {
    let h = this.props.hide ? "0" : "70px";
    let s = this.props.scroll ? "block" : "none";
    return (
      <div className={css.container} style={{ height: h }}>
        <div className={css.content}>
          <Link to={"/"} className={css.title}>
            <img src={logo} alt="download" />
            <span>UAVStack</span>
          </Link>
          <div className={css.tag}>
            <NavLink
              exact
              to={"/"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="home" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/product"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="product" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/download"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="download" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/document"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="document" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag} style={{ display: s }}>
            <a
              onClick={() => this.scrollToAnchor("JoinUs")}
              className={css.link}
              target="_blank"
            >
              <FormattedMessage id="JoinUs_title" />
            </a>
          </div>
          <div className={css.tag} style={{ display: s }}>
            <a
              onClick={() => this.scrollToAnchor("contactUs")}
              className={css.link}
              target="_blank"
            >
              <FormattedMessage id="contactUs_title" />
            </a>
          </div>
          <div className={css.tag}>
            <a
              href={" https://github.com/uavorg/uavstack"}
              className={css.link}
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className={css.language}>
            <LanguageSwitchBtn className={css.tag} />
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Header1);
