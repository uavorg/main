# HM架构

## 1. 整体架构及特点

HM\(HealthManager\)是集实时数据处理，画像数据处理，实时预警数据处理，日志数据处理等服务于一体的综合服务中心，负责UAVStack中各种数据的计算处理，以及相关的服务支持。HM的整体架构图如下：

![](/assets/HM架构.png)

HM具备如下特点：  
 1. HM为一个可部署的JAVA MAIN进程程序  
 2. 每个HM内可以集成多个feature，每个feature都具备单一职责，用户可根据业务特性通过自定义feature集合形成定制的HM程序  
 3. HM可根据用户需求部署在不同的主机上，形成HM集群  
 4. HM的服务接口对上层\(业务和其他系统\)可见

## 2. HM整体工作流程

HM的整体工作流程如下：

![](/assets/HM_工作流程.png)

UAVStack利用RocketMQ作为消息中间件，MA将采集到的Monitor，Profile等\(除心跳数据以外\)的数据发送至RocketMQ中，HM中的各个服务在RocketMQ中消费各自对应的数据，并根据不同的消息类型持久化到不同的数据库中，如实时数据服务会消费掉RocketMQ中的Monitor数据，持久化到opentsdb中，而画像服务会消费掉Profile数据，并持久化到Mongodb中等等，具体的细节在后面的HM服务中会进行详细介绍。同时HM会对外暴露HTTP服务接口，apphub可通过这些接口对各种数据进行查询和展示，其他一些外部系统也可通过这些接口访问监控数据。

