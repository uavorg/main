
##MA的实现架构如下图所示：

![](/assets/ma_01.png)

MA是一个agent，用于解耦，在application外独立运行。MA用于定时抓取MOF中的信息、自动发现Tomcat、MSCP、JavaEE中的信息并获取更多推导的监控信息。之后MA中的数据通过Rocketmq到达[HealthManager](healthmanager)。

MA获取的值来自两部分：
1. [MonitorFramework](moniorframework.md)在J2EE工程中埋点，MA从中取值
2. MA从系统中获取参数值

##MA的运行机制为：

![](/assets/ma_02.png)

1. MSCPBoot作为MSCP的程序入口，在启动时调用SystemStarter的startup方法。
2. 在SystemStarter启动时会调用MonitorAgent的start方法，在此方法中调用AppServerMonitorDetector的run方法。
3. 在run方法中获取所有的JVM进程，并启动对应数据的抓取任务及判断是否占用性能太多而需要自杀。
4. 在AppServerMonitorDetector的addWorker方法中，根据jvmType的不同值来定时抓取Tomcat/MSCP/JavaSE的Monitor Data并生成MonitorDataFrame。
5. 若无法获取Monitor Data，运行进行检测，若进程挂掉，则相关worker自动退出。
6. 将MonitorDataFrame发送到Rocketmq，最终到达HealthManager进行处理。其中收集的消息分为[profile](ying-yong-hua-xiang-shu-ju.md)数据和[monitor](ying-yong-hua-xiang-shu-ju.md)数据，前者为系统静态数据，后者为实时监控数据。


