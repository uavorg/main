import React, { Component } from "react";
import css from "./assets/ProductPanel.css";
import ProductTab from "./partial/ProductTab";
import uem from "./assets/UEM.png";
import container from "./assets/Container.png";
import apm from "./assets/APM.png";
import hit from "./assets/HIT.png";
import monitor from "./assets/Monitor.png";
import mscp from "./assets/MSCP.png";
import servicegovern from "./assets/ServiceGovern.png";
import { injectIntl } from "react-intl";

class ProductPanel extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { title, data } = {
      title: {
        title: formatMessage({ id: "productPanel_title" }),
        tips: [
          formatMessage({ id: "productPanel_tip_1" }),
          formatMessage({ id: "productPanel_tip_2" })
        ],
        tip: formatMessage({ id: "productPanel_tip_3" })
      },
      data: [
        {
          title: formatMessage({ id: "productTab_1_title" }),
          tips: [
            formatMessage({ id: "productTab_1_tip_1" }),
            formatMessage({ id: "productTab_1_tip_2" }),
            formatMessage({ id: "productTab_1_tip_3" }),
            formatMessage({ id: "productTab_1_tip_4" })
          ],
          bg: monitor,
          bgsize: 90,
          site: "/product",
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_2_title" }),
          tips: [
            formatMessage({ id: "productTab_2_tip_1" }),
            formatMessage({ id: "productTab_2_tip_2" })
          ],
          bg: apm,
          bgsize: 90,
          width: 350,
          site: "/product"
        },
        {
          title: formatMessage({ id: "productTab_3_title" }),
          tips: [
            formatMessage({ id: "productTab_3_tip_1" }),
            formatMessage({ id: "productTab_3_tip_2" }),
            formatMessage({ id: "productTab_3_tip_3" }),
            formatMessage({ id: "productTab_3_tip_4" }),
            formatMessage({ id: "productTab_3_tip_5" })
          ],
          bg: servicegovern,
          bgsize: 90,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_4_title" }),
          tips: [
            formatMessage({ id: "productTab_4_tip_1" }),
            formatMessage({ id: "productTab_4_tip_2" })
          ],
          bg: uem,
          bgsize: 130,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_5_title" }),
          tips: [
            formatMessage({ id: "productTab_5_tip_1" }),
            formatMessage({ id: "productTab_5_tip_2" })
          ],
          bg: container,
          bgsize: 90,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_6_title" }),
          tips: [
            formatMessage({ id: "productTab_6_tip_1" }),
            formatMessage({ id: "productTab_6_tip_2" }),
            formatMessage({ id: "productTab_6_tip_3" })
          ],
          bg: hit,
          bgsize: 90,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_7_title" }),
          tips: [
            formatMessage({ id: "productTab_7_tip_1" }),
            formatMessage({ id: "productTab_7_tip_2" }),
            formatMessage({ id: "productTab_7_tip_3" })
          ],
          site: "default",
          bg: mscp,
          bgsize: 90,
          width: 1110
        }
      ]
    };
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title.title}</div>
          <div className={css.line} />
          {title.tips.map((item, key) => (
            <div key={key} className={css.tip}>
              {item}
            </div>
          ))}
          <div className={css.tip2}>{title.tip}</div>
          {data.map((item, key) => (
            <ProductTab key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default injectIntl(ProductPanel);
