const en_US = {
  home: "Home",
  product: "Products",
  download: "Download",
  document: "Documentation",
  top: "Top",

  banner_1_title:
    "UAV.Monitor Update: Support dynamic switch of alarm convergence modes",
  banner_1_word_1:
    "●  Convergence based on event automatic suppression: Default mode that identifies the same event automatically and sends a preset amount of alarms within a specified time range",
  banner_1_word_2:
    "●  Convergence based on event frequency gradient: Customized mode that supports to set multiple frequency gradients, identifies the same event and sends alarms for each gradient escalation",
  banner_1_word_3: "●  Support instant switch of convergence modes",
  banner_1_word_4:
    "●  Support fine granurality configuration of single alarm expressions",
  banner_1_word_5:
    "●  Automatic priority decision: The priorities of alarm expressions in one rule are decided by the gradient",

  banner_2_title: "UAV.APM Update: Deep thread dump analysis",
  banner_2_word_1: "●  Deep analysis of single-thread dump:",
  banner_2_word_1_desc_1:
    "-  Detect dead locks automatically and track the causes",
  banner_2_word_1_desc_2:
    "-  Spot chokepoints in the system by querying the lock-dependent waiting link",
  banner_2_word_2:
    "●  Association analysis of multi-thread dump: Analyze thread status changes based on time series and time series causality of the thread waiting link",
  banner_2_word_3: "●  Thread dump visualization:",
  banner_2_word_3_desc_1:
    "-  Single-thread dump visualization(lock dependence)",
  banner_2_word_3_desc_2:
    "-  Multi-thread dump visualization(lock dependence with time series status)",

  banner_3_title:
    "UAV.APM Update: Exploratory query based on the correlation of logs and invocation chains",
  banner_3_word_1:
    "●  Query beginning with invocation chains: Trace application logs of each link",
  banner_3_word_2:
    "●  Query beginning with logs: Correlate the invocation chains corresponding to each log",
  banner_3_word_3:
    "●  Query mode switch: Free switch between two query modes for closed-loop exploratory query",

  banner_4_title:
    "UAV.Monitor Update: Support stream alarm, statistical alarm and hybrid alarms",
  banner_4_word_1: "●  Stream alarm: Alarms based on stream time series data",
  banner_4_word_2:
    "●  Statistical alarm: Alarms with history statistics of time series metrics as benchmarks",
  banner_4_word_3:
    "●  Hybrid alarms: Support co-existence of stream alarms and statistical alarms in alarm rules",

  banner_5_title:
    "UAV.Monitor: An integrated platform that monitors businesses, applications / services and runtime environment and adapts to monolithic, SOA and micro-service architectures.",
  banner_5_title_2:
    " UAV.Monitor collects all metrics after the agent is deployed in physical or virtual machines or Docker.",
  banner_5_word_1:
    "●  Runtime environment monitoring: Collect performance metrics of the operating system and processes, including CPU, memory, connection count, network traffic and disk IO",
  banner_5_word_2:
    "●  Application and service performance monitoring: Collect performance metrics of application and service instances, application servers, JVM and clients without rewriting the codes of Java applications",
  banner_5_word_3:
    "●  Log monitoring: Collect and query logs of systems and applications",
  banner_5_word_4:
    "●  Business monitoring: Support customized metric collection",
  banner_5_word_5:
    "●  Multi-stack support: Support Tomcat / Jetty / SpringBoot / JSE / MSCP / Scala / Groovy",
  banner_5_word_6:
    "●  Full-dimensional alarm: Support alarms for performance metric and business metrics and logs of the runtime environment, applications and services with hybrid alarm expressions",

  banner_6_title:
    "UAV.APM: Enhancement of UAV.Monitor that manages Application & Service performance.",
  banner_6_title_2:
    "UAV.APM supports the same technology stacks as UAV.Monitor.",
  banner_6_word_1:
    "●  No invasion to codes with Java, Scala and Groovy support",
  banner_6_word_2:
    "●  Application and service profiling: Collect technology stacks of applications and metadata of instances, including service interfaces, clients, instance URLs, log configuration and class libraries, etc.",
  banner_6_word_3:
    "●  Service graph: Visualize call relations among applications and services, support proxy penetration, and depict the static typology among services and runtime properties",
  banner_6_word_4:
    "●  Non-invasive whole invocation chain tracing: Support whole or partial tracing of services, clients and methods in main technology stacks and dynamic switch between light invocation chains and heavy invocation chains",
  banner_6_word_5:
    "●  One-click thread dump analysis: Collect thread dump and thread performance data of targeted JVM and support code correlation",
  banner_6_word_6:
    "●  Browser access tracing: Trace the referer, target and time of browser access",
  banner_6_word_7:
    "●  Multi-dimensional dashboard: Analyze a dashboard from multiple dimensions, such as business metrics, performance metrics and invocation chains",
  banner_6_word_8:
    "●  Record tracing: Support to trace performance metrics in different combinations within any time range",

  banner_7_title:
    "UAV.MSCP: A micro-service architecture computing platform that provides a series of features to simplify the development of computing tasks.",
  banner_7_word_1:
    "●  Development framework and component support: Support Http / RPC communication, timed scheduling tasks, concurrent processing and asynchronous response, etc.",
  banner_7_word_2:
    "●  Feature as a Service: Each process is defined as a computing node that supports runtime enabling / disabling of features, runtime configuration update, class / configuration isolation and resource limitation",
  banner_7_word_3:
    "●  Service support: Support service registration and discovery, load balancing, automatic switch / retry and fuse isolation",
  banner_7_word_4:
    "●  Component graph: Generate component graph automatically to present the static structure and dynamic correlation among codes",
  banner_7_word_5:
    "●  Dynamic service orchestration: Assign applicable nodes to perform tasks based on the semantics of features automatically",
  banner_7_word_6:
    "●  Dynamic computing orchestration: Assign applicable nodes to perform tasks based on the computing resources automatically",

  banner_8_title:
    "UAV.ServiceGovern: Enhancement of UAV.Monitor that supports isomorphic and non-isomorphic technology stacks with micro-service architecture. It constitutes a one-stop micro-service governance / operation & maintenance solution together with UAV.Monitor and UAV.APM.",
  banner_8_word_1:
    "●  Service life cycle management: Support automatic registration, cancel and cluster management of isomorphic and non-isomorphic services",
  banner_8_word_2:
    "●  Unified isomorphic and non-isomorphic service discovery mechanism: Support load balancing, automatic switch, automatic switch and automatic isolation",
  banner_8_word_3:
    "●  Service authorization management: Manage access to and security of service clusters",
  banner_8_word_4:
    "●  Service degradation protection: Support unified degradation protection strategies for isomorphic and non-isomorphic services and client degradation",

  updateTab_update_title: "UAVStack周更新",
  updateTab_fix_title: "FIX同步:",

  productPanel_title: "Products & Solutions",
  productPanel_tip_1:
    "UAVStack as an intelligent service technology stack is missioned to work out integrated solutions to research, operation and maintenance.",
  productPanel_tip_2:
    " UAV, acronym of unmanned aerial vehicle, suggests that this stack finishes tasks in an intelligent and transparent manner like an unmanned aerial vehicle.",
  productPanel_tip_3:
    "UAVStack is composed of HIT, UAV.Monitor, UAV.APM, UAV.Container, UAV.ServiceGovern, UAV.MSCP and UAV.UEM.",

  productTab_details: "see details",
  productTab_none: "to be continued",

  productTab_1_title: "(Micro-) Service Monitor (Monitor)",
  productTab_1_tip_1: "●  Profile and monitor Java programs with no invasion",
  productTab_1_tip_2:
    "●  Profile and monitor application containers with heartbeat data",
  productTab_1_tip_3: "●  Support automatic alarm by configuring alarm rules",
  productTab_1_tip_4: "●  Generate Application & Service graph",

  productTab_2_title: "Application Performance Management (APM)",
  productTab_2_tip_1: "●  Offer application performance diagnosis toolkit",
  productTab_2_tip_2: "●  Support invocation chain tracing",

  productTab_3_title: "(Micro-) Service Governance (ServiceGovern)",
  productTab_3_tip_1: "●  Register services by service profiling",
  productTab_3_tip_2: "●  Provide service discovery interface",
  productTab_3_tip_3: "●  Support non-invasive service invocation interference",
  productTab_3_tip_4: "●  Offer authorized access mechanism to services",
  productTab_3_tip_5: "●  Support service degradation and protection mechanism",

  productTab_4_title: "User Experience Management (UEM)",
  productTab_4_tip_1: "●  Trace user accesses to Web browsers",
  productTab_4_tip_2: "●  End-to-end tracing connection",

  productTab_5_title: "Container",
  productTab_5_tip_1: "●  Support all Monitor+APM features",
  productTab_5_tip_2:
    "●  Provide intelligent capacity planning and decision-making support to containers",

  productTab_6_title: "Handson & Interaction & Think (HIT)",
  productTab_6_tip_1: "●  AI+ChatOps",
  productTab_6_tip_2: "●  Intelligent alarm",
  productTab_6_tip_3: "●  Intelligent detection",

  productTab_7_title: "Micro-Service Computing Platform (MSCP)",
  productTab_7_tip_1:
    "●  Provide abstract component-based programming framework, runtime properties as well as components such as communication, workflow, timed tasks, processing models (multi-thread and asynchronous) and IO processing",
  productTab_7_tip_2:
    "●  Provide the feature that builds business functions with component programming and the deployment that realizes differentiated operations with multi-configuration of single binary",
  productTab_7_tip_3:
    "●  Support dynamic computing orchestration based on shared data and cross-instance feature collaboration, i.e. dynamic service orchestration",

  outline_title: "UAV.Monitor+APM Solution",

  supportPanel_title: "Java Agent Supported",

  supportTab_1_title: "JDK Versions",
  supportTab_1_tip_1: "JDK6",
  supportTab_1_tip_2: "JDK7",
  supportTab_1_tip_3: "JDK8",
  supportTab_1_tip_4: "JDK9",

  supportTab_2_title: "Application Framework",
  supportTab_2_tip_1: "Dubbo | DubboX | CXF",
  supportTab_2_tip_2: "AXIS2 | XFIRE | SUN JAXWS",
  supportTab_2_tip_3: "Jersey | SpringMVC ",
  supportTab_2_tip_4: "SpringRESTService | Wink  ",
  supportTab_2_tip_5: "Servlet (2.5 / 3.x) | Struts 2.x",
  supportTab_2_tip_6: "Apache HttpClient (synchronous / asynchronous)",
  supportTab_2_tip_7: "Web Filter（2.5 / 3.x）",
  supportTab_2_tip_8: "Log4j | log4j2 | LogBack ",
  supportTab_2_tip_9: "Java Logging",

  supportTab_3_title: "Application Servers",
  supportTab_3_tip_1: "Tomcat (6+)",
  supportTab_3_tip_2: "SpringBoot",
  supportTab_3_tip_3: "Jetty (7+)",
  supportTab_3_tip_4: "MSCP",
  supportTab_3_tip_5: "Any JSE",

  supportTab_4_title: "Data           Sources",
  supportTab_4_tip_1: "MySQL",
  supportTab_4_tip_2: "JDBC data sources such as Oracle",
  supportTab_4_tip_3: "MongoDB (MongoClient)",
  supportTab_4_tip_4: "Redis (JEDIS, LETTUCE, ARedis )",
  supportTab_4_tip_5: " ESClient (Transport and RESTful)",

  supportTab_5_title: "Message Middleware",
  supportTab_5_tip_1: "RabbitMQ (Consumption / Production)",
  supportTab_5_tip_2: "RocketMQ (Consumption / Production)",
  supportTab_5_tip_3: "Kafka (Consumption / Production)",

  supportTab_6_title: "Database Connection Pools",
  supportTab_6_tip_1: "DBCP/2 | c3p0",
  supportTab_6_tip_2: "Druid | Proxool",
  supportTab_6_tip_3: "Hikari | MyBatis CP",
  supportTab_6_tip_4: "Tomcat DBCP/2 | Tomcat JDBC Pool",

  documentTab_more: "More",
  documentTab_more2: "More",

  documentTab_download_title: "AllInOne",
  documentTab_download_title2: "UAV.Monitor+APM",

  documentTab_download_line_1_title: "Monitor Framework (MOF)",
  documentTab_download_line_1_tip:
    "Application profiling and performance metric collection",
  documentTab_download_line_1_link: "https://pan.baidu.com/s/1cg4J0q",

  documentTab_download_line_2_title: "Monitor Agent (MA)",
  documentTab_download_line_2_tip: "Data collection and node container control",
  documentTab_download_line_2_link: "https://pan.baidu.com/s/1ge5MJ9h",

  documentTab_download_line_3_title: "Health Manager (HM)",
  documentTab_download_line_3_tip: "Data analysis, storage and query",
  documentTab_download_line_3_link: "https://pan.baidu.com/s/1i4HnV85",

  documentTab_download_line_4_title: "AppHub (war package)",
  documentTab_download_line_4_tip: "Data display and control management",
  documentTab_download_line_4_link: "https://pan.baidu.com/s/1dFxtDZV",

  documentTab_help_title: "Documentation",

  documentTab_paper_title: "Blogs",

  JoinUs_title: "Get Involved",
  JoinUS_tip:
    "UAVStack has released the IDE and its building guide. More development documentation will be relseased later. Welcome to join us!",
  JoinUs_manual: "UAVStack IDE Building Guide",
  JoinUs_manual_link: "https://pan.baidu.com/s/1o81LNS2",
  JoinUs_download: "UAVStack IDE Download",
  JoinUs_download_link: "https://pan.baidu.com/s/1o81LNS2",

  contributor_title: "Contributors",

  contributorTab_1_name: "Zhang Zhen",
  contributorTab_1_tip_1:
    "Dev.Founder of UAVStack, International Patent Inventor & Opensource Contributor",
  contributorTab_1_tip_2:
    "Focus on AIOps, APM, Micro-Service, Service Governance and Cloud Middleware.",

  contributorTab_7_name: "Xie Zhiqiu",
  contributorTab_7_tip_1: "Architect, Project Manager & Product Service Owner",

  contributorTab_2_name: "Yang Hongzhuang",
  contributorTab_2_tip_1: "UAV.Monitor/APM Domain Senior Contributor",
  contributorTab_2_tip_2:
    "Focus on system performance, high concurrence and high availability",
  contributorTab_2_tip_3: "Motto: Know how and why ",

  contributorTab_3_name: "Xiao Long",
  contributorTab_3_tip_1: "UAV.Container Domain Senior Contributor",

  contributorTab_4_name: "Li Chong",
  contributorTab_4_tip_1: "UAV.ServiceGovern Domain Senior Contributor",
  contributorTab_4_tip_2: "Motto: Always aim high",

  contributorTab_5_name: "Liu Bo Anye",
  contributorTab_5_tip_1: "Staff Contributor &  ",
  contributorTab_5_tip_2: "Full-stack Engineer",

  contributorTab_6_name: "Zhou Xinyu",
  contributorTab_6_tip_1: "Staff Commitor & Community Ops Owner",

  contactUs_title: "Contact Us",
  contactUs_tip_1: "Scan the QR code below to follow UAVStack on WeChat",
  contactUs_tip_2: " ",
  contactUs_tip_3: "Scan the QR code below to join the user community",
  contactUs_tip_4: " ",
  contactUs_mail: "Email",

  popup_title: "AllInOne",
  popup_title2:
    "AllInOne is the out of the box installation package for the development and demonstration environments.",
  popup_tip: "Note:",
  popup_tip2:
    "Health Manager in AllInOne is applicable in the development, demonstration and small-scale testing environments only.",
  popup_tip_link: "Distributed deployment",
  popup_link:
    "https://uavorg.github.io/documents/uavdoc_deploydocs/healmanagerInstall/healmanagerInstall/microservice.html",
  popup_tip3: "is recommended in the production environment.",

  popup_windows: "Windows 64",
  popup_windows_link: "https://pan.baidu.com/s/1jIF0wNs",
  popup_mac: "Mac",
  popup_mac_link: "https://pan.baidu.com/s/1mhCykp6#list/path=%2F",
  popup_linux: "Linux (CentOS)",
  popup_linux_link: "https://pan.baidu.com/s/1nvj6jW1#list/path=%2F",

  product_banner_tip:
    "UAV.Monitor+APM UAV.Monitor: An integrated platform that monitors businesses, applications / services and runtime environment and adapts to monolithic architecture, SOA architecture and micro-service architecture. UAV.Monitor collects all metrics after the agent is deployed and manages performance of all applications / services.",
  product_banner_use: "Try Now",

  product_introductPanel_title: "Features",

  product_introductTab_1_title: "Runtime Environment Monitoring",
  product_introductTab_1_tip:
    "Collect performance metrics of the operating system and processes, including CPU, memory, connection count, network traffic and disk IO",

  product_introductTab_2_title: "Application & Service Monitoring",
  product_introductTab_2_tip:
    "Collect performance metrics of Application & Service instances, application servers, JVM, clients (Http / Dubbo / SQL / MQ / Redis / MongoDB) without rewriting the codes of Java applications",

  product_introductTab_3_title: "Application & Service Profiling",
  product_introductTab_3_tip:
    "Collect technology stacks of applications and metadata of instances automatically, including service interfaces, clients, instance URLs, log configuration and class libraries, etc.",

  product_introductTab_4_title: "Service Graph",
  product_introductTab_4_tip:
    "Map the visualized presentation of call relations among applications / services automatically, support proxy penetration, and depict the static typology among services as well as the runtime properties",

  product_introductTab_5_title: "Log Collection",
  product_introductTab_5_tip:
    "Collect and query logs of systems / applications automatically and support dynamic feature enabling and disabling\n",

  product_introductTab_6_title: "Full-dimensional Alarm",
  product_introductTab_6_tip:
    "Support performance metric, business metric and log alarm of the runtime environment,",
  product_introductTab_6_tip_2:
    "applications and services with hybrid alarm expressions",

  product_introductTab_7_title: "Invocation Chain Tracing",
  product_introductTab_7_tip:
    "Support whole / partial tracing of services, clients and methods in main technology stacks and dynamic switch between light invocation chains and heavy invocation chains. ",
  product_introductTab_7_tip_2:
    "The light invocation chains collect all invocation chains with almost no impact on performance and the heavy ones collect all requests / responses and input / out parameters of methods",
  product_introductTab_8_title: "One-click Thread Dump Analysis",
  product_introductTab_8_tip:
    "Collect thread dump and thread performance data of targeted JVM and visualize thread resources and dead locks with deep thread dump analysis",

  product_advangtage_title: "Highlights",
  product_advangtage_tip_1:
    "Mainstream Java technology stack support with no code rewriting",
  product_advangtage_tip_2: "Friendly operation and maintenance support",
  product_advangtage_tip_3: "One-stop inclusive monitoring and correlation",
  product_advangtage_tip_4:
    "Fully automatic service profiling to visualize the invocation routes among services",
  product_advangtage_tip_5: "Alarm support for all metrics",

  product_outline_title: "Architecture",
  product_help_title: "Documentation",

  product_help_1_tip: "Deployment",
  product_help_1_link:
    "https://uavorg.github.io/documents/uavdoc_deploydocs/index.html",
  product_help_2_tip: "Architecture",
  product_help_2_link:
    "https://uavorg.github.io/documents/uavdoc_architecture/index.html",
  product_help_3_tip: "User Guide",
  product_help_3_link:
    "https://uavorg.github.io/documents/uavdoc_useroperation/index.html",

  document_head: "Blogs",
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

  download_head: "AllInOne",
  more: "more",

  mbanner_1_title:
    "UAV.Monitor Update: Support dynamic switch of alarm convergence modes",
  mbanner_1_word_1:
    "●  Default mode: Identify the same event automatically and send a preset amount of alarms within a specified time range ",
  mbanner_1_word_2:
    "●  Customized mode: Send alarms upon gradient escalation of the frequency of the same event",
  mbanner_1_word_3:
    "●  Support dynamic switch between two modes and configuration of single alarm expressions",

  mbanner_2_title: "UAV.APM Update: Deep thread dump analysis",
  mbanner_2_word_1:
    "●  Deep analysis of single-thread dump: Detect dead locks automatically and track the causes",
  mbanner_2_word_2:
    "●  Spot chokepoints in the system by querying the lock-dependent waiting link",
  mbanner_2_word_3:
    "●  Association analysis of multi-thread dump: Analyze thread status changes based on time series and time series causality of the thread waiting linkThread dump visualization",

  mbanner_3_title:
    "UAV.APM Update: Exploratory query based on the correlation of logs and invocation chains",
  mbanner_3_word_1:
    "●  Query beginning with invocation chains: Trace application logs of each link",
  mbanner_3_word_2:
    "●  Query beginning with logs: Correlate the invocation chains corresponding to each log",
  mbanner_3_word_3:
    "●  Query mode switch: Free switch between two query modes for closed-loop exploratory query",

  mbanner_4_title:
    "UAV.Monitor Update: Support stream alarm, statistical alarm and hybrid alarms",
  mbanner_4_word_1: "●  Stream alarm: Alarms based on stream time series data",
  mbanner_4_word_2:
    "●  Statistical alarm: Alarms with history statistics of time series metrics as benchmarks",
  mbanner_4_word_3:
    "●  Hybrid alarms: Support co-existence of stream alarms and statistical alarms in alarm rules",

  mbanner_5_title:
    "UAV.Monitor：An integrated platform that monitors businesses, applications / services and runtime environment",
  mbanner_5_word_1:
    "● Adapt to monolithic, SOA and micro-service architectures",
  mbanner_5_word_2: "● Collect all metrics after deploying one agent",
  mbanner_5_word_3: "● Support physical and virtual machines and Docker",
  mbanner_5_word_4:
    "● Send alarms for logs and performance metrics of the runtime environment, applications/services and businesses",
  mbanner_5_word_5: "●   Support hybrid alarm expressions",

  mbanner_6_title:
    "UAV.APM: Enhancement of UAV.Monitor that manages Application & Service performance",
  mbanner_6_word_1:
    "● Support application/service profiling and automatic service typology mapping",
  mbanner_6_word_2: "● Support non-invasive invocation chain tracing",
  mbanner_6_word_3:
    "● Collect thread dump and thread performance data of targeted JVM",
  mbanner_6_word_4: "● Trace the referer, target and time of browser access",
  mbanner_6_word_5:
    "● Trace performance metrics in different combinations within any time range",

  mbanner_7_title: "UAV.MSCP: A micro-service architecture computing platform",
  mbanner_7_word_1:
    "● Provide features like development framework/component support, FAAS, service support, component graph and dynamic service/computing orchestration to simplify computing tasks",

  mbanner_8_title:
    "UAV.ServiceGovern: Enhancement of UAV.Monitor that supports isomorphic and non-isomorphic technology stacks with micro-service architecture",
  mbanner_8_word_1:
    "● Support service life cycle management, unified service discovery, service authorization management and service degradation protection",
  msuggest_download: "Note: download on PC is recommended"
};

export default en_US;
