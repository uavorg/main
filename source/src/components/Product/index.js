import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../shared/ContactUs";
import DocumentTab from "./partial/DocumentTab";
import Head from "./partial/Head";
import ScrollBar from "./partial/ScrollBar";
import AdvangtagePanel from "./partial/AdvantagePanel";
import IntroductionPanel from "./partial/IntroductionPanel";
import Outline from "./partial/Outline";
import MobileHeader from "../shared/MobileHeader";
import MobileSelector from "../shared/MobileSelector";
import MobileCursor from "../shared/MobileCursor";
import { injectIntl, intlShape } from "react-intl";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      count: 0,
      top: 0
    };
    window.scroll(0, 0);
  }
  setCount(c, e) {
    this.setState(prevState => ({
      count: c
    }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler);
  };

  scrollHandler(event) {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({
      top: scrollTop
    });
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { isMobile } = this.props;
    const fix = this.state.top > 400 ? 0 : 400 - this.state.top;
    const { head } = {
      head: [
        formatMessage({ id: "product_advangtage_title" }),
        formatMessage({ id: "product_introductPanel_title" }),
        formatMessage({ id: "product_outline_title" }),
        formatMessage({ id: "product_help_title" })
      ]
    };
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "product"
            })}
          </title>
        </Helmet>
        <MobileHeader />
        <Head />
        <ScrollBar data={head} top={fix} />
        <MobileSelector
          item={head}
          count={this.state.count}
          setCount={this.setCount.bind(this)}
          position="static"
        />
        <AdvangtagePanel show={!isMobile || this.state.count === 0} />
        <IntroductionPanel show={!isMobile || this.state.count === 1} />
        <Outline show={!isMobile || this.state.count === 2} />
        <DocumentTab show={!isMobile || this.state.count === 3} />
        <ContactUs />
        <MobileCursor />
      </div>
    );
  }
}

Product.propTypes = {
  intl: intlShape.isRequired
};

function mapStateToProps(state) {
  return {
    isMobile: state.globalReducer.get("isMobile")
  };
}

export default injectIntl(connect(mapStateToProps)(Product));
