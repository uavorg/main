import React, { Component } from "react";
import { injectIntl, intlShape } from "react-intl";
import Banner from "./partial/Banner/banner";
import MBanner from "./partial/Banner/mbanner";
import Head from "./partial/Head";
import UpdateTab from "./partial/UpdateTab";
import ProductPanel from "./partial/ProductPanel";
import Outline from "./partial/Outline";
import DocumentTab from "./partial/DocumentTab";
import SupportPanel from "./partial/SupportPanel";
import JoinUs from "./partial/JoinUs";
import Contributor from "./partial/Contributor";
import ContactUs from "../shared/ContactUs";
import Cursor from "../shared/Cursor";
import MobileCursor from "../shared/MobileCursor";
import Menu from "../shared/MobileHeader";

class Home extends Component {
  render() {
    window.scroll(0, 0);
    return (
      <div>
        <Menu />
        <Head />
        <Cursor />
        <MobileCursor />
        <Banner />
        <MBanner />
        <UpdateTab />
        <ProductPanel />
        <Outline />
        <SupportPanel />
        <DocumentTab />
        <JoinUs />
        <Contributor />
        <ContactUs />
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
