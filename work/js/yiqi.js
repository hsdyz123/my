// 项目
let item = [
  {
    name: '个体噪声',
    iid: 'GZS',
  },
  {
    name: '个体粉尘',
    iid: 'GFC',
  },
  {
    name: '个体大气',
    iid: 'GDQ',
  },
  {
    name: '定点噪声',
    iid: 'ZS',
  },
  {
    name: '定点粉尘	',
    iid: 'FC',
  },
  {
    name: '定点大气',
    iid: 'DQ',
  },
  {
    name: '定点高温	',
    iid: 'GW',
  },
  {
    name: '定点工频',
    iid: 'GP',
  },
  {
    name: '定点电磁',
    iid: 'DC',
  },
  {
    name: '定点紫外',
    iid: 'ZW',
  },
  {
    name: '定点手传',
    iid: 'SC',
  },
  {
    name: '定点照度',
    iid: 'ZD',
  },
  {
    name: '温湿度计',
    iid: 'WS',
  },
  {
    name: '定点风速',
    iid: 'FS',
  },
  {
    name: '定点压力',
    iid: 'YL',
  },
]
// 产生表格
for (let i = 0; i < item.length; i++) {
  $('tbody').append(`
    <tr>
      <td>${item[i].name}</td>
      <td id="${item[i].iid}"></td>
    </tr>
  `)
}

// 表格具体内容
// 个体噪声
let gzs = [
  '044个人声暴露计HS5628B',
  '045个人声暴露计HS5628B',
  '085个人声暴露计HS5628B',
  '086个人声暴露计HS5628B',
  '087个人声暴露计HS5628B',
  '088个人声暴露计HS5628B',
  '089个人声暴露计HS5628B',
  '090个人声暴露计HS5628B',
  '091个人声暴露计HS5628B',
  '092个人声暴露计HS5628B',
  '099个人声暴露计HS5628B',
  '100个人声暴露计HS5628B',
  '101个人声暴露计HS5628B',
  '102个人声暴露计HS5628B',
  '103个人声暴露计HS5628B',
  '104个人声暴露计HS5628B',
  '105个人声暴露计（防爆）ASV5910',
  '110个人声暴露计（防爆）ASV5910',
  '133防爆个人声暴露计HS5628BF',
  '134防爆个人声暴露计HS5628BF',
  '135防爆个人声暴露计HS5628BF',
  '144个人声暴露计HS5910',
  '145个人声暴露计HS5910',
  '146个人声暴露计HS5910',
  '147防爆个人声暴露计HS5628BF',
  '148防爆个人声暴露计HS5628BF',
  '199个人声暴露计HS5910',
  '200个人声暴露计HS5910',
  '201个人声暴露计HS5910',
  '202个人声暴露计HS5910',
  '203个人声暴露计HS5910',
  '204个人声暴露计HS5910',
  '205个人声暴露计HS5910',
  '206个人声暴露计HS5910',
  '207个人声暴露计HS5910',
  '208个人声暴露计HS5910',
  '209个人声暴露计HS5910',
  '210个人声暴露计HS5910',
  '211个人声暴露计HS5910',
  '212个人声暴露计HS5910',
  '213个人声暴露计HS5910',
  '214本安型个人声暴露计HS5910',
  '215本安型个人声暴露计HS5910',
  '216本安型个人声暴露计HS5910',
  '217本安型个人声暴露计HS5910',
]
// 个体粉尘
let gfc = [
  '021个体粉尘采样器GFC-5',
  '022个体粉尘采样器GFC-5',
  '023个体粉尘采样器GFC-5',
  '024防爆个体粉尘采样器GFC-5B',
  '025防爆个体粉尘采样器GFC-5B',
  '026个体粉尘采样器GFC-5',
  '027个体粉尘采样器GFC-5',
  '028个体粉尘采样器GFC-5',
  '029个体粉尘采样器GFC-5',
  '030防爆个体粉尘采样器GFC-5B',
  '031防爆个体粉尘采样器GFC-5B',
  '117防爆型个体粉尘采样器GFC-5B',
  '118防爆型个体粉尘采样器GFC-5B',
  '119个体粉尘采样器GFC-5',
  '120个体粉尘采样器GFC-5',
  '139防爆个体粉尘采样器GFC-5B',
  '140防爆个体粉尘采样器GFC-5B',
  '141个体粉尘采样器GFC-5',
  '142个体粉尘采样器GFC-5',
  '143个体粉尘采样器GFC-5',
  '218个体粉尘采样仪GFC-5',
  '219个体粉尘采样仪GFC-5',
  '220个体粉尘采样仪GFC-5',
  '221个体粉尘采样仪GFC-5',
  '222个体粉尘采样仪GFC-5',
  '223个体粉尘采样仪GFC-5',
  '224个体粉尘采样仪GFC-5',
  '225个体粉尘采样仪GFC-5',
  '226个体粉尘采样仪GFC-5',
  '227个体粉尘采样仪GFC-5',
]
// 个体大气
let gdq = [
  '011防爆个体大气采样器GQC-2',
  '012防爆个体大气采样器GQC-2',
  '013防爆个体大气采样器GQC-2',
  '014防爆个体大气采样器GQC-2',
  '016个体大气采样器GQC-2',
  '017个体大气采样器GQC-2',
  '115个体大气采样器GQC-2',
  '116个体大气采样器GQC-2',
  '228防爆个体大气采样仪GQC-2',
  '229防爆个体大气采样仪GQC-2',
  '230防爆个体大气采样仪GQC-2',
  '231防爆个体大气采样仪GQC-2',
]
// 噪声
let zs = [
  '035本安型噪声分析仪YSD130',
  '046倍频程声级计HS5628B',
  '149倍频程声级计HS5628B',
  '238噪声分析仪YSD130',
  '239噪声分析仪YSD130',
]
// 粉尘
let fc = [
  '032防爆粉尘采样器ICF-2',
  '034粉尘采样器BFC-35D',
  '036防爆粉尘采样器FDC-20',
  '121防爆型粉尘采样器IFC-2',
  '154粉尘采样器（防爆）IFC-2',
  '155粉尘采样器（防爆）IFC-2',
  '156粉尘采样器（防爆）IFC-2',
  '232防爆粉尘采样仪IFC-2',
  '233防爆粉尘采样仪IFC-2',
  '234防爆粉尘采样仪IFC-2',
  '235防爆粉尘采样仪IFC-2',
]
// 大气
let dq = [
  '019防爆大气采样器QC-4S',
  '020防爆大气采样器QC-4S',
  '095防爆大气采样器QC-4S',
  '096防爆大气采样器QC-4S',
  '097防爆大气采样器QC-4S',
  '098防爆大气采样器QC-4S',
  '243大气采样仪QC-5',
  '244大气采样仪QC-5',
]
// 高温
let gw = [
  '039黑球、湿球温度计LY-09',
  '106WBGT指数计LY-09',
  '237WBGT指数计LY-09',
]
// 工频
let gp = ['052工频电场测定仪H-3A', '112工频电场测定仪HI3604']
// 电磁辐射
let dc = ['186工频电磁辐射测量仪XC150', '187电磁辐射分析仪G150']
// 紫外
let zw = [
  '054紫外辐照计UV-B',
  '078紫外辐照计TN2340',
  '241紫外辐照计UV-A',
  '242紫外辐照计UV-B',
]
// 手传
let sc = ['181手传振动测定仪']
// 照度
let zd = [
  '041照度计TES-1332A',
  '111照度计TES-1332A',
  '240数位式照度计TES-1332A',
]
// 温湿度
let ws = ['038温湿度计TES-1360A', '108温湿度计TES-136A', '236湿度计TESTO610']
// 风速
let fs = ['043风速仪AVM-01', '107热球微风速仪QDF-6']
// 压力
let yl = ['109空盒压力计DYM3', '180空盒压力计DYM3']

