function find() {
  let href = [
    // 'GBZ 1-2010 工业企业设计卫生标准',
    'http://down.foodmate.net/standard/yulan.php?itemid=21556',
    // 'GBZ 2.1-2019 工作场所有害因素职业接触限值 第1部分：化学有害因素',
    'http://down.foodmate.net/standard/yulan.php?itemid=62445',
    // 'GBZ 2.2-2007 工作场所有害因素职业接触限值 第2部分：物理因素',
    'http://down.foodmate.net/standard/yulan.php?itemid=13659',
    // 'GBZ 158-2003 工作场所职业病危害警示标识',
    'https://www.doc88.com/p-506935742926.html',
    // 'GBZ 159-2004 工作场所空气中有毒物质监测的采样规范',
    'http://down.foodmate.net/standard/yulan.php?itemid=14929',
    // 'GBZ/T 160.11-2004 工作场所空气有毒物质测定 锂及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13241',
    // 'GBZ/T 160.16-2004 工作场所空气有毒物质测定 镍及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13283',
    // 'GBZ/T 160.29-2004 工作场所空气有毒物质测定 无机含氮化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=14234',
    // 'GBZ/T 160.30-2004 工作场所空气有毒物质测定 无机含磷化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13265',
    // 'GBZ/T 160.33-2004 工作场所空气有毒物质测定 硫化物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13266',
    // 'GBZ/T 160.36-2004 工作场所空气有毒物质测定 氟化物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13268',
    // 'GBZ/T 160.37-2004 工作场所空气有毒物质测定 氯化物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13269',
    // 'GBZ/T 160.44-2004 工作场所空气有毒物质测定 多环芳香烃类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=14270',
    // 'GBZ/T 160.45-2007 工作场所空气有毒物质测定 卤代烷烃类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=16684',
    // 'GBZ/T 160.49-2004 工作场所空气有毒物质测定 硫醇类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13272',
    // 'GBZ/T 160.50-2004 工作场所空气有毒物质测定 烷氧基乙醇类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13285',
    // 'GBZ/T 160.51-2007 工作场所空气有毒物质测定 酚类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=16686',
    // 'GBZ/T 160.52-2007 工作场所空气有毒物质测定 脂肪族醚类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=16687',
    // 'GBZ/T 160.53-2004 工作场所空气有毒物质测定 苯基醚类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=14266',
    // 'GBZ/T 160.55-2007 工作场所空气有毒物质测定 脂肪族酮类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=16689',
    // 'GBZ/T 160.56-2004 工作场所空气有毒物质测定 脂环酮和芳香族酮类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13216',
    // 'GBZ/T 160.58-2004 工作场所空气有毒物质测定 环氧化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13205',
    // 'GBZ/T 160.59-2004 工作场所空气有毒物质测定 羧酸类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=11662',
    // 'GBZ/T 160.61-2004 工作场所空气有毒物质测定 酰基卤类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13206',
    // 'GBZ/T 160.62-2004 工作场所空气有毒物质测定 酰胺类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13207',
    // 'GBZ/T 160.63-2007 工作场所空气有毒物质测定 饱和脂肪族酯类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=16690',
    // 'GBZ/T 160.75-2004 工作场所空气有毒物质测定 杂环化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13200',
    // 'GBZ/T 160.77-2004 工作场所空气有毒物质测定 有机氯农药',
    'http://down.foodmate.net/standard/yulan.php?itemid=13201',
    // 'GBZ/T 160.78-2004 工作场所空气有毒物质测定 有机氮农药',
    'http://down.foodmate.net/wap/index.php?moduleid=23&itemid=14252',
    // 'GBZ/T 160.78-2007 工作场所空气有毒物质测定 拟除虫菊脂类农药',
    'http://down.foodmate.net/standard/yulan.php?itemid=16692',
    // 'GBZ/T 160.79-2004 工作场所空气有毒物质测定 药物类化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=13202',
    // 'GBZ/T 189.1-2007 工作场所物理因素测量 第1部分：超高频辐射',
    'http://down.foodmate.net/standard/yulan.php?itemid=90569',
    // 'GBZ/T 189.2-2007 工作场所物理因素测量 第2部分：高频电磁场',
    'http://down.foodmate.net/standard/yulan.php?itemid=90570',
    // 'GBZ/T 189.3-2018 工作场所物理因素测量 第3部分：1Hz~100kHz电场和磁场',
    'http://down.foodmate.net/standard/yulan.php?itemid=53293',
    // 'GBZ/T 189.4-2007 工作场所物理因素测量 第4部分：激光辐射',
    'http://down.foodmate.net/standard/yulan.php?itemid=90571',
    // 'GBZ/T 189.5-2007 工作场所物理因素测量 第5部分：微波辐射',
    'http://down.foodmate.net/standard/yulan.php?itemid=90572',
    // 'GBZ/T 189.6-2007 工作场所物理因素测量 第6部分：紫外辐射',
    'http://down.foodmate.net/standard/yulan.php?itemid=90573',
    // 'GBZ/T 189.7-2007 工作场所物理因素测量 第7部分：高温',
    'http://down.foodmate.net/standard/yulan.php?itemid=15937',
    // 'GBZ/T 189.8-2007 工作场所物理因素测量 第8部分：噪声',
    'http://down.foodmate.net/standard/yulan.php?itemid=15938',
    // 'GBZ/T 189.9-2007 工作场所物理因素测量 第9部分：手传振动',
    'http://down.foodmate.net/standard/yulan.php?itemid=15939',
    // 'GBZ/T 189.10-2007 工作场所物理因素测量 第10部分：体力劳动强度分级',
    'http://down.foodmate.net/standard/yulan.php?itemid=15935',
    // 'GBZ/T 189.11-2007 工作场所物理因素测量 第11部分：体力劳动时的心率',
    'http://down.foodmate.net/standard/yulan.php?itemid=15936',
    // 'GBZ/T 192.1-2007 工作场所空气中粉尘测定 第1部分：总粉尘浓度',
    'http://down.foodmate.net/standard/yulan.php?itemid=14321',
    // 'GBZ/T 192.2-2007 工作场所空气中粉尘测定 第2部分：呼吸性粉尘浓度',
    'http://down.foodmate.net/standard/yulan.php?itemid=13873',
    // 'GBZ/T 192.3-2007 工作场所空气中粉尘测定 第3部分：粉尘分散度',
    'http://down.foodmate.net/standard/yulan.php?itemid=13874',
    // 'GBZ/T 192.4-2007 工作场所空气中粉尘测定 第4部分：游离二氧化硅含量',
    'http://down.foodmate.net/standard/yulan.php?itemid=15357',
    // 'GBZ/T 192.5-2007 工作场所空气中粉尘测定 第5部分：石棉纤维浓度',
    'http://down.foodmate.net/standard/yulan.php?itemid=13875',
    // 'GBZ/T 192.6-2018 工作场所空气中粉尘测定 第6部分：超细 颗粒和细颗粒总数量浓度',
    'http://down.foodmate.net/standard/yulan.php?itemid=53292',
    // 'GBZ/T 193-2007 石棉作业职业卫生管理规范',
    'https://www.doc88.com/p-5486462860885.html',
    // 'GBZ/T 194-2007 工作场所防止职业中毒卫生工程防护措施规范',
    'https://www.doc88.com/p-90933170657.html',
    // 'GBZ/T 195-2007 有机溶剂作业场所个人职业病防护用品使用规范',
    'http://down.foodmate.net/standard/yulan.php?itemid=105000',
    // 'GBZ/T 196-2007 建设项目职业病危害预评价技术导则',
    'https://www.doc88.com/p-093252054967.html',
    // 'GBZ/T 197-2007 建设项目职业病危害控制效果评价技术导则',
    'https://www.doc88.com/p-776865215304.html',
    // 'GBZ/T 198-2007 使用人造矿物纤维绝热棉职业病危害防护规程',
    'https://www.doc88.com/p-9059091686275.html',
    // 'GBZ/T 199-2007 服装干洗业职业卫生管理规范',
    'https://www.doc88.com/p-3781615258278.html',
    // 'GBZ/T 203-2007 高毒物品职业病危害告知规范',
    'http://down.foodmate.net/standard/yulan.php?itemid=21059',
    // 'GBZ/T 204-2007 高毒物品作业岗位职业病危害信息指南',
    'http://down.foodmate.net/standard/yulan.php?itemid=90574',
    // 'GBZ/T 205-2007 密闭空间作业职业危害防护规范',
    'http://down.foodmate.net/standard/yulan.php?itemid=90575',
    // 'GBZ/T 206-2007 密闭空间直读式仪器气体检测规范',
    'http://down.foodmate.net/standard/yulan.php?itemid=60370',
    // 'GBZ/T 210.1-2008 职业卫生标准制定指南 第1部分：工作场所化学物质职业接触限值',
    'http://down.foodmate.net/standard/yulan.php?itemid=18085',
    // 'GBZ/T 210.2-2008 职业卫生标准制定指南 第2部分：工作场所粉尘职业接触限值',
    'http://down.foodmate.net/standard/yulan.php?itemid=18086',
    // 'GBZ/T 210.3-2008 职业卫生标准制定指南 第3部分：工作场所物理因素职业接触限值',
    'http://down.foodmate.net/standard/yulan.php?itemid=18117',
    // 'GBZ/T 210.4-2008 职业卫生标准制定指南 第4部分：工作场所空气中化学物质的测定方法',
    'http://down.foodmate.net/standard/yulan.php?itemid=18118',
    // 'GBZ/T 210.5-2008 职业卫生标准制定指南 第5部分：生物材料中化学物质的测定方法',
    'http://down.foodmate.net/standard/yulan.php?itemid=18259',
    // 'GBZ/T 211-2008 建筑行业职业病危害预防控制规范',
    'https://www.doc88.com/p-3582529205580.html',
    // 'GBZ/T 212-2008 纺织印染业职业病危害预防控制指南',
    'https://www.doc88.com/p-9601837238771.html',
    // 'GBZ 51-2009 职业性化学性皮肤灼伤诊断标准',
    'https://www.doc88.com/p-6651322421035.html',
    // 'GBZ 73-2009 职业性急性化学物中毒性呼吸系统疾病诊断标准',
    'http://down.foodmate.net/standard/yulan.php?itemid=18888',
    // 'GBZ 74-2009 职业性急性化学物中毒性心脏病诊断标准',
    'http://down.foodmate.net/standard/yulan.php?itemid=18889',
    // 'GBZ/T 157-2009 职业病诊断名词术语',
    'http://down.foodmate.net/standard/yulan.php?itemid=18892',
    // 'GBZ/T 218-2017 职业病诊断标准编写指南',
    'http://down.foodmate.net/standard/yulan.php?itemid=87491',
    // 'GBZ 221-2009 消防员职业健康标准',
    'http://down.foodmate.net/standard/yulan.php?itemid=20637',
    // 'GBZ/T 300.1-2017 工作场所空气有毒物质测定 第1部分：总则',
    'http://down.foodmate.net/standard/yulan.php?itemid=52847',
    // 'GBZ/T 300.2-2017 工作场所空气有毒物质测定 第2部分：锑及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52848',
    // 'GBZ/T 300.3-2017 工作场所空气有毒物质测定 第3部分：钡及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52849',
    // 'GBZ/T 300.4-2017 工作场所空气有毒物质测定 第4部分：铍及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52850',
    // 'GBZ/T 300.5-2017 工作场所空气有毒物质测定 第5部分：铋及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52851',
    // 'GBZ/T 300.6-2017 工作场所空气有毒物质测定 第6部分：镉及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52852',
    // 'GBZ/T 300.7-2017 工作场所空气有毒物质测定 第7部分：钙及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52853',
    // 'GBZ/T 300.8-2017 工作场所空气有毒物质测定 第8部分：铯及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52854',
    // 'GBZ/T 300.9-2017 工作场所空气有毒物质测定 第9部分：铬及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52855',
    // 'GBZ/T 300.10-2017 工作场所空气有毒物质测定 第10部分：钴及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52856',
    // 'GBZ/T 300.11-2017 工作场所空气有毒物质测定 第11部分：铜及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52857',
    // 'GBZ/T 300.13-2017 工作场所空气有毒物质测定 第13部分：铟及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52858',
    // 'GBZ/T 300.15-2017 工作场所空气有毒物质测定 第15部分：铅及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52859',
    // 'GBZ/T 300.16-2017 工作场所空气有毒物质测定 第16部分：镁及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52860',
    // 'GBZ/T 300.17-2017 工作场所空气有毒物质测定 第17部分：锰及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52861',
    // 'GBZ/T 300.18-2017 工作场所空气有毒物质测定 第18部分：汞及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52862',
    // 'GBZ/T 300.19-2017 工作场所空气有毒物质测定 第19部分：钼及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52863',
    // 'GBZ/T 300.21-2017 工作场所空气有毒物质测定 第21部分：钾及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52864',
    // 'GBZ/T 300.22-2017 工作场所空气有毒物质测定 第22部分：钠及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52865',
    // 'GBZ/T 300.23-2017 工作场所空气有毒物质测定 第23部分：锶及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52866',
    // 'GBZ/T 300.24-2017 工作场所空气有毒物质测定 第24部分：钽及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52867',
    // 'GBZ/T 300.25-2017 工作场所空气有毒物质测定 第25部分：铊及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52868',
    // 'GBZ/T 300.26-2017 工作场所空气有毒物质测定 第26部分：锡及其无机化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52869',
    // 'GBZ/T 300.27-2017 工作场所空气有毒物质测定 第27部分：二月桂酸二丁基锡、三甲基氯化锡和三乙基氯化锡',
    'http://down.foodmate.net/standard/yulan.php?itemid=52870',
    // 'GBZ/T 300.28-2017 工作场所空气有毒物质测定 第28部分：钨及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52871',
    // 'GBZ/T 300.29-2017 工作场所空气有毒物质测定 第29部分：钒及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52872',
    // 'GBZ/T 300.30-2017 工作场所空气有毒物质测定 第30部分：钇及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52873',
    // 'GBZ/T 300.31-2017 工作场所空气有毒物质测定 第31部分：锌及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52874',
    // 'GBZ/T 300.32-2017 工作场所空气有毒物质测定 第32部分：锆及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52875',
    // 'GBZ/T 300.33-2017 工作场所空气有毒物质测定 第33部分：金属及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52876',
    // 'GBZ/T 300.34-2017 工作场所空气有毒物质测定 第34部分：稀土金属及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52877',
    // 'GBZ/T 300.35-2017 工作场所空气有毒物质测定 第35部分：三氟化硼',
    'http://down.foodmate.net/standard/yulan.php?itemid=52878',
    // 'GBZ/T 300.37-2017 工作场所空气有毒物质测定 第37部分：一氧化碳和二氧化碳',
    'http://down.foodmate.net/standard/yulan.php?itemid=52879',
    // 'GBZ/T 300.38-2017 工作场所空气有毒物质测定 第38部分：二硫化碳 ',
    'http://down.foodmate.net/standard/yulan.php?itemid=52881',
    // 'GBZ/T 300.43-2017 工作场所空气有毒物质测定 第43部分：叠氮酸和叠氮化钠',
    'http://down.foodmate.net/standard/yulan.php?itemid=52882',
    // 'GBZ/T 300.45-2017 工作场所空气有毒物质测定 第45部分：五氧化二磷和五硫化二磷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52883',
    // 'GBZ/T 300.46-2017 工作场所空气有毒物质测定 第46部分：三氯化磷和三氯硫磷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52884',
    // 'GBZ/T 300.47-2017 工作场所空气有毒物质测定 第47部分：砷及其无机化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52885',
    // 'GBZ/T 300.48-2017 工作场所空气有毒物质测定 第48部分：臭氧和过氧化氢',
    'http://down.foodmate.net/standard/yulan.php?itemid=52886',
    // 'GBZ/T 300.51-2017 工作场所空气有毒物质测定 第51部分：六氟化硫',
    'http://down.foodmate.net/standard/yulan.php?itemid=52887',
    // 'GBZ/T 300.52-2017 工作场所空气有毒物质测定 第52部分：氯化亚砜',
    'http://down.foodmate.net/standard/yulan.php?itemid=52888',
    // 'GBZ/T 300.53-2017 工作场所空气有毒物质测定 第53部分：硒及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52889',
    // 'GBZ/T 300.54-2017 工作场所空气有毒物质测定 第54部分：碲及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52890',
    // 'GBZ/T 300.58-2017 工作场所空气有毒物质测定 第58部分：碘及其化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52891',
    // 'GBZ/T 300.59-2017 工作场所空气有毒物质测定 第59部分：挥发性有机化合物',
    'http://down.foodmate.net/standard/yulan.php?itemid=52892',
    // 'GBZ/T 300.60-2017 工作场所空气有毒物质测定 第60部分：戊烷、己烷、庚烷、辛烷和壬烷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52893',
    // 'GBZ/T 300.61-2017 工作场所空气有毒物质测定 第61部分：丁烯、1,3-丁二烯和二聚环戊二烯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52894',
    // 'GBZ/T 300.62-2017 工作场所空气有毒物质测定 第62部分：溶剂汽油、液化石油气、抽余油和松节油',
    'http://down.foodmate.net/standard/yulan.php?itemid=52895',
    // 'GBZ/T 300.64-2017 工作场所空气有毒物质测定 第64部分：石蜡烟',
    'http://down.foodmate.net/standard/yulan.php?itemid=52896',
    // 'GBZ/T 300.65-2017 工作场所空气有毒物质测定 第65部分：环己烷和甲基环己烷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52897',
    // 'GBZ/T 300.66-2017 工作场所空气有毒物质测定 第66部分：苯、甲苯、二甲苯和乙苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52898',
    // 'GBZ/T 300.68-2017 工作场所空气有毒物质测定 第68部分：苯乙烯、甲基苯乙烯和二乙烯基苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52899',
    // 'GBZ/T 300.69-2017 工作场所空气有毒物质测定 第69部分：联苯和氢化三联苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52900',
    // 'GBZ/T 300.73-2017 工作场所空气有毒物质测定 第73部分：氯甲烷、二氯甲烷、三氯甲烷和四氯化碳',
    'http://down.foodmate.net/standard/yulan.php?itemid=52901',
    // 'GBZ/T 300.77-2017 工作场所空气有毒物质测定 第77部分：四氟乙烯和六氟丙烯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52902',
    // 'GBZ/T 300.78-2017 工作场所空气有毒物质测定 第78部分：氯乙烯、二氯乙烯、三氯乙烯和四氯乙烯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52903',
    // 'GBZ/T 300.80-2017 工作场所空气有毒物质测定 第80部分：氯丙烯和二氯丙烯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52904',
    // 'GBZ/T 300.81-2017 工作场所空气有毒物质测定 第81部分：氯苯、二氯苯和三氯苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52962',
    // 'GBZ/T 300.82-2017 工作场所空气有毒物质测定 第82部分：苄基氯和对氯甲苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52905',
    // 'GBZ/T 300.83-2017 工作场所空气有毒物质测定 第83部分：溴苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52906',
    // 'GBZ/T 300.84-2017 工作场所空气有毒物质测定 第84部分：甲醇、丙醇和辛醇',
    'http://down.foodmate.net/standard/yulan.php?itemid=52950',
    // 'GBZ/T 300.85-2017 工作场所空气有毒物质测定 第85部分：丁醇、戊醇和丙烯醇',
    'http://down.foodmate.net/standard/yulan.php?itemid=52907',
    // 'GBZ/T 300.86-2017 工作场所空气有毒物质测定 第86部分：乙二醇',
    'http://down.foodmate.net/standard/yulan.php?itemid=52951',
    // 'GBZ/T 300.88-2017 工作场所空气有毒物质测定 第88部分：氯乙醇和1,3-二氯丙醇',
    'http://down.foodmate.net/standard/yulan.php?itemid=52908',
    // 'GBZ/T 300.93-2017 工作场所空气有毒物质测定 第93部分：五氯酚和五氯酚钠',
    'http://down.foodmate.net/standard/yulan.php?itemid=52909',
    // 'GBZ/T 300.96-2018 工作场所空气有毒物质测定 第96部分：七氟烷、异氟烷和恩氟烷',
    'http://down.foodmate.net/standard/yulan.php?itemid=53291',
    // 'GBZ/T 300.97-2017 工作场所空气有毒物质测定 第97部分：二丙二醇甲醚和1-甲氧基-2-丙醇',
    'http://down.foodmate.net/standard/yulan.php?itemid=52910',
    // 'GBZ/T 300.99-2017 工作场所空气有毒物质测定 第99部分：甲醛、乙醛和丁醛',
    'http://down.foodmate.net/standard/yulan.php?itemid=52911',
    // 'GBZ/T 300.100-2018 工作场所空气有毒物质测定 第100部分：糠醛和二甲氧基甲烷',
    'http://down.foodmate.net/standard/yulan.php?itemid=53290',
    // 'GBZ/T 300.101-2017 工作场所空气有毒物质测定 第101部分：三氯乙醛',
    'http://down.foodmate.net/standard/yulan.php?itemid=52912',
    // 'GBZ/T 300.103-2017 工作场所空气有毒物质测定 第103部分：丙酮、丁酮和甲基异丁基甲酮',
    'http://down.foodmate.net/standard/yulan.php?itemid=52913',
    // 'GBZ/T 300.104-2017 工作场所空气有毒物质测定 第104部分：二乙基甲酮、2-己酮和二异丁基甲酮',
    'http://down.foodmate.net/standard/yulan.php?itemid=52914',
    // 'GBZ/T 300.106-2018 工作场所空气有毒物质测定 第106部分：氯丙酮',
    'https://www.doc88.com/p-4083808932095.html',
    // 'GBZ/T 300.110-2017 工作场所空气有毒物质测定 第110部分：氢醌和间苯二酚',
    'http://down.foodmate.net/standard/yulan.php?itemid=52915',
    // 'GBZ/T 300.112-2017 工作场所空气有毒物质测定 第112部分：甲酸和乙酸',
    'http://down.foodmate.net/standard/yulan.php?itemid=52916',
    // 'GBZ/T 300.114-2017 工作场所空气有毒物质测定 第114部分：草酸和对苯二甲酸',
    'http://down.foodmate.net/standard/yulan.php?itemid=52917',
    // 'GBZ/T 300.115-2017 工作场所空气有毒物质测定 第115部分：氯乙酸',
    'http://down.foodmate.net/standard/yulan.php?itemid=52918',
    // 'GBZ/T 300.116-2018 工作场所空气有毒物质测定 第116部分：对甲苯磺酸',
    'https://www.doc88.com/p-4184818726138.html',
    // 'GBZ/T 300.118-2017 工作场所空气有毒物质测定 第118部分：乙酸酐、马来酸酐和邻苯二甲酸酐',
    'http://down.foodmate.net/standard/yulan.php?itemid=52919',
    // 'GBZ/T 300.122-2017 工作场所空气有毒物质测定 第122部分：甲酸甲酯和甲酸乙酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52920',
    // 'GBZ/T 300.126-2017 工作场所空气有毒物质测定 第126部分：硫酸二甲酯和三甲苯磷酸酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52921',
    // 'GBZ/T 300.127-2017 工作场所空气有毒物质测定 第127部分：丙烯酸酯类',
    'http://down.foodmate.net/standard/yulan.php?itemid=52922',
    // 'GBZ/T 300.128-2018 工作场所空气有毒物质测定 第128部分：甲基丙烯酸酯类',
    'http://down.foodmate.net/standard/yulan.php?itemid=53287',
    // 'GBZ/T 300.129-2017 工作场所空气有毒物质测定 第129部分：氯乙酸甲酯和氯乙酸乙酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52923',
    // 'GBZ/T 300.130-2017 工作场所空气有毒物质测定 第130部分：邻苯二甲酸二丁酯和邻苯二甲酸二辛酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52924',
    // 'GBZ/T 300.132-2017 工作场所空气有毒物质测定 第132部分：甲苯二异氰酸酯、二苯基甲烷二异氰酸酯和异佛尔酮二异氰酸酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52925',
    // 'GBZ/T 300.133-2017 工作场所空气有毒物质测定 第133部分：乙腈、丙烯腈和甲基丙烯腈',
    'http://down.foodmate.net/standard/yulan.php?itemid=52926',
    // 'GBZ/T 300.134-2017 工作场所空气有毒物质测定 第134部分：丙酮氰醇和苄基氰',
    'http://down.foodmate.net/standard/yulan.php?itemid=52927',
    // 'GBZ/T 300.136-2017 工作场所空气有毒物质测定 第136部分：三甲胺、二乙胺和三乙胺',
    'http://down.foodmate.net/standard/yulan.php?itemid=52928',
    // 'GBZ/T 300.137-2017 工作场所空气有毒物质测定 第137部分：乙胺、乙二胺和环己胺',
    'http://down.foodmate.net/standard/yulan.php?itemid=52929',
    // 'GBZ/T 300.139-2017 工作场所空气有毒物质测定 第139部分：乙醇胺',
    'http://down.foodmate.net/standard/yulan.php?itemid=52930',
    // 'GBZ/T 300.140-2017 工作场所空气有毒物质测定 第140部分：肼、甲基肼和偏二甲基肼',
    'http://down.foodmate.net/standard/yulan.php?itemid=52931',
    // 'GBZ/T 300.142-2017 工作场所空气有毒物质测定 第142部分：三氯苯胺',
    'http://down.foodmate.net/standard/yulan.php?itemid=52932',
    // 'GBZ/T 300.143-2017 工作场所空气有毒物质测定 第143部分：对硝基苯胺',
    'http://down.foodmate.net/standard/yulan.php?itemid=52933',
    // 'GBZ/T 300.146-2017 工作场所空气有毒物质测定 第146部分：硝基苯、硝基甲苯和硝基氯苯',
    'http://down.foodmate.net/standard/yulan.php?itemid=52934',
    // 'GBZ/T 300.149-2017 工作场所空气有毒物质测定 第149部分：杀螟松、倍硫磷、亚胺硫磷和甲基对硫磷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52935',
    // 'GBZ/T 300.150-2017 工作场所空气有毒物质测定 第150部分：敌敌畏、甲拌磷和对硫磷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52936',
    // 'GBZ/T 300.151-2017 工作场所空气有毒物质测定 第151部分：久效磷、氧乐果和异稻瘟净',
    'http://down.foodmate.net/standard/yulan.php?itemid=52937',
    // 'GBZ/T 300.153-2017 工作场所空气有毒物质测定 第153部分：磷胺、内吸磷、甲基内吸磷和马拉硫磷',
    'http://down.foodmate.net/standard/yulan.php?itemid=52938',
    // 'GBZ/T 300.159-2017 工作场所空气有毒物质测定 第159部分：硝化甘油、硝基胍、奥克托今和黑索金',
    'http://down.foodmate.net/standard/yulan.php?itemid=52939',
    // 'GBZ/T 300.160-2017 工作场所空气有毒物质测定 第160部分：洗衣粉酶',
    'http://down.foodmate.net/standard/yulan.php?itemid=52940',
    // 'GBZ/T 300.161-2018 工作场所空气有毒物质测定 第161部分：三溴甲烷',
    'http://down.foodmate.net/standard/yulan.php?itemid=53286',
    // 'GBZ/T 300.162-2018 工作场所空气有毒物质测定 第162部分：苯醌',
    'http://down.foodmate.net/standard/yulan.php?itemid=53285',
    // 'GBZ/T 300.163-2018 工作场所空气有毒物质测定 第163部分：甲苯二异氰酸酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=53284',
    // 'GBZ/T 300.164-2018 工作场所空气有毒物质测定 第164部分：二苯基甲烷二异氰酸酯',
    'http://down.foodmate.net/standard/yulan.php?itemid=53283',
    // 'GB/T 5700-2008 照明测量方法',
    'http://down.foodmate.net/standard/yulan.php?itemid=17029',
    // 'GB 50034-2013 建筑照明设计标准',
    'http://down.foodmate.net/standard/yulan.php?itemid=41766',
  ]
  let arr = [
    'GBZ 1-2010 工业企业设计卫生标准',
    'GBZ 2.1-2019 工作场所有害因素职业接触限值 第1部分：化学有害因素',
    'GBZ 2.2-2007 工作场所有害因素职业接触限值 第2部分：物理因素',
    'GBZ 158-2003 工作场所职业病危害警示标识',
    'GBZ 159-2004 工作场所空气中有毒物质监测的采样规范',
    'GBZ/T 160.11-2004 工作场所空气有毒物质测定 锂及其化合物',
    'GBZ/T 160.16-2004 工作场所空气有毒物质测定 镍及其化合物',
    'GBZ/T 160.29-2004 工作场所空气有毒物质测定 无机含氮化合物',
    'GBZ/T 160.30-2004 工作场所空气有毒物质测定 无机含磷化合物',
    'GBZ/T 160.33-2004 工作场所空气有毒物质测定 硫化物',
    'GBZ/T 160.36-2004 工作场所空气有毒物质测定 氟化物',
    'GBZ/T 160.37-2004 工作场所空气有毒物质测定 氯化物',
    'GBZ/T 160.44-2004 工作场所空气有毒物质测定 多环芳香烃类化合物',
    'GBZ/T 160.45-2007 工作场所空气有毒物质测定 卤代烷烃类化合物',
    'GBZ/T 160.49-2004 工作场所空气有毒物质测定 硫醇类化合物',
    'GBZ/T 160.50-2004 工作场所空气有毒物质测定 烷氧基乙醇类化合物',
    'GBZ/T 160.51-2007 工作场所空气有毒物质测定 酚类化合物',
    'GBZ/T 160.52-2007 工作场所空气有毒物质测定 脂肪族醚类化合物',
    'GBZ/T 160.53-2004 工作场所空气有毒物质测定 苯基醚类化合物',
    'GBZ/T 160.55-2007 工作场所空气有毒物质测定 脂肪族酮类化合物',
    'GBZ/T 160.56-2004 工作场所空气有毒物质测定 脂环酮和芳香族酮类化合物',
    'GBZ/T 160.58-2004 工作场所空气有毒物质测定 环氧化合物',
    'GBZ/T 160.59-2004 工作场所空气有毒物质测定 羧酸类化合物',
    'GBZ/T 160.61-2004 工作场所空气有毒物质测定 酰基卤类化合物',
    'GBZ/T 160.62-2004 工作场所空气有毒物质测定 酰胺类化合物',
    'GBZ/T 160.63-2007 工作场所空气有毒物质测定 饱和脂肪族酯类化合物',
    'GBZ/T 160.75-2004 工作场所空气有毒物质测定 杂环化合物',
    'GBZ/T 160.77-2004 工作场所空气有毒物质测定 有机氯农药',
    'GBZ/T 160.78-2004 工作场所空气有毒物质测定 有机氮农药',
    'GBZ/T 160.78-2007 工作场所空气有毒物质测定 拟除虫菊脂类农药',
    'GBZ/T 160.79-2004 工作场所空气有毒物质测定 药物类化合物',
    'GBZ/T 189.1-2007 工作场所物理因素测量 第1部分：超高频辐射',
    'GBZ/T 189.2-2007 工作场所物理因素测量 第2部分：高频电磁场',
    'GBZ/T 189.3-2018 工作场所物理因素测量 第3部分：1Hz~100kHz电场和磁场',
    'GBZ/T 189.4-2007 工作场所物理因素测量 第4部分：激光辐射',
    'GBZ/T 189.5-2007 工作场所物理因素测量 第5部分：微波辐射',
    'GBZ/T 189.6-2007 工作场所物理因素测量 第6部分：紫外辐射',
    'GBZ/T 189.7-2007 工作场所物理因素测量 第7部分：高温',
    'GBZ/T 189.8-2007 工作场所物理因素测量 第8部分：噪声',
    'GBZ/T 189.9-2007 工作场所物理因素测量 第9部分：手传振动',
    'GBZ/T 189.10-2007 工作场所物理因素测量 第10部分：体力劳动强度分级',
    'GBZ/T 189.11-2007 工作场所物理因素测量 第11部分：体力劳动时的心率',
    'GBZ/T 192.1-2007 工作场所空气中粉尘测定 第1部分：总粉尘浓度',
    'GBZ/T 192.2-2007 工作场所空气中粉尘测定 第2部分：呼吸性粉尘浓度',
    'GBZ/T 192.3-2007 工作场所空气中粉尘测定 第3部分：粉尘分散度',
    'GBZ/T 192.4-2007 工作场所空气中粉尘测定 第4部分：游离二氧化硅含量',
    'GBZ/T 192.5-2007 工作场所空气中粉尘测定 第5部分：石棉纤维浓度',
    'GBZ/T 192.6-2018 工作场所空气中粉尘测定 第6部分：超细 颗粒和细颗粒总数量浓度',
    'GBZ/T 193-2007 石棉作业职业卫生管理规范',
    'GBZ/T 194-2007 工作场所防止职业中毒卫生工程防护措施规范',
    'GBZ/T 195-2007 有机溶剂作业场所个人职业病防护用品使用规范',
    'GBZ/T 196-2007 建设项目职业病危害预评价技术导则',
    'GBZ/T 197-2007 建设项目职业病危害控制效果评价技术导则',
    'GBZ/T 198-2007 使用人造矿物纤维绝热棉职业病危害防护规程',
    'GBZ/T 199-2007 服装干洗业职业卫生管理规范',
    'GBZ/T 203-2007 高毒物品职业病危害告知规范',
    'GBZ/T 204-2007 高毒物品作业岗位职业病危害信息指南',
    'GBZ/T 205-2007 密闭空间作业职业危害防护规范',
    'GBZ/T 206-2007 密闭空间直读式仪器气体检测规范',
    'GBZ/T 210.1-2008 职业卫生标准制定指南 第1部分：工作场所化学物质职业接触限值',
    'GBZ/T 210.2-2008 职业卫生标准制定指南 第2部分：工作场所粉尘职业接触限值',
    'GBZ/T 210.3-2008 职业卫生标准制定指南 第3部分：工作场所物理因素职业接触限值',
    'GBZ/T 210.4-2008 职业卫生标准制定指南 第4部分：工作场所空气中化学物质的测定方法',
    'GBZ/T 210.5-2008 职业卫生标准制定指南 第5部分：生物材料中化学物质的测定方法',
    'GBZ/T 211-2008 建筑行业职业病危害预防控制规范',
    'GBZ/T 212-2008 纺织印染业职业病危害预防控制指南',
    'GBZ 51-2009 职业性化学性皮肤灼伤诊断标准',
    'GBZ 73-2009 职业性急性化学物中毒性呼吸系统疾病诊断标准',
    'GBZ 74-2009 职业性急性化学物中毒性心脏病诊断标准',
    'GBZ/T 157-2009 职业病诊断名词术语',
    'GBZ/T 218-2017 职业病诊断标准编写指南',
    'GBZ 221-2009 消防员职业健康标准',
    'GBZ/T 300.1-2017 工作场所空气有毒物质测定 第1部分：总则',
    'GBZ/T 300.2-2017 工作场所空气有毒物质测定 第2部分：锑及其化合物',
    'GBZ/T 300.3-2017 工作场所空气有毒物质测定 第3部分：钡及其化合物',
    'GBZ/T 300.4-2017 工作场所空气有毒物质测定 第4部分：铍及其化合物',
    'GBZ/T 300.5-2017 工作场所空气有毒物质测定 第5部分：铋及其化合物',
    'GBZ/T 300.6-2017 工作场所空气有毒物质测定 第6部分：镉及其化合物',
    'GBZ/T 300.7-2017 工作场所空气有毒物质测定 第7部分：钙及其化合物',
    'GBZ/T 300.8-2017 工作场所空气有毒物质测定 第8部分：铯及其化合物',
    'GBZ/T 300.9-2017 工作场所空气有毒物质测定 第9部分：铬及其化合物',
    'GBZ/T 300.10-2017 工作场所空气有毒物质测定 第10部分：钴及其化合物',
    'GBZ/T 300.11-2017 工作场所空气有毒物质测定 第11部分：铜及其化合物',
    'GBZ/T 300.13-2017 工作场所空气有毒物质测定 第13部分：铟及其化合物',
    'GBZ/T 300.15-2017 工作场所空气有毒物质测定 第15部分：铅及其化合物',
    'GBZ/T 300.16-2017 工作场所空气有毒物质测定 第16部分：镁及其化合物',
    'GBZ/T 300.17-2017 工作场所空气有毒物质测定 第17部分：锰及其化合物',
    'GBZ/T 300.18-2017 工作场所空气有毒物质测定 第18部分：汞及其化合物',
    'GBZ/T 300.19-2017 工作场所空气有毒物质测定 第19部分：钼及其化合物',
    'GBZ/T 300.21-2017 工作场所空气有毒物质测定 第21部分：钾及其化合物',
    'GBZ/T 300.22-2017 工作场所空气有毒物质测定 第22部分：钠及其化合物',
    'GBZ/T 300.23-2017 工作场所空气有毒物质测定 第23部分：锶及其化合物',
    'GBZ/T 300.24-2017 工作场所空气有毒物质测定 第24部分：钽及其化合物',
    'GBZ/T 300.25-2017 工作场所空气有毒物质测定 第25部分：铊及其化合物',
    'GBZ/T 300.26-2017 工作场所空气有毒物质测定 第26部分：锡及其无机化合物',
    'GBZ/T 300.27-2017 工作场所空气有毒物质测定 第27部分：二月桂酸二丁基锡、三甲基氯化锡和三乙基氯化锡',
    'GBZ/T 300.28-2017 工作场所空气有毒物质测定 第28部分：钨及其化合物',
    'GBZ/T 300.29-2017 工作场所空气有毒物质测定 第29部分：钒及其化合物',
    'GBZ/T 300.30-2017 工作场所空气有毒物质测定 第30部分：钇及其化合物',
    'GBZ/T 300.31-2017 工作场所空气有毒物质测定 第31部分：锌及其化合物',
    'GBZ/T 300.32-2017 工作场所空气有毒物质测定 第32部分：锆及其化合物',
    'GBZ/T 300.33-2017 工作场所空气有毒物质测定 第33部分：金属及其化合物',
    'GBZ/T 300.34-2017 工作场所空气有毒物质测定 第34部分：稀土金属及其化合物',
    'GBZ/T 300.35-2017 工作场所空气有毒物质测定 第35部分：三氟化硼',
    'GBZ/T 300.37-2017 工作场所空气有毒物质测定 第37部分：一氧化碳和二氧化碳',
    'GBZ/T 300.38-2017 工作场所空气有毒物质测定 第38部分：二硫化碳 ',
    'GBZ/T 300.43-2017 工作场所空气有毒物质测定 第43部分：叠氮酸和叠氮化钠',
    'GBZ/T 300.45-2017 工作场所空气有毒物质测定 第45部分：五氧化二磷和五硫化二磷',
    'GBZ/T 300.46-2017 工作场所空气有毒物质测定 第46部分：三氯化磷和三氯硫磷',
    'GBZ/T 300.47-2017 工作场所空气有毒物质测定 第47部分：砷及其无机化合物',
    'GBZ/T 300.48-2017 工作场所空气有毒物质测定 第48部分：臭氧和过氧化氢',
    'GBZ/T 300.51-2017 工作场所空气有毒物质测定 第51部分：六氟化硫',
    'GBZ/T 300.52-2017 工作场所空气有毒物质测定 第52部分：氯化亚砜',
    'GBZ/T 300.53-2017 工作场所空气有毒物质测定 第53部分：硒及其化合物',
    'GBZ/T 300.54-2017 工作场所空气有毒物质测定 第54部分：碲及其化合物',
    'GBZ/T 300.58-2017 工作场所空气有毒物质测定 第58部分：碘及其化合物',
    'GBZ/T 300.59-2017 工作场所空气有毒物质测定 第59部分：挥发性有机化合物',
    'GBZ/T 300.60-2017 工作场所空气有毒物质测定 第60部分：戊烷、己烷、庚烷、辛烷和壬烷',
    'GBZ/T 300.61-2017 工作场所空气有毒物质测定 第61部分：丁烯、1,3-丁二烯和二聚环戊二烯',
    'GBZ/T 300.62-2017 工作场所空气有毒物质测定 第62部分：溶剂汽油、液化石油气、抽余油和松节油',
    'GBZ/T 300.64-2017 工作场所空气有毒物质测定 第64部分：石蜡烟',
    'GBZ/T 300.65-2017 工作场所空气有毒物质测定 第65部分：环己烷和甲基环己烷',
    'GBZ/T 300.66-2017 工作场所空气有毒物质测定 第66部分：苯、甲苯、二甲苯和乙苯',
    'GBZ/T 300.68-2017 工作场所空气有毒物质测定 第68部分：苯乙烯、甲基苯乙烯和二乙烯基苯',
    'GBZ/T 300.69-2017 工作场所空气有毒物质测定 第69部分：联苯和氢化三联苯',
    'GBZ/T 300.73-2017 工作场所空气有毒物质测定 第73部分：氯甲烷、二氯甲烷、三氯甲烷和四氯化碳',
    'GBZ/T 300.77-2017 工作场所空气有毒物质测定 第77部分：四氟乙烯和六氟丙烯',
    'GBZ/T 300.78-2017 工作场所空气有毒物质测定 第78部分：氯乙烯、二氯乙烯、三氯乙烯和四氯乙烯',
    'GBZ/T 300.80-2017 工作场所空气有毒物质测定 第80部分：氯丙烯和二氯丙烯',
    'GBZ/T 300.81-2017 工作场所空气有毒物质测定 第81部分：氯苯、二氯苯和三氯苯',
    'GBZ/T 300.82-2017 工作场所空气有毒物质测定 第82部分：苄基氯和对氯甲苯',
    'GBZ/T 300.83-2017 工作场所空气有毒物质测定 第83部分：溴苯',
    'GBZ/T 300.84-2017 工作场所空气有毒物质测定 第84部分：甲醇、丙醇和辛醇',
    'GBZ/T 300.85-2017 工作场所空气有毒物质测定 第85部分：丁醇、戊醇和丙烯醇',
    'GBZ/T 300.86-2017 工作场所空气有毒物质测定 第86部分：乙二醇',
    'GBZ/T 300.88-2017 工作场所空气有毒物质测定 第88部分：氯乙醇和1,3-二氯丙醇',
    'GBZ/T 300.93-2017 工作场所空气有毒物质测定 第93部分：五氯酚和五氯酚钠',
    'GBZ/T 300.96-2018 工作场所空气有毒物质测定 第96部分：七氟烷、异氟烷和恩氟烷',
    'GBZ/T 300.97-2017 工作场所空气有毒物质测定 第97部分：二丙二醇甲醚和1-甲氧基-2-丙醇',
    'GBZ/T 300.99-2017 工作场所空气有毒物质测定 第99部分：甲醛、乙醛和丁醛',
    'GBZ/T 300.100-2018 工作场所空气有毒物质测定 第100部分：糠醛和二甲氧基甲烷',
    'GBZ/T 300.101-2017 工作场所空气有毒物质测定 第101部分：三氯乙醛',
    'GBZ/T 300.103-2017 工作场所空气有毒物质测定 第103部分：丙酮、丁酮和甲基异丁基甲酮',
    'GBZ/T 300.104-2017 工作场所空气有毒物质测定 第104部分：二乙基甲酮、2-己酮和二异丁基甲酮',
    'GBZ/T 300.106-2018 工作场所空气有毒物质测定 第106部分：氯丙酮',
    'GBZ/T 300.110-2017 工作场所空气有毒物质测定 第110部分：氢醌和间苯二酚',
    'GBZ/T 300.112-2017 工作场所空气有毒物质测定 第112部分：甲酸和乙酸',
    'GBZ/T 300.114-2017 工作场所空气有毒物质测定 第114部分：草酸和对苯二甲酸',
    'GBZ/T 300.115-2017 工作场所空气有毒物质测定 第115部分：氯乙酸',
    'GBZ/T 300.116-2018 工作场所空气有毒物质测定 第116部分：对甲苯磺酸',
    'GBZ/T 300.118-2017 工作场所空气有毒物质测定 第118部分：乙酸酐、马来酸酐和邻苯二甲酸酐',
    'GBZ/T 300.122-2017 工作场所空气有毒物质测定 第122部分：甲酸甲酯和甲酸乙酯',
    'GBZ/T 300.126-2017 工作场所空气有毒物质测定 第126部分：硫酸二甲酯和三甲苯磷酸酯',
    'GBZ/T 300.127-2017 工作场所空气有毒物质测定 第127部分：丙烯酸酯类',
    'GBZ/T 300.128-2018 工作场所空气有毒物质测定 第128部分：甲基丙烯酸酯类',
    'GBZ/T 300.129-2017 工作场所空气有毒物质测定 第129部分：氯乙酸甲酯和氯乙酸乙酯',
    'GBZ/T 300.130-2017 工作场所空气有毒物质测定 第130部分：邻苯二甲酸二丁酯和邻苯二甲酸二辛酯',
    'GBZ/T 300.132-2017 工作场所空气有毒物质测定 第132部分：甲苯二异氰酸酯、二苯基甲烷二异氰酸酯和异佛尔酮二异氰酸酯',
    'GBZ/T 300.133-2017 工作场所空气有毒物质测定 第133部分：乙腈、丙烯腈和甲基丙烯腈',
    'GBZ/T 300.134-2017 工作场所空气有毒物质测定 第134部分：丙酮氰醇和苄基氰',
    'GBZ/T 300.136-2017 工作场所空气有毒物质测定 第136部分：三甲胺、二乙胺和三乙胺',
    'GBZ/T 300.137-2017 工作场所空气有毒物质测定 第137部分：乙胺、乙二胺和环己胺',
    'GBZ/T 300.139-2017 工作场所空气有毒物质测定 第139部分：乙醇胺',
    'GBZ/T 300.140-2017 工作场所空气有毒物质测定 第140部分：肼、甲基肼和偏二甲基肼',
    'GBZ/T 300.142-2017 工作场所空气有毒物质测定 第142部分：三氯苯胺',
    'GBZ/T 300.143-2017 工作场所空气有毒物质测定 第143部分：对硝基苯胺',
    'GBZ/T 300.146-2017 工作场所空气有毒物质测定 第146部分：硝基苯、硝基甲苯和硝基氯苯',
    'GBZ/T 300.149-2017 工作场所空气有毒物质测定 第149部分：杀螟松、倍硫磷、亚胺硫磷和甲基对硫磷',
    'GBZ/T 300.150-2017 工作场所空气有毒物质测定 第150部分：敌敌畏、甲拌磷和对硫磷',
    'GBZ/T 300.151-2017 工作场所空气有毒物质测定 第151部分：久效磷、氧乐果和异稻瘟净',
    'GBZ/T 300.153-2017 工作场所空气有毒物质测定 第153部分：磷胺、内吸磷、甲基内吸磷和马拉硫磷',
    'GBZ/T 300.159-2017 工作场所空气有毒物质测定 第159部分：硝化甘油、硝基胍、奥克托今和黑索金',
    'GBZ/T 300.160-2017 工作场所空气有毒物质测定 第160部分：洗衣粉酶',
    'GBZ/T 300.161-2018 工作场所空气有毒物质测定 第161部分：三溴甲烷',
    'GBZ/T 300.162-2018 工作场所空气有毒物质测定 第162部分：苯醌',
    'GBZ/T 300.163-2018 工作场所空气有毒物质测定 第163部分：甲苯二异氰酸酯',
    'GBZ/T 300.164-2018 工作场所空气有毒物质测定 第164部分：二苯基甲烷二异氰酸酯',
    'GB/T 5700-2008 照明测量方法',
    'GB 50034-2013 建筑照明设计标准',
  ]

  let newHref = []
  let newArr = []
  // 筛选出来放进新数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes($('#ipt_search').val())) {
      newHref.push(href[i])
      newArr.push(arr[i])
    }
  }
  // 先清空
  $('tbody').empty()
  // 再根据新数组的个数渲染 tr 并放入相应的值
  for (let j = 0; j < newArr.length; j++) {
    $('tbody').append(
      `<tr>
        <th class="text-center">${j + 1}</th>
        <th>
          <a href="${newHref[j]}">${newArr[j]}</a>
        </th>
      </tr>`
    )
  }
}

find()
$('#ipt_search').on('keyup', function () {
  // 0.5s 后执行
  setTimeout(() => {
    find()
  }, 500)
})

// 常用按钮
$('#NONE').on('click', function () {
  $('#ipt_search').val('')
  find()
})
$('#NO2').on('click', function () {
  $('#ipt_search').val('氮')
  find()
})
$('#SO2').on('click', function () {
  $('#ipt_search').val('硫')
  find()
})
$('#CO2').on('click', function () {
  $('#ipt_search').val('碳')
  find()
})
$('#RJQY').on('click', function () {
  $('#ipt_search').val('溶剂汽油')
  find()
})
$('#SB').on('click', function () {
  $('#ipt_search').val('苯')
  find()
})
$('#WAN').on('click', function () {
  $('#ipt_search').val('烷')
  find()
})
