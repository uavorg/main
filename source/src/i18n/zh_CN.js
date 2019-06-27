const zh_CN = {
  home: "首页",
  product: "产品",
  download: "下载",
  document: "文档",
  top: "顶部",

  banner_1_title: "UAV.Monitor新能力开放：可动态切换的报警收敛模式",
  banner_1_word_1:
    "●  基于事件自动压制的收敛：默认收敛模式，无需任何配置，自动识别同一事件，在一定时间内只发生约定次数的报警",
  banner_1_word_2:
    "●  基于事件次数梯度的收敛：可自定义若干级次数梯度，自动识别同一事件，根据事件发生次数，每次梯度跃升发出报警",
  banner_1_word_3: "●  可随时切换收敛模式，配置即生效",
  banner_1_word_4: "●  细粒度配置支持：收敛模式可配置到单个报警表达式",
  banner_1_word_5:
    "●  自动优先级判断：同策略包含多个报警表达式，按梯度优先，以及最长梯度优先",

  banner_2_title: "UAV.APM新能力开放：深度线程分析",
  banner_2_word_1: "●  单次线程Dump文件深度分析：",
  banner_2_word_1_desc_1: "-  自动发现死锁，跟踪死锁关系",
  banner_2_word_1_desc_2: "-  基于锁依赖的等待链路查询，发现系统阻塞点",
  banner_2_word_2:
    "●  多次线程Dump文件关联分析：基于时序的线程状态变迁，线程等待链路时序根因关系",
  banner_2_word_3: "●  线程Dump可视化展示：",
  banner_2_word_3_desc_1: "-  单次线程Dump可视化（锁依赖）",
  banner_2_word_3_desc_2: "-  多次线程Dump可视化（含时序状态，锁依赖）",

  banner_3_title: "UAV.APM新能力开放：调用链与日志关联的探索式查询",
  banner_3_word_1:
    "●  调用链为入口模式：从应用的调用链直观追踪每个环节的应用日志",
  banner_3_word_2:
    "●  日志为入口模式：从应用日志搜索，直观关联每条日志对应的调用链",
  banner_3_word_3:
    "●  切换模式：调用链和日志两种模式可随时互相切换，实现闭环探索式查询",

  banner_4_title:
    "UAV.Monitor新能力开放：多模式预警支持（流式预警、统计预警、混合预警)",
  banner_4_word_1: "●  流式预警：基于流式窗口时序数据的预警",
  banner_4_word_2: "●  统计预警：基于时序指标历史统计值对标的预警",
  banner_4_word_3:
    "●  混合预警告：允许双模式（流式预警，统计预警）共存的预警策略定义",

  banner_5_title:
    "UAV.Monitor：是业务，应用/服务，基础三维一体的监控平台，同时支持单体架构，SOA架构，微服务架构。",
  banner_5_title_2:
    "只需部署1个Agent即可采集全维度数据，支持物理机，虚拟机，Docker。",
  banner_5_word_1:
    "●  基础监控：操作系统以及进程级性能指标（CPU，内存，连接数，网络流量，磁盘IO等）",
  banner_5_word_2:
    "●  应用/服务性能监控：Java应用无需修改代码，即可采集应用/服务实例，应用服务器，JVM，客户端(http/dubbo/SQL/MQ/redis/mongoDB等)，数据库连接池等的性能指标",
  banner_5_word_3: "●  日志监控：系统/应用日志自动归集和搜索，支持动态开关策略",
  banner_5_word_4: "●  业务监控：支持自定义指标归集",
  banner_5_word_5:
    "●  多技术栈支持：Java系列Tomcat/Jetty/SpringBoot/JSE/MSCP,其他JVM语言Scala，Groovy等",
  banner_5_word_6:
    "●  全维报警：支持基础/应用/服务的性能指标，业务指标以及日志报警，报警条件支持多维表达式",

  banner_6_title:
    "UAV.APM：是UAV.Monitor的增强扩展，实现对应用/服务性能全方位的管理。",
  banner_6_title_2: "支持主流技术栈，与UAV.Monitor相同。",
  banner_6_word_1: "●  代码无侵入性，JVM语言支持Java，Scala，Groovy等。",
  banner_6_word_2:
    "●  应用/服务画像：自动化提取应用的技术栈和实例元数据，包括服务接口，客户端使用，实例URL，日志配置，类库等",
  banner_6_word_3:
    "●  服务图谱：自动绘制应用/服务之间的调用关联关系的可视化展示，支持代理穿透。描述服务与服务的静态拓扑和运行时特性的图谱",
  banner_6_word_4:
    "●  全量无侵入式调用链跟踪：支持主流技术栈服务，客户端，方法级的全量/采样跟踪；两种粒度动态调节：轻调用链，全量采集近乎无损；重调用链，包含所有请求/响应，方法入参/出参的内容",
  banner_6_word_5:
    "●  一键式线程分析：一键收集目标JVM的线程Dump和线程性能数据，支持代码关联",
  banner_6_word_6:
    "●  浏览器访问跟踪：自动追踪来自浏览器的访问来源，访问目标，访问时间",
  banner_6_word_7:
    "●  多维可视化看板：同视图多维度（业务指标，性能指标，日志，调用链等）数据对标分析",
  banner_6_word_8: "●  历史追踪：任意时间范围的不同指标组合的性能指标展示",

  banner_7_title:
    "UAV.MSCP（Micro-  Service Computing Platform）提供了一套基于微服务架构的计算平台。UAV系列软件包括任务机器人，全维监控，APM，服务治理等都是基于MSCP构建的。它使用Java语言，并提供了一系列特性来简化计算任务的开发工作。",
  banner_7_word_1:
    "●  开发框架/组件支持：Http/RPC通信，定时调度任务，并行处理，异步化响应，资源限制器，配置管理中心，共享资源管理，流程处理等",
  banner_7_word_2:
    "●  功能即服务：每个功能被定义为Feature，每个进程被定义为计算节点，计算节点支持多Feature运行，支持Feature热启停，热配置更新，Class/配置隔离，资源限制",
  banner_7_word_3:
    "●  服务化支持：服务注册与发现，负载均衡，自动切换/重试，熔断隔离",
  banner_7_word_4:
    "●  组件图谱：可自动生成组件图谱，清晰了解代码静态结构与动态关联关系",
  banner_7_word_5:
    "●  动态服务编排：根据Feature语义自动协调具备符合业务能力的节点参与任务执行",
  banner_7_word_6:
    "●  动态计算编排：根据计算资源自动协调合适的节点参与任务执行",

  banner_8_title:
    "UAV.ServiceGovern：是UAV.Monitor的增强扩展，同构/异构技术栈实现微服务架构的支持，特别是连接异构服务系统的利器。支持主流技术栈，与UAV.Monitor相同。UAV.ServiceGovern和UAV.Monitor，UAV.APM实现天然的一站式微服务治理/运维方案。",
  banner_8_word_1:
    "●  服务生命周期管理：自动化实现同构或异构服务的注册，下线，集群管理等",
  banner_8_word_2:
    "●  统一服务发现机制：对同构/异构服务统一发现机制，支持负载均衡，自动切换，自动重试，自动隔离",
  banner_8_word_3:
    "●  服务授权管理：实现外部对服务集群，服务集群之间的权限与安全管控",
  banner_8_word_4:
    "●  服务降级保护：对同构/异构服务实现统一的降级保护策略，支持客户端降级",

  updateTab_update_title: "UAVStack周更新",
  updateTab_fix_title: "FIX同步:",

  productPanel_title: "产品与服务",
  productPanel_tip_1:
    "UAVStack是一套智能化服务技术栈，是研发运维一体化的解决方案。",
  productPanel_tip_2:
    " UAV是无人机的缩写，寓意无人机翱翔蓝天，智能透明地完成任务。",
  productPanel_tip_3:
    "它包括任务机器人（HIT），全维监控（UAV.Monitor），应用性能管理（UAV.APM），容器化支持（UAV.Container） 服务治理（UAV.ServiceGovern），微服务计算（UAV.MSCP），用户体验管理（UAV.UEM）等。",

  productTab_details: "查看详情",
  productTab_none: "敬请期待",
  productTab_1_title: "（微）服务监控（Monitor）",
  productTab_1_tip_1: "●  以无侵入方式实现对Java程序的画像与监控",
  productTab_1_tip_2: "●  以心跳数据实现对应用容器的画像与监控",
  productTab_1_tip_3: "●  提供预警策略实现自动报警",
  productTab_1_tip_4: "●  提供应用/服务流图谱",

  productTab_2_title: "应用性能管理（APM）",
  productTab_2_tip_1: "●  提供应用性能诊断工具箱",
  productTab_2_tip_2: "●  提供调用链支持",

  productTab_3_title: "(微）服务治理（ServiceGovern）",
  productTab_3_tip_1: "●  以服务画像实现服务注册",
  productTab_3_tip_2: "●  提供服务发现接口",
  productTab_3_tip_3: "●  无侵入实现服务调用干预",
  productTab_3_tip_4: "●  提供服务授权访问机制",
  productTab_3_tip_5: "●  提供服务降级与保护机制",

  productTab_4_title: "客户端体验（UEM）",
  productTab_4_tip_1: "●  追踪Web浏览器端用户访问状况",
  productTab_4_tip_2: "●  端到端跟踪联通",

  productTab_5_title: "容器生态支持（Container）",
  productTab_5_tip_1: "●  对容器生态的支持，包括Monitor+APM所有能力",
  productTab_5_tip_2: "●  为容器生态提供智能容量规划与决策支持",

  productTab_6_title: "任务机器人平台（HIT）",
  productTab_6_tip_1: "●  AI+ChatOps",
  productTab_6_tip_2: "●  智能报警",
  productTab_6_tip_3: "●  智能巡检",

  productTab_7_title: "微服务计算平台（MSCP）",
  productTab_7_tip_1:
    "●  提供微服务计算的编程框架和运行时，框架是以抽象组件为基础；提供通信，工作流，定时任务，处理模型（多线程，异步等），IO处理等组件",
  productTab_7_tip_2:
    "●  提供以组件编程构建业务功能的能力，即Feature；提供单binary多配置实现差异化运行的部署方式，即Profile",
  productTab_7_tip_3:
    "●  基于共识数据，实现多个运行实例的协作能力，即动态计算编排；以动态计算编排为基础，实现跨实例多个Feature的协作能力，即动态服务编排",

  outline_title: "全维度监控+应用运维解决方案",

  supportPanel_title: "JAVA探针支持",

  supportTab_1_title: "JDK版本",
  supportTab_1_tip_1: "JDK6",
  supportTab_1_tip_2: "JDK7",
  supportTab_1_tip_3: "JDK8",
  supportTab_1_tip_4: "JDK9",

  supportTab_2_title: "应用框架",
  supportTab_2_tip_1: "Dubbo | DubboX | CXF",
  supportTab_2_tip_2: "AXIS2 | XFIRE | SUN JAXWS",
  supportTab_2_tip_3: "Jersey | SpringMVC ",
  supportTab_2_tip_4: "SpringRESTService | Wink  ",
  supportTab_2_tip_5: "Servlet（2.5/3.x）| Struts 2.x",
  supportTab_2_tip_6: "Apache HttpClient（同步/异步）",
  supportTab_2_tip_7: "Web Filter（2.5/3.x）",
  supportTab_2_tip_8: "Log4j | Log4j2 | LogBack ",
  supportTab_2_tip_9: "Java Logging",

  supportTab_3_title: "应用服务器",
  supportTab_3_tip_1: "Tomcat（6+）",
  supportTab_3_tip_2: "SpringBoot",
  supportTab_3_tip_3: "Jetty（7+）",
  supportTab_3_tip_4: "MSCP",
  supportTab_3_tip_5: "任意JSE",

  supportTab_4_title: "数据源",
  supportTab_4_tip_1: "MySQL",
  supportTab_4_tip_2: "Oracle等JDBC数据源",
  supportTab_4_tip_3: "MongoDB（MongoClient）",
  supportTab_4_tip_4: "Redis（JEDIS，LETTUCE，ARedis）",
  supportTab_4_tip_5: " ESClient（Transport，RESTful ）",

  supportTab_5_title: "消息中间件",
  supportTab_5_tip_1: "RabbitMQ（消费/生产）",
  supportTab_5_tip_2: "RocketMQ（消费/生产）",
  supportTab_5_tip_3: "Kafka（消费/生产）",

  supportTab_6_title: "数据库连接池",
  supportTab_6_tip_1: "DBCP/2 | c3p0",
  supportTab_6_tip_2: "Druid | Proxool",
  supportTab_6_tip_3: "Hikari | MyBatis CP",
  supportTab_6_tip_4: "Tomcat DBCP/2 | Tomcat JDBC Pool",

  documentTab_more: "更多",
  documentTab_more2: "查看更多",

  documentTab_download_title: "开发演示版",
  documentTab_download_title2: "UAV.Monitor+APM",

  documentTab_download_line_1_title: "中间件增强框架（MOF探针）",
  documentTab_download_line_1_tip: "提供应用画像，性能数据收集等功能",
  documentTab_download_line_1_link: "https://pan.baidu.com/s/1cg4J0q",

  documentTab_download_line_2_title: "监控代理程序（MA）",
  documentTab_download_line_2_tip:
    "提供数据采集功能和节点容器控制功能的JSE应用。",
  documentTab_download_line_2_link: "https://pan.baidu.com/s/1ge5MJ9h",

  documentTab_download_line_3_title: "健康管理服务（HM）",
  documentTab_download_line_3_tip:
    "提供数据处理程序的JSE应用：数据分析、存储、查询等功能。",
  documentTab_download_line_3_link: "https://pan.baidu.com/s/1i4HnV85",

  documentTab_download_line_4_title: "AppHub（war包）",
  documentTab_download_line_4_tip: "提供数据展示及控制管理功能的JEE应用",
  documentTab_download_line_4_link: "https://pan.baidu.com/s/1dFxtDZV",

  documentTab_help_title: "帮助文档",

  documentTab_paper_title: "相关文献",

  JoinUs_title: "加入项目",
  JoinUS_tip:
    "UAVStack社区正式开放IDE以及IDE搭建手册，陆续还将开放更多开发文档，欢迎大家加入社区贡献力量！",
  JoinUs_manual: "UAVStackIDE搭建手册",
  JoinUs_manual_link: "https://pan.baidu.com/s/1o81LNS2",
  JoinUs_download: "UAVStackIDE下载",
  JoinUs_download_link: "https://pan.baidu.com/s/1o81LNS2",

  contributor_title: "开源贡献者",

  contributorTab_1_name: "张真",
  contributorTab_1_tip_1:
    "Dev.Founder of UAVStack, International Patent Inventor & Opensource Contributor",
  contributorTab_1_tip_2:
    "Focus on AIOps, APM, Micro-Service, Service Governance and Cloud Middleware.",

  contributorTab_7_name: "谢知求",
  contributorTab_7_tip_1: "Architect, PM  & Product Service Owner",

  contributorTab_2_name: "杨宏壮",
  contributorTab_2_tip_1: "UAV.Monitor/APM Domain Senior Contributor",
  contributorTab_2_tip_2: "关注系统性能、高并发、高可用",
  contributorTab_2_tip_3: "座右铭：知其然更要知其所以然 ",

  contributorTab_3_name: "肖龙",
  contributorTab_3_tip_1: "UAV.Container Domain Senior Contributor",

  contributorTab_4_name: "李崇",
  contributorTab_4_tip_1: "UAV.ServiceGovern Domain Senior Contributor",
  contributorTab_4_tip_2: "座右铭：做一个有追求的工程师",

  contributorTab_5_name: "刘波安野",
  contributorTab_5_tip_1: "Staff Contributor",
  contributorTab_5_tip_2: "全栈工程师",

  contributorTab_6_name: "周新宇",
  contributorTab_6_tip_1: "Staff Contributor & Community Ops Owner",

  contactUs_title: "联系我们",
  contactUs_tip_1: "扫二维码进入UAVStack官方公众号",
  contactUs_tip_2: "获取更多UAVStack的相关信息",
  contactUs_tip_3: "扫一扫添加小助手",
  contactUs_tip_4: "邀您加入UAVStack官方用户群",
  contactUs_mail: "发送邮件",

  cursor_qrcode_title: "扫码关注",
  cursor_qrcode_title2: "扫一扫关注",
  cursor_top:"返回顶部",

  cursor_qrcode_tip1:"扫描二维码进UAVStack官方用户群",
  cursor_qrcode_tip2:"注明\"UAVStack进群\"",

  popup_title: "开发演示",
  popup_title2:
    "AllInOne安装是用于开发环境以及演示的安装包，开箱即用，一键启动。",
  popup_tip: "注：",
  popup_tip2:
    "开发演示版的健康管理服务(HM)仅适合开发环境，演示环境，小规模测试环境。",
  popup_tip3: "生产环境推荐使用",
  popup_tip_link: "分布式部署",
  popup_link:
    "https://uavorg.github.io/documents/uavdoc_deploydocs/healmanagerInstall/healmanagerInstall/microservice.html",

  popup_windows: "Windows 64位",
  popup_windows_link: "https://pan.baidu.com/s/1jIF0wNs",
  popup_mac: "Mac",
  popup_mac_link: "https://pan.baidu.com/s/1mhCykp6#list/path=%2F",
  popup_linux: "Linux (CentOS)",
  popup_linux_link: "https://pan.baidu.com/s/1nvj6jW1#list/path=%2F",

  product_banner_tip:
    "UAV.Monitor+APM是业务，应用/服务，基础三维一体的监控与管理平台，只需部署1个Agent即可采集全维度数据，并实现对应用/服务性能全方位的管理。同时支持单体架构，SOA架构，微服务架构。",
  product_banner_use: "立即使用",

  product_introductPanel_title: "功能介绍",

  product_introductTab_1_title: "基础环境监控",
  product_introductTab_1_tip:
    "操作系统以及进程级性能指标（CPU，内存，连接数，网络流量，磁盘IO等）",

  product_introductTab_2_title: "应用/服务监控",
  product_introductTab_2_tip:
    " Java应用无需修改代码，即可采集应用/服务实例、应用服务器、JVM、客户端(http/dubbo/SQL/MQ/redis/mongoDB等)、数据库连接池等的性能指标。",

  product_introductTab_3_title: "应用/服务画像",
  product_introductTab_3_tip:
    "自动化提取应用的技术栈和实例元数据，包括服务接口，客户端使用，实例URL，日志配置，类库等。",

  product_introductTab_4_title: "应用/服务关联",
  product_introductTab_4_tip:
    "自动绘制应用/服务之间的调用关联关系的可视化展示，支持代理穿透。描述服务与服务的静态拓扑和运行时特性的图谱。",

  product_introductTab_5_title: "应用日志采集",
  product_introductTab_5_tip: "系统/应用日志自动归集和搜索，支持动态开关策略\n",

  product_introductTab_6_title: "全维预警",
  product_introductTab_6_tip:
    "支持基础/应用/服务的性能指标，业务指标以及日志报警",
  product_introductTab_6_tip_2: "报警条件支持多维表达式",

  product_introductTab_7_title: "调用链生成",
  product_introductTab_7_tip:
    "无需添加额外代码，自动生成调用链，支持主流技术栈服务，客户端，方法级的全量/采样跟踪",
  product_introductTab_7_tip_2:
    "两种粒度动态调节：轻调用链，全量采集近乎无损；重调用链，包含所有请求/响应，方法入参/出参的内容,支持调用链与日志关联，便捷查看相关日志",

  product_introductTab_8_title: "一键式线程分析",
  product_introductTab_8_tip:
    "一键收集目标JVM的线程Dump和线程性能数据,线程深度分析，线程竞态可视化与死锁检测",

  product_advangtage_title: "产品特色",
  product_advangtage_tip_1: "代码无侵入，全面支持java主流技术栈",
  product_advangtage_tip_2: "随时随地的运维体验",
  product_advangtage_tip_3: "一站式全维监控，全维关联。",
  product_advangtage_tip_4: "全自动服务画像，可视化服务间调用关联",
  product_advangtage_tip_5: "全维预警，所有指标均可配置预警",

  product_outline_title: "产品架构",
  product_help_title: "帮助文档",

  product_help_1_tip: "安装部署",
  product_help_1_link:
    "https://uavorg.github.io/documents/uavdoc_deploydocs/index.html",
  product_help_2_tip: "架构说明",
  product_help_2_link:
    "https://uavorg.github.io/documents/uavdoc_architecture/index.html",
  product_help_3_tip: "用户指南",
  product_help_3_link:
    "https://uavorg.github.io/documents/uavdoc_useroperation/index.html",

  document_head: "文档资料",
  document_1_title: "JAVA服务治理实践之无侵入的应用服务监控",
  document_1_link:
    "http://mp.weixin.qq.com/s?__biz=MzI5NzE2NTE4Nw==&mid=2650278060&idx=2&sn=79ea1b9830df9d0bb713d9d3adf06b60&mpshare=1&scene=1&srcid=1010niyXsvUnT26D3ziFIsZQ#rd",

  document_2_title: "微服务治理实战：服务流的自动化构建与应用",
  document_2_link:
    "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650759250&idx=2&sn=4599d2938cd6795c5f79f391e3ba7b15&chksm=f3f9d5c7c48e5cd17e697c04446e39c9284357a12a2669780265af1a321e1cec0609b8691df5&mpshare=1&scene=1&srcid=0116NrH9XDgruRORvPBsUFeJ#rd",

  document_3_title: "微服务架构下，如何打造别具一格的服务治理体验？(上)",
  document_3_link:
    "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650757450&idx=1&sn=13a2bb60c41821a9f9d0ef7ef75f3720&chksm=f3f9ecdfc48e65c9535ecd601078a90b60481d4f22a79a4f0187cdaa0499fb3d6c7f3e68cb9e&mpshare=1&scene=1&srcid=1027vkuRK6yeafgKeHEATEq5#rd",

  document_4_title: "微服务架构下，如何打造别具一格的服务治理体验？(下)",
  document_4_link:
    "http://mp.weixin.qq.com/s?__biz=MzI4NTA1MDEwNg==&mid=2650758431&idx=2&sn=2f7e9877da720a5bee1d718bb0443436&chksm=f3f9e88ac48e619cf46edd9fbccedd00ea7f085fa49467401c6a86a06e58f3cb984d86422fb7&mpshare=1&scene=1&srcid=0908p8Wd2wGlrpihwF58lFXI#rd",
  document_5_title: "调用链与日志关联的探索式查询",
  document_5_link:
    "https://mp.weixin.qq.com/s?__biz=MzAwNTAyNDU2OA==&mid=2647992942&idx=1&sn=3026cebc5e04ec5d9d97345ac469ec45&chksm=83037439b474fd2f5e0e3f5de905d29f72342ff2866b15ebafcf8b0f0cf6a84062d755ff406c&mpshare=1&scene=1&srcid=1218dAbH9ikMRUsGkCgEPhzh#rd",

  document_6_title: "WOT2018议题分享：运维机器人之任务决策系统演进",
  document_6_link: "https://pan.baidu.com/s/1gSjJZIXswOPoeQzZ6cJT1g",

  document_7_title: "先悟透这三个理念，再来谈如何扩展你的架构",
  document_7_link:
    "http://mp.weixin.qq.com/s?__biz=MzI5NzE2NTE4Nw==&mid=2650278060&idx=4&sn=33956aee393137dc0c6e870610d0a9d5&mpshare=1&scene=1&srcid=1010ZVGISQYwg6phHFpEP86f#rd",

  download_head: "开发演示版",

  more: "查看更多",

  mbanner_1_title: "UAV.Monitor新能力：支持动态切换报警收敛模式",
  mbanner_1_word_1:
    "●  默认模式：自动识别同一事件，在一定时间内只发生约定次数的报警",
  mbanner_1_word_2: "●  自定义模式：根据同一事件发生次数，在出现梯度跃升时报警",
  mbanner_1_word_3:
    "●  两种模式可自由切换，即时生效；可细粒度配置至单个报警表达式",

  mbanner_2_title: "UAV.APM新能力：深度线程分析",
  mbanner_2_word_1: "●  单次线程Dump文件深度分析：自动发现死锁，跟踪死锁关系",
  mbanner_2_word_2: "●  基于锁依赖的等待链路查询，发现系统阻塞点",
  mbanner_2_word_3:
    "●  多次线程Dump文件关联分析：基于时序的线程状态变迁，查找线程等待链路时序根因关系线程Dump可视化",

  mbanner_3_title: "UAV.APM新能力：调用链与日志关联的探索式查询",
  mbanner_3_word_1:
    "●  调用链为入口模式：从应用的调用链直观追踪每个环节的应用日志",
  mbanner_3_word_2:
    "●  日志为入口模式：从应用日志搜索直观关联每条日志对应的调用链",
  mbanner_3_word_3:
    "●  切换模式：调用链和日志两种模式可随时互相切换，实现闭环探索式查询",

  mbanner_4_title: "UAV.Monitor新能力：多模式预警支持",
  mbanner_4_word_1: "●  流式预警：基于流式窗口时序数据的预警",
  mbanner_4_word_2: "●  统计预警：基于时序指标历史统计值对标的预警",
  mbanner_4_word_3: "●  混合预警告：允许流式预警与统计预警共存的预警策略定义",

  mbanner_5_title: "UAV.Monitor：业务、应用/服务、基础三维一体的监控平台",
  mbanner_5_word_1: "● 支持单体、SOA、微服务架构",
  mbanner_5_word_2: "● 只需部署1个Agent即可采集全维度数据",
  mbanner_5_word_3: "● 支持物理机、虚拟机、Docker",
  mbanner_5_word_4:
    "● 支持基础环境与应用/服务性能指标、业务自定义指标及日志监控及报警",
  mbanner_5_word_5: "● 	报警条件支持多维表达式",

  mbanner_6_title:
    "UAV.APM：UAV.Monitor的增强扩展，实现对应用/服务性能全方位的管理",
  mbanner_6_word_1: "● 支持应用/服务画像/自动绘制服务图谱",
  mbanner_6_word_2: "● 支持无侵入式调用链跟踪",
  mbanner_6_word_3: "● 一键收集目标JVM的线程Dump和线程性能数据",
  mbanner_6_word_4:
    "● 自动追踪来自浏览器的访问来源、目标、时间 ,支持同视图多维度数据对标分析",
  mbanner_6_word_5: "● 展示任意时间范围内不同指标组合的数据",

  mbanner_7_title: "UAV.MSCP：基于微服务架构的计算平台",
  mbanner_7_word_1:
    "●	使用Java语言提供了开发框架/组件支持、功能即服务、服务化支持、组件图谱、动态服务编排、动态计算编排等一系列特性来简化计算任务的开发工作",

  mbanner_8_title:
    "UAV.ServiceGovern：UAV.Monitor的增强扩展，同构/异构技术栈实现微服务架构的支持。",
  mbanner_8_word_1:
    "●	提供服务生命周期管理、统一服务发现机制、服务授权管及服务降级保护等能力，与UAV.Monitor、UAV.APM实现天然的一站式微服务治理/运维方案",
  msuggest_download: "注：建议PC端下载"
};

export default zh_CN;
