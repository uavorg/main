var updateData = {
  href: "https://github.com/uavorg/uavstack/releases/tag/UAVStack_1.2_20181026",
  update: [
    "1. 简化了预警触发策略中梯度收敛规则的相关配置，如需每次触发则直接填写-1。",
    "2. 优化了预警记录在Redis中的存储结构。",
    "3. 新增了根据预警记录的'已处理'状态决定报警是否持续的功能。",
    "4. MOF支持了对HttpServletResponse的多层套壳（Wrapper）的处理能力。"
  ],
  fix: ["1.  修复了广播地址在某些场景下获取失败导致的NPE问题。"]
};
