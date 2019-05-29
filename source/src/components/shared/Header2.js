import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitchBtn from "./LanguageSwitchBtn.js";
import { FormattedMessage } from "react-intl";
import css from "./assets/Shared.css";
import logo from "./assets/logo.png";
class Header2 extends Component {
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  render() {
    var git =
      "https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67";
    var h = this.props.hide ? "0" : "150px";
    var s = this.props.scroll ? "block" : "none";
    return (
      <div
        className={css.container2}
        style={{ height: h, position: this.props.position }}
      >
        <a
          href={" https://github.com/uavorg/uavstack"}
          className={css.git}
          target="_blank"
        >
          <img src={git} alt="git" />
        </a>
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

export default Header2;
