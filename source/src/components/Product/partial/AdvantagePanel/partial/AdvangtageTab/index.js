import React, { Component } from "react";
import css from "./assets/AdvangtageTab.css";

class AdvangtageTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={css.container}>
        <img className={css.img} src={data.bg} alt={data.title} />
        <div className={css.title}>{data.title}</div>
      </div>
    );
  }
}

export default AdvangtageTab;
