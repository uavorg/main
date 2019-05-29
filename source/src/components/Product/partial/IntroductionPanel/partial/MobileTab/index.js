import React, { Component } from "react";
import css from "./assets/MobileTab.css";
import Icon from "antd/lib/icon";

class MobileTab extends Component {
  render() {
    const { data, show } = this.props;
    let menu = (
      <div className={css.menu}>
        {data.tips.map((item, key) => (
          <div key={key}>{item} </div>
        ))}
        <img className={css.img} src={data.pic} alt={data.title} />
      </div>
    );
    return (
      <div>
        <div className={css.container}>
          {data.title}
          <Icon className={css.icon} type={show ? "up" : "down"} />
        </div>
        {show ? menu : null}
      </div>
    );
  }
}

export default MobileTab;
