import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import css from "./assets/Shared.css";
import * as languageActionCreator from "../../actions/language";
import { LANGUAGES } from "../../config/enum";
import Menu from "antd/lib/menu";
import "antd/lib/menu/style/css";
import Dropdown from "antd/lib/dropdown";
import "antd/lib/dropdown/style/css";
import Icon from "antd/lib/icon";
import "antd/lib/icon/style/css";

class LanguageSwitchBtn extends Component {
  render() {
    const { lang, actions, isMobile } = this.props;
    if (isMobile) {
      return (
        <div className={css.language}>
          <div
            className={lang === LANGUAGES.en ? css.black : css.blue}
            style={{ borderRightWidth: 0 }}
            onClick={lang === LANGUAGES.en ? actions.switchLanguage : null}
          >
            中文
          </div>
          <div
            className={lang === LANGUAGES.en ? css.blue : css.black}
            style={{ borderLeftWidth: 0 }}
            onClick={lang === LANGUAGES.en ? null : actions.switchLanguage}
          >
            EngLish
          </div>
        </div>
      );
    }
    const menu = (
      <Menu>
        <Menu.Item onClick={actions.switchLanguage}>
          {lang === LANGUAGES.en ? "中文" : "English"}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <p className="ant-dropdown-link">
          {lang === LANGUAGES.en ? "English" : "中文"} <Icon type="down" />
        </p>
      </Dropdown>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang"),
    winWidth: state.globalReducer.get("winWidth"),
    isMobile: state.globalReducer.get("isMobile")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        switchLanguage: languageActionCreator.switchLanguage
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitchBtn);
