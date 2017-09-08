## MOF架构

#### MOF架构组件图

![
](/assets/mofjia-gou-zu-jian_1.PNG)

###### 核心组件：

Supporter，CaptureFramework，InteceptFramework，HookFactory，ProfileFramework，DataObserver

###### supporter之间的关系说明：

supporter:抽象了一个功能支持类；
CaptureFramework：实现了对实时数据的抓取类，负责抓取行为和抓取结果holdler,以及实现存储实时数据的抓取数据结构；
InteceptFramework:画像数据的捕获，实现了事件劫持监听（画像监听器）
HookProxy：客户端画像监听代理的实现（客户端监控指标）；
DataObserver:暴露JMX接口数据供MonitorAgent抓取使用；



