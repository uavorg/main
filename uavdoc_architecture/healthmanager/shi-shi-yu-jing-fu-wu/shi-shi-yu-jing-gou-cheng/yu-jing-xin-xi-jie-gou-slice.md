###预警信息数据结构
预警信息数据结构保存在一个Slice切片内，在时间切片内进行处理。
![](/assets/预警数据结构.png)
slice切片包括以下属性：Key，Time时间戳，存放mdf的map，以及mdf属性