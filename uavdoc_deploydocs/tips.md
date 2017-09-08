#注意事项
（1）监控代理程序(MA)安装时需注意host的正确性，主机的hostname在/etc/hosts文件中一定要对应到127.0.0.1或者安装时选择的ip。如图
![](/assets/tips_01.png)
 
（2）监控代理程序(MA)宿主机的时间与健康管理服务所在主机的时间误差需小于[心跳服务配置](healmanagerInstall/hm_configration.md#心跳服务)的心跳过期时间。

（3）客户端MA和MOF探针均能指定网卡名，若MA也加载了MOF(即agent启动脚本里有-javaagent:...，则以MOF配置的网卡名为准)