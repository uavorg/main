import React, { Component } from "react";
import css from "./assets/Dialog.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import Modal from "antd/lib/modal";
import "antd/lib/modal/style/css";

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    this.setState({
      visible: false
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { popup_href, popup_os } = {
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
      ]
    };
    return (
      <div>
        <a className={css.button} onClick={this.showModal}>
          <FormattedMessage id="popup_title" />
        </a>
        <Modal
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
        >
          <div className={css.pad}>
            <h1 className={css.head}>
              <FormattedMessage id="popup_title" />
            </h1>
            <h2 className={css.head2}>
              <FormattedMessage id="popup_title2" />
            </h2>
            <div>
              <FormattedMessage id="popup_tip" />
            </div>
            <div>
              <FormattedMessage id="popup_tip2" />
            </div>
            <div>
              <FormattedMessage id="popup_tip3" />
              <a target="_blank" href={popup_href}>
                <FormattedMessage id="popup_tip_link" />
              </a>
            </div>
          </div>
          <div className={css.pad2}>
            {popup_os.map((item, key) => (
              <a
                key={key}
                type="primary"
                href={item.link}
                target="_blank"
                className={css.email}
              >
                {item.title}
              </a>
            ))}
          </div>
        </Modal>
      </div>
    );
  }
}

Dialog.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Dialog);
