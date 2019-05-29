import React, { Component } from "react";
import css from "./assets/ContributorTab.css";
import cx from "classnames";
import git from "./assets/git.png";
class ContributorTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={cx(css.container, "swiper-slide")}>
        <img className={css.head} src={data.pic} alt={data.name} />
        <a
          className={css.link}
          href={"https://github.com/" + data.gitid}
          target="_blank"
        >
          <img className={css.img} src={git} alt="git" />
        </a>
        <h2 className={css.title}>{data.name}</h2>
        <ul className={css.descCon}>
          {data.tips.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContributorTab;
