import React, { Component } from "react";
import { injectIntl, intlShape } from "react-intl";
import Header2 from "../../../shared/Header2.js";
import Swiper from "swiper/dist/js/swiper.js";
import css from "./assets/Banner.css";
import "swiper/dist/css/swiper.min.css";
import BannerTag from "./partial/BannerTag";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";
import bg5 from "./assets/bg5.jpg";
import bg6 from "./assets/bg6.jpg";
import bg7 from "./assets/bg7.jpg";
import bg8 from "./assets/bg8.jpg";
import mbg1 from "./assets/mbg1.jpg";
import mbg2 from "./assets/mbg2.jpg";
import mbg3 from "./assets/mbg3.jpg";
import mbg4 from "./assets/mbg4.jpg";
import mbg5 from "./assets/mbg5.jpg";
import mbg6 from "./assets/mbg6.jpg";
import mbg7 from "./assets/mbg7.jpg";
import mbg8 from "./assets/mbg8.jpg";
import cx from "classnames";

class Banner extends Component {
  componentDidMount() {
    this.setState(() => {
      this.updateSwiper();
    });
  }

  updateSwiper = () => {
    new Swiper(this.swiperID, {
      slidesPerView: 1,
      autoplay: {
        delay: 6000
      },
      loop: true,
      autoplayDisableOnInteraction: false,
      pagination: {
        el: this.paginationID,
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<span style ="background: #ffffff" class="' +
            className +
            '"></span>'
          );
        }
      }
    });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const data = [
      {
        bg: bg1,
        title: [formatMessage({ id: "banner_1_title" })],
        word: [
          { title: formatMessage({ id: "banner_1_word_1" }) },
          { title: formatMessage({ id: "banner_1_word_2" }) },
          { title: formatMessage({ id: "banner_1_word_3" }) },
          { title: formatMessage({ id: "banner_1_word_4" }) },
          { title: formatMessage({ id: "banner_1_word_5" }) }
        ]
      },
      {
        bg: bg2,
        title: [formatMessage({ id: "banner_2_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_2_word_1" }),
            desc: [
              formatMessage({ id: "banner_2_word_1_desc_1" }),
              formatMessage({ id: "banner_2_word_1_desc_2" })
            ]
          },
          { title: formatMessage({ id: "banner_2_word_2" }) },
          {
            title: formatMessage({ id: "banner_2_word_3" }),
            desc: [
              formatMessage({ id: "banner_2_word_3_desc_1" }),
              formatMessage({ id: "banner_2_word_3_desc_2" })
            ]
          }
        ]
      },
      {
        bg: bg3,
        title: [formatMessage({ id: "banner_3_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_3_word_1" })
          },
          { title: formatMessage({ id: "banner_3_word_2" }) },
          {
            title: formatMessage({ id: "banner_3_word_3" })
          }
        ]
      },
      {
        bg: bg4,
        title: [formatMessage({ id: "banner_4_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_4_word_1" })
          },
          {
            title: formatMessage({ id: "banner_4_word_2" })
          },
          {
            title: formatMessage({ id: "banner_4_word_3" })
          }
        ]
      },
      {
        bg: bg5,
        title: [
          formatMessage({ id: "banner_5_title" }),
          formatMessage({ id: "banner_5_title_2" })
        ],
        word: [
          {
            title: formatMessage({ id: "banner_5_word_1" })
          },
          { title: formatMessage({ id: "banner_5_word_2" }) },
          {
            title: formatMessage({ id: "banner_5_word_3" })
          },
          {
            title: formatMessage({ id: "banner_5_word_4" })
          },
          {
            title: formatMessage({ id: "banner_5_word_5" })
          },
          {
            title: formatMessage({ id: "banner_5_word_6" })
          }
        ]
      },
      {
        bg: bg6,
        title: [
          formatMessage({ id: "banner_6_title" }),
          formatMessage({ id: "banner_6_title_2" })
        ],
        word: [
          {
            title: formatMessage({ id: "banner_6_word_1" })
          },
          {
            title: formatMessage({ id: "banner_6_word_2" })
          },
          {
            title: formatMessage({ id: "banner_6_word_3" })
          },
          {
            title: formatMessage({ id: "banner_6_word_4" })
          },
          {
            title: formatMessage({ id: "banner_6_word_5" })
          },
          {
            title: formatMessage({ id: "banner_6_word_6" })
          },
          {
            title: formatMessage({ id: "banner_6_word_7" })
          },
          {
            title: formatMessage({ id: "banner_6_word_8" })
          }
        ]
      },
      {
        bg: bg7,
        title: [formatMessage({ id: "banner_7_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_7_word_1" })
          },
          {
            title: formatMessage({ id: "banner_7_word_2" })
          },
          {
            title: formatMessage({ id: "banner_7_word_3" })
          },
          {
            title: formatMessage({ id: "banner_7_word_4" })
          },
          {
            title: formatMessage({ id: "banner_7_word_5" })
          },
          {
            title: formatMessage({ id: "banner_7_word_6" })
          }
        ]
      },
      {
        bg: bg8,
        title: [formatMessage({ id: "banner_8_title" })],
        word: [
          {
            title: formatMessage({ id: "banner_8_word_1" })
          },
          {
            title: formatMessage({ id: "banner_8_word_2" })
          },
          {
            title: formatMessage({ id: "banner_8_word_3" })
          },
          {
            title: formatMessage({ id: "banner_8_word_4" })
          }
        ]
      }
    ];
    return (
      <div
        className={cx(css.container, "swiper-container")}
        ref={self => (this.swiperID = self)}
      >
        <Header2 scroll={true} />
        <div className="swiper-wrapper">
          {data.map((item, key) => (
            <BannerTag key={key} data={item} />
          ))}
        </div>
        <div
          className="swiper-pagination"
          ref={self => (this.paginationID = self)}
        />
      </div>
    );
  }
}

Banner.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Banner);
