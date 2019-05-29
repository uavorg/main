import React, { Component } from "react";
import css from "./assets/ScrollBar.css";
import { injectIntl } from "react-intl";

class ScrollBar extends Component {
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  render() {
    const data = this.props.data;
    return (
      <div className={css.container} style={{ marginTop: this.props.top }}>
        <div className={css.content}>
          {data.map((item, key) => (
            <a
              key={key}
              className={css.tag}
              onClick={() => this.scrollToAnchor(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(ScrollBar);
