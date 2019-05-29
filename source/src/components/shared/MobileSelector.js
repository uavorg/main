import React, { Component } from "react";
import css from "./assets/Shared.css";

class MobileSelector extends Component {
  render() {
    let { setCount, count, item } = this.props;
    let len = 100 / item.length;
    return (
      <div className={css.selector}>
        {item.map((item, key) => (
          <div
            className={count === key ? css.active : null}
            key={key}
            style={{ width: len + "%" }}
            onClick={setCount.bind(this, key)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}

export default MobileSelector;
