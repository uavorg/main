import React, { Component } from "react";
import css from "./assets/Outline.css";
import outline from "./assets/Outline.png";
import outline_en from "./assets/Outline_en.jpg";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../../config/enum";

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang")
  };
}
class Outline extends Component {
  render() {
    const { lang } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <div
        className={css.container}
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div
          id={formatMessage({ id: "product_outline_title" })}
          className={css.anchor}
        />
        <div className={css.title}>
          {formatMessage({ id: "product_outline_title" })}
        </div>
        <img
          className={css.img}
          src={lang === LANGUAGES.cn ? outline : outline_en}
          alt={formatMessage({ id: "product_outline_title" })}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps)(injectIntl(Outline));
