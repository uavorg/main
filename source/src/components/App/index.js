import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Download from "../Download";
import Document from "../Document";
import NoMatch from "../NoMatch";
import Home from "../Home";
import Product from "../Product";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>
            UAVStack:智能运维解决方案。
          </title>
          <meta name="Keywords" content="UAVStack,AIOPs,任务机器人，全维监控，应用性能管理，容器） 服务治理，微服务，用户体验。"/>
          <meta name="Description" content="UAVStack是一套智能化服务技术栈，是研发运维一体化的解决方案。UAV是无人机的缩写，寓意无人机翱翔蓝天，智能透明地完成任务。它包括任务机器人（HIT），全维监控（UAV.Monitor），应用性能管理（UAV.APM），容器化支持（UAV.Container） 服务治理（UAV.ServiceGovern），微服务计算（UAV.MSCP），用户体验管理（UAV.UEM）等。"/>
        </Helmet>
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/document" component={Document} />
          <Route path="/download" component={Download} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