// 排版进去
// 个体噪声
for (let i = 0; i < gzs.length; i++) {
  $('#GZS').append(`
    <label>
      <input type="checkbox"/>${gzs[i]}
    </label><br />
  `)
}
// 个体粉尘
for (let i = 0; i < gfc.length; i++) {
  $('#GFC').append(`
    <label>
      <input type="checkbox"/>${gfc[i]}
    </label><br />
  `)
}
// 个体大气
for (let i = 0; i < gdq.length; i++) {
  $('#GDQ').append(`
    <label>
      <input type="checkbox"/>${gdq[i]}
    </label><br />
  `)
}
// 噪声
for (let i = 0; i < zs.length; i++) {
  $('#ZS').append(`
    <label>
      <input type="checkbox"/>${zs[i]}
    </label><br />
  `)
}
// 粉尘
for (let i = 0; i < fc.length; i++) {
  $('#FC').append(`
    <label>
      <input type="checkbox"/>${fc[i]}
    </label><br />
  `)
}
// 大气
for (let i = 0; i < dq.length; i++) {
  $('#DQ').append(`
    <label>
      <input type="checkbox"/>${dq[i]}
    </label><br />
  `)
}
// 高温
for (let i = 0; i < gw.length; i++) {
  $('#GW').append(`
    <label>
      <input type="checkbox"/>${gw[i]}
    </label><br />
  `)
}
// 工频
for (let i = 0; i < gp.length; i++) {
  $('#GP').append(`
    <label>
      <input type="checkbox"/>${gp[i]}
    </label><br />
  `)
}
// 电磁
for (let i = 0; i < dc.length; i++) {
  $('#DC').append(`
    <label>
      <input type="checkbox"/>${dc[i]}
    </label><br />
  `)
}
// 紫外
for (let i = 0; i < zw.length; i++) {
  $('#ZW').append(`
    <label>
      <input type="checkbox"/>${zw[i]}
    </label><br />
  `)
}
// 手传
for (let i = 0; i < sc.length; i++) {
  $('#SC').append(`
    <label>
      <input type="checkbox"/>${sc[i]}
    </label><br />
  `)
}
// 照度
for (let i = 0; i < zd.length; i++) {
  $('#ZD').append(`
    <label>
      <input type="checkbox"/>${zd[i]}
    </label><br />
  `)
}
// 温湿
for (let i = 0; i < ws.length; i++) {
  $('#WS').append(`
    <label>
      <input type="checkbox"/>${ws[i]}
    </label><br />
  `)
}
// 风速
for (let i = 0; i < fs.length; i++) {
  $('#FS').append(`
    <label>
      <input type="checkbox"/>${fs[i]}
    </label><br />
  `)
}
// 压力
for (let i = 0; i < yl.length; i++) {
  $('#YL').append(`
    <label>
      <input type="checkbox"/>${yl[i]}
    </label><br />
  `)
}
