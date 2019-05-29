import React, { Component } from "react";
import css from "./assets/ProductTab.css";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

class ProductTab extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { data, isMobile } = this.props;
    let site = null;
    if (data.site === "default") {
    } else if (data.site != null) {
      site = (
        <Link
          to={data.site}
          className={css.cover}
          style={{
            width: isMobile ? "100%" : data.width + "px",
            backgroundColor: "#69C1ED"
          }}
        >
          <span className={css.link}>
            {" "}
            {formatMessage({ id: "productTab_details" })}
          </span>
        </Link>
      );
    } else {
      site = (
        <div
          className={css.cover}
          style={{
            width: isMobile ? "100%" : data.width + "px",
            backgroundColor: "#808492"
          }}
        >
          <span className={css.next}>
            {formatMessage({ id: "productTab_none" })}
            ...
          </span>
        </div>
      );
    }

    return (
      <div
        className={css.container}
        style={{
          width: isMobile ? "100%" : data.width + "px",
          backgroundImage: "url(" + data.bg + ")",
          backgroundSize: isMobile ? "1.25rem" : data.bgsize + "px"
        }}
      >
        <div className={css.title}>{data.title}</div>
        {data.tips.map((item, key) => (
          <div key={key} className={css.tip}>
            {item}
          </div>
        ))}
        {site}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.globalReducer.get("isMobile")
  };
}
export default connect(mapStateToProps)(injectIntl(ProductTab));
