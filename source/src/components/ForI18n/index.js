import React, { Component } from "react";
import App from "../App/";
import { IntlProvider } from "react-intl";
import zh_CN from "../../i18n/zh_CN";
import en_US from "../../i18n/en_US";
import { LANGUAGES } from "../../config/enum";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as globalActions from "../../actions/global";
import { runFitPage } from "../../lib/fitPage";
import "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/zh";

class ForI18n extends Component {
  componentDidMount() {
    const { actions } = this.props;
    runFitPage(width => actions.updateDimension({ width }));
  }
  render() {
    const { lang } = this.props;
    const message = lang === LANGUAGES.en ? en_US : zh_CN;
    return (
      <IntlProvider locale="en" messages={message}>
        <HashRouter>
          <App />
        </HashRouter>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateDimension: globalActions.updateDimension
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForI18n);
