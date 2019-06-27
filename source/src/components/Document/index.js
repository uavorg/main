import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header1 from "../shared/Header1.js";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Document.css";
import { injectIntl, intlShape } from "react-intl";
import Cursor from "../shared/Cursor";
import MobileHeader from "../shared/MobileHeader";
import MobileSelector from "../shared/MobileSelector";
import MobileCursor from "../shared/MobileCursor";
import { connect } from "react-redux";

class Document extends Component {
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
    const { head, help, document } = {
      head: [
        formatMessage({ id: "documentTab_help_title" }),
        formatMessage({ id: "documentTab_paper_title" })
      ],
      help: [
        {
          title: formatMessage({ id: "product_help_1_tip" }),
          link: formatMessage({ id: "product_help_1_link" })
        },
        {
          title: formatMessage({ id: "product_help_2_tip" }),
          link: formatMessage({ id: "product_help_2_link" })
        },
        {
          title: formatMessage({ id: "product_help_3_tip" }),
          link: formatMessage({ id: "product_help_3_link" })
        }
      ],
      document: [
        {
          title: "初识UAVStack",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzUyNjk1NzU4OQ==&mid=2247483669&idx=1&sn=900e2f0d561c84c1d5f7a97755bd7110&chksm=fa07ac6fcd702579d21ad9ec6f296b19c53c6669a5ee616e886581410715e996adb1e4a94b84&mpshare=1&scene=1&srcid=1026PkGIBOGGTHT1H1nChsdG#rd"
        },
        {
          title: "JAVA服务治理实践之无侵入的应用服务监控",
          link:
            "http://mp.weixin.qq.com/s?__biz=MzI5NzE2NTE4Nw==&mid=2650278060&idx=2&sn=79ea1b9830df9d0bb713d9d3adf06b60&mpshare=1&scene=1&srcid=1010niyXsvUnT26D3ziFIsZQ#rd"
        },
        {
          title: "微服务治理实战：服务流的自动化构建与应用",
          link:
            "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650759250&idx=2&sn=4599d2938cd6795c5f79f391e3ba7b15&chksm=f3f9d5c7c48e5cd17e697c04446e39c9284357a12a2669780265af1a321e1cec0609b8691df5&mpshare=1&scene=1&srcid=0116NrH9XDgruRORvPBsUFeJ#rd"
        },
        {
          title: "微服务架构下，如何打造别具一格的服务治理体验？(上)",
          link:
            "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650757450&idx=1&sn=13a2bb60c41821a9f9d0ef7ef75f3720&chksm=f3f9ecdfc48e65c9535ecd601078a90b60481d4f22a79a4f0187cdaa0499fb3d6c7f3e68cb9e&mpshare=1&scene=1&srcid=1027vkuRK6yeafgKeHEATEq5#rd"
        },
        {
          title: "微服务架构下，如何打造别具一格的服务治理体验？(下)",
          link:
            "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650758431&idx=2&sn=2f7e9877da720a5bee1d718bb0443436&chksm=f3f9e88ac48e619cf46edd9fbccedd00ea7f085fa49467401c6a86a06e58f3cb984d86422fb7&mpshare=1&scene=1&srcid=0908p8Wd2wGlrpihwF58lFXI#rd"
        },
        {
          title: "调用链与日志关联的探索式查询",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzAwNTAyNDU2OA==&mid=2647992942&idx=1&sn=3026cebc5e04ec5d9d97345ac469ec45&chksm=83037439b474fd2f5e0e3f5de905d29f72342ff2866b15ebafcf8b0f0cf6a84062d755ff406c&mpshare=1&scene=1&srcid=1218dAbH9ikMRUsGkCgEPhzh#rd"
        },

        {
          title: "基于统计的预警：同环比预警实现深度剖析",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzAwNTAyNDU2OA==&mid=2647992937&idx=1&sn=3a63bff00b0ec443e0ce8bb31189dd29&chksm=8303743eb474fd28e7800665b46843c12b0e4097567d10422c2da13a3b31fc981b657bcd53e2&mpshare=1&scene=1&srcid=1212QtHzvVQiIjYwT58D8tsh#rd"
        },
        {
          title: "WOT2018议题分享：运维机器人之任务决策系统演进",
          link: "https://pan.baidu.com/s/1gSjJZIXswOPoeQzZ6cJT1g"
        },
        {
          title: "Container内部进程监控",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzAwNTAyNDU2OA==&mid=2647993111&idx=3&sn=9f73fb4a8cb597818abeae8f54c74e31&chksm=83037540b474fc56eee0265f0c0b40566fdaedbe52282fee68b86376b75453ee5cfe4904455f&mpshare=1&scene=1&srcid=1024tD7YedprOzTJtE72MQU8#rd"
        },
        {
          title: "调用链系列一：解读UAVStack中的调用链技术",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzUyNjk1NzU4OQ==&mid=2247483717&idx=1&sn=f892bd8d42891e4ea6ea963ad602e160&chksm=fa07ac3fcd7025298e538a51911fe19a03272aef9fe7b80f794a4841274fac1ade9a5421cf36&scene=0#rd"
        },
        {
          title: "调用链系列二：解读UAVStack中的调用链技术",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzUyNjk1NzU4OQ==&mid=2247483733&idx=1&sn=f9bae9629af8f841a9166cba7be3f384&chksm=fa07ac2fcd702539b6ca973e1cea41f0f06e312915a83b2a6270804ed180bfeb1e6840a64435&scene=0#rd"
        },
        {
          title: "调用链系列三：解读UAVStack中的调用链技术",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzUyNjk1NzU4OQ==&mid=2247483733&idx=2&sn=a2357a6c0b40ad9e171cc797e4fba187&chksm=fa07ac2fcd702539a0a0ce0e75d827c43ea441691b74157bf6a3f80f021b3e7783735a4d5795&scene=0#rd"
        },
        {
          title: "UAV MOF工作原理之Agent注入机制原理",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzUyNjk1NzU4OQ==&mid=2247483740&idx=1&sn=893f71c3701ddca3cea5b678d6a9401c&chksm=fa07ac26cd702530d41df1830a4d4453ee9ccfd0b1b187a692f8e129f51fb75b25742a86359d&mpshare=1&scene=1&srcid=1106Pv8IzuXHVZQCqhXuiHzV#rd"
        },
        {
          title: "洞察架构细节：如何设计AIOps平台架构",
          link: "https://pan.baidu.com/s/1PoqaUfepBfDMJreOSWk9iw"
        },
        {
          title: "CNUTcon全球运维技术大会分享视频：AIOps的核心技术之任务机器人",
          link: "http://pan.baidu.com/s/1hrLWsvU"
        },
        {
          title: "CNUTcon全球运维技术大会ppt：AIOps的核心技术之任务机器人",
          link: "http://pan.baidu.com/s/1bpD9nQn"
        },
        {
          title: "到底该如何理解AIOps？又如何落地AIOps？",
          link:
            "https://mp.weixin.qq.com/s?__biz=MzI4MTY5NTk4Ng==&mid=2247489330&amp;idx=1&amp;sn=05b1932a110ec835a0c52434bec221e8&source=41#wechat_redirect"
        },
        {
          title: "先悟透这三个理念，再来谈如何扩展你的架构",
          link:
            "http://mp.weixin.qq.com/s?__biz=MzI5NzE2NTE4Nw==&mid=2650278060&idx=4&sn=33956aee393137dc0c6e870610d0a9d5&mpshare=1&scene=1&srcid=1010ZVGISQYwg6phHFpEP86f#rd"
        }
      ]
    };
    var display = isMobile ? "none" : "block";
    return (
      <div className={css.container}>
        <Helmet>
          <title>
            {formatMessage({
              id: "document"
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
        <div
          className={css.container2}
          style={{ display: this.state.count === 0 ? "block" : display }}
        >
          <h1 className={css.head}>{head[0]}</h1>
          {help.map((item, key) => (
            <a href={item.link} target="_blank" key={key} className={css.tab}>
              {item.title}
            </a>
          ))}
        </div>
        <div
          className={css.container2}
          style={{ display: this.state.count === 1 ? "block" : display }}
        >
          <h1 className={css.head}>{head[1]}</h1>
          <div className={css.body}>
            {document.map((item, key) => (
              <a
                key={key}
                href={item.link}
                data={item}
                className={css.line}
                target="_blank"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <Cursor/>
        <ContactUs />
        <MobileCursor />
      </div>
    );
  }
}

Document.propTypes = {
  intl: intlShape.isRequired
};
function mapStateToProps(state) {
  return {
    isMobile: state.globalReducer.get("isMobile")
  };
}

export default injectIntl(connect(mapStateToProps)(Document));
