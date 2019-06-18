import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
import Menu from "../shared/MobileHeader";
import "antd/dist/antd.css";

class Home extends Component {
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <meta name="Keywords" content="UAVStack,AIOPs,任务机器人，全维监控，应用性能管理，容器） 服务治理，微服务，用户体验。"/>
          <meta name="Description" content="UAVStack是一套智能化服务技术栈，是研发运维一体化的解决方案。UAV是无人机的缩写，寓意无人机翱翔蓝天，智能透明地完成任务。它包括任务机器人（HIT），全维监控（UAV.Monitor），应用性能管理（UAV.APM），容器化支持（UAV.Container） 服务治理（UAV.ServiceGovern），微服务计算（UAV.MSCP），用户体验管理（UAV.UEM）等。"/>
        </Helmet>
        <Menu />
        <Head />
        <Cursor />
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
