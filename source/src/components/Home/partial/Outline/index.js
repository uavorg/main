import React, { Component } from "react";
import css from "./assets/Outline.css";
import outline from "./assets/Outline.png";
import outline_en from "./assets/Outline_en.jpg";
import { FormattedMessage } from "react-intl";
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
    return (
      <div className={css.container}>
        <div className={css.title}>
          <FormattedMessage id="outline_title" />
        </div>
        <div className={css.line} />
        <img
          className={css.img}
          src={lang === LANGUAGES.cn ? outline : outline_en}
          alt="outline"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Outline);
