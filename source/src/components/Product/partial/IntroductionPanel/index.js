import React, { Component } from "react";
import css from "./assets/IntroductionPannel.css";
import IntroductionTab from "./partial/IntroductionTab";
import MobileTab from "./partial/MobileTab";
import { injectIntl } from "react-intl";
import pic1 from "./assets/pic1.png";
import pic1_en from "./assets/pic1_en.jpg";
import pic2 from "./assets/pic2.png";
import pic2_en from "./assets/pic2_en.jpg";
import pic3 from "./assets/pic3.png";
import pic3_en from "./assets/pic3_en.jpg";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic5_en from "./assets/pic5_en.jpg";
import pic6 from "./assets/pic6.png";
import pic6_en from "./assets/pic6_en.jpg";
import pic7 from "./assets/pic7.png";
import pic7_en from "./assets/pic7_en.jpg";
import pic8 from "./assets/pic8.jpg";
import pic8_en from "./assets/pic8_en.jpg";

import { LANGUAGES } from "../../../../config/enum";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang"),
    isMobile: state.globalReducer.get("isMobile")
  };
}

class IntroductionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.isMobile ? -1 : 0
    };
  }

  setCount(c, e) {
    if (this.props.isMobile && c === this.state.count) {
      c = -1;
    }
    this.setState(prevState => ({
      count: c
    }));
  }

  render() {
    const { count } = this.state;
    const { lang, isMobile } = this.props;
    const { formatMessage } = this.props.intl;
    const title = formatMessage({ id: "product_introductPanel_title" });
    const data = [
      {
        title: formatMessage({ id: "product_introductTab_1_title" }),
        tips: [formatMessage({ id: "product_introductTab_1_tip" })],
        pic: lang === LANGUAGES.cn ? pic1 : pic1_en,
        width: 170
      },
      {
        title: formatMessage({ id: "product_introductTab_2_title" }),
        tips: [formatMessage({ id: "product_introductTab_2_tip" })],
        pic: lang === LANGUAGES.cn ? pic2 : pic2_en,
        width: 160
      },
      {
        title: formatMessage({ id: "product_introductTab_3_title" }),
        tips: [formatMessage({ id: "product_introductTab_3_tip" })],
        pic: lang === LANGUAGES.cn ? pic3 : pic3_en,
        width: 160
      },
      {
        title: formatMessage({ id: "product_introductTab_4_title" }),
        tips: [formatMessage({ id: "product_introductTab_4_tip" })],
        pic: pic4
      },
      {
        title: formatMessage({ id: "product_introductTab_5_title" }),
        tips: [formatMessage({ id: "product_introductTab_5_tip" })],
        pic: lang === LANGUAGES.cn ? pic5 : pic5_en
      },
      {
        title: formatMessage({ id: "product_introductTab_6_title" }),
        tips: [
          formatMessage({ id: "product_introductTab_6_tip" }),
          formatMessage({ id: "product_introductTab_6_tip_2" })
        ],
        pic: lang === LANGUAGES.cn ? pic6 : pic6_en
      },
      {
        title: formatMessage({ id: "product_introductTab_7_title" }),
        tips: [
          formatMessage({ id: "product_introductTab_7_tip" }),
          formatMessage({ id: "product_introductTab_7_tip_2" })
        ],
        pic: lang === LANGUAGES.cn ? pic7 : pic7_en
      },
      {
        title: formatMessage({ id: "product_introductTab_8_title" }),
        tips: [formatMessage({ id: "product_introductTab_8_tip" })],
        pic: lang === LANGUAGES.cn ? pic8 : pic8_en
      }
    ];
    if (isMobile) {
      return (
        <div
          className={css.container}
          style={{ display: this.props.show ? "block" : "none" }}
        >
          {data.map((item, key) => (
            <div key={key} onClick={this.setCount.bind(this, key)}>
              <MobileTab data={item} show={key === count} />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div
        className={css.container}
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div id={title} className={css.anchor} />
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          {data.map((item, key) => (
            <div
              className={key === count ? css.selected : css.tab}
              key={key}
              onClick={this.setCount.bind(this, key)}
              style={{ width: item.width + "px" }}
            >
              <div className={css.title2}>{item.title}</div>
            </div>
          ))}
          {data.map((item, key) => (
            <IntroductionTab key={key} data={item} hide={key !== count} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(injectIntl(IntroductionPanel));
