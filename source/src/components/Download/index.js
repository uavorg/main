import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header1 from "../shared/Header1.js";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Download.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import Cursor from "../shared/Cursor";
import MobileHeader from "../shared/MobileHeader";
import MobileSelector from "../shared/MobileSelector";
import MobileCursor from "../shared/MobileCursor";
import { connect } from "react-redux";

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    window.scroll(0, 0);
  }
  setCount(c, e) {
    this.setState(prevState => ({
      count: c
    }));
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { isMobile } = this.props;
    var display = isMobile ? "none" : "block";
    const { head, popup_href, join, popup_os, download } = {
      head: [
        formatMessage({ id: "download_head" }),
        formatMessage({ id: "documentTab_download_title2" }),
        formatMessage({ id: "JoinUs_title" })
      ],
      popup_href: formatMessage({ id: "popup_link" }),
      popup_os: [
        {
          title: formatMessage({ id: "popup_windows" }),
          link: formatMessage({ id: "popup_windows_link" })
        },
        {
          title: formatMessage({ id: "popup_mac" }),
          link: formatMessage({ id: "popup_mac_link" })
        },
        {
          title: formatMessage({ id: "popup_linux" }),
          link: formatMessage({ id: "popup_linux_link" })
        }
      ],

      join: {
        tip: formatMessage({ id: "JoinUS_tip" }),
        manual: formatMessage({ id: "JoinUs_manual" }),
        manual_link: formatMessage({ id: "JoinUs_manual_link" }),
        download: formatMessage({ id: "JoinUs_download" }),
        download_link: formatMessage({ id: "JoinUs_download_link" })
      },

      download: [
        {
          title: formatMessage({ id: "documentTab_download_line_1_title" }),
          tip: formatMessage({ id: "documentTab_download_line_1_tip" }),
          link: formatMessage({ id: "documentTab_download_line_1_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_2_title" }),
          tip: formatMessage({ id: "documentTab_download_line_2_tip" }),
          link: formatMessage({ id: "documentTab_download_line_2_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_3_title" }),
          tip: formatMessage({ id: "documentTab_download_line_3_tip" }),
          link: formatMessage({ id: "documentTab_download_line_3_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_4_title" }),
          tip: formatMessage({ id: "documentTab_download_line_4_tip" }),
          link: formatMessage({ id: "documentTab_download_line_4_link" })
        }
      ]
    };
    let popupdiv = (
      <div
        className={css.container2}
        style={{ display: this.state.count === 0 ? "block" : display }}
      >
        <div className={css.content}>
          <div className={css.head}>{head[0]}</div>
          <div className={css.body}>
            <div className={css.head2}>
              <FormattedMessage id="popup_title2" />
            </div>
            <div className={css.tip}>
              <FormattedMessage id="popup_tip" />
              <FormattedMessage id="popup_tip2" />
              <FormattedMessage id="popup_tip3" />
              <a className={css.link} href={popup_href} target="_blank">
                <FormattedMessage id="popup_tip_link" />
              </a>
            </div>
            <div className={css.body2}>
              {popup_os.map((item, key) => (
                <div key={key} className={css.pad}>
                  <div className={css.head3}>{item.title}</div>
                  <a
                    type="primary"
                    href={item.link}
                    className={css.email}
                    target="_blank"
                  >
                    <FormattedMessage id="download" />
                  </a>
                  <div className={css.mobile_tip}>
                    <FormattedMessage id="msuggest_download" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
    let downloaddiv = (
      <div
        className={css.container2}
        style={{ display: this.state.count === 1 ? "block" : display }}
      >
        <div className={css.head}>{head[1]}</div>
        {download.map((item, key) => (
          <div key={key} className={css.pad2}>
            <div className={css.head3}>{item.title}</div>
            <div className={css.tip2}>
              <div>{item.tip}</div>
            </div>
            <a
              type="primary"
              href={item.link}
              className={css.email}
              target="_blank"
            >
              <FormattedMessage id="download" />
            </a>
            <div className={css.mobile_tip}>
              <FormattedMessage id="msuggest_download" />
            </div>
          </div>
        ))}
      </div>
    );

    let joindiv = (
      <div
        className={css.container2}
        style={{ display: this.state.count === 2 ? "block" : display }}
      >
        <div className={css.head}>{head[2]}</div>
        <div className={css.body}>
          <div className={css.head2}>{join.tip}</div>
          <div className={css.pad3}>
            <div className={css.head3}>{join.manual}</div>
            <a
              type="primary"
              href={join.manual_link}
              className={css.email}
              target="_blank"
            >
              <FormattedMessage id="download" />
            </a>
            <div className={css.mobile_tip}>
              <FormattedMessage id="msuggest_download" />
            </div>
          </div>
          <div className={css.pad3}>
            <div className={css.head3}>{join.download}</div>
            <a
              type="primary"
              href={join.download_link}
              className={css.email}
              target="_blank"
            >
              <FormattedMessage id="download" />
            </a>
            <div className={css.mobile_tip}>
              <FormattedMessage id="msuggest_download" />
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className={css.container}>
        <Helmet>
          <title>
            {formatMessage({
              id: "download"
            })}
          </title>
        </Helmet>
        <Header1 />
        <MobileHeader />
        <MobileSelector
          item={head}
          count={this.state.count}
          setCount={this.setCount.bind(this)}
        />
        {popupdiv}
        {downloaddiv}
        {joindiv}
        <ContactUs />
        <Cursor/>
        <MobileCursor />
      </div>
    );
  }
}

Download.propTypes = {
  intl: intlShape.isRequired
};
function mapStateToProps(state) {
  return {
    isMobile: state.globalReducer.get("isMobile")
  };
}
export default injectIntl(connect(mapStateToProps)(Download));
