let arr_zhaodu = [
  undefined,
  // 第一个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu1').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu1').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu1').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu1').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd1' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd11').html() === $('#zd12').html() ||
      $('#zd11').html() === $('#zd13').html() ||
      $('#zd11').html() === $('#zd14').html() ||
      $('#zd12').html() === $('#zd13').html() ||
      $('#zd12').html() === $('#zd14').html() ||
      $('#zd13').html() === $('#zd14').html()
    ) {
      arr_zhaodu[1]()
    }
  },
  // 第二个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu2').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu2').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu2').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu2').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd2' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd21').html() === $('#zd22').html() ||
      $('#zd21').html() === $('#zd23').html() ||
      $('#zd21').html() === $('#zd24').html() ||
      $('#zd22').html() === $('#zd23').html() ||
      $('#zd22').html() === $('#zd24').html() ||
      $('#zd23').html() === $('#zd24').html()
    ) {
      arr_zhaodu[2]()
    }
  },
  // 第三个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu3').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu3').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu3').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu3').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd3' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd31').html() === $('#zd32').html() ||
      $('#zd31').html() === $('#zd33').html() ||
      $('#zd31').html() === $('#zd34').html() ||
      $('#zd32').html() === $('#zd33').html() ||
      $('#zd32').html() === $('#zd34').html() ||
      $('#zd33').html() === $('#zd34').html()
    ) {
      arr_zhaodu[3]()
    }
  },
  // 第四个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu4').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu4').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu4').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu4').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd4' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd41').html() === $('#zd42').html() ||
      $('#zd41').html() === $('#zd43').html() ||
      $('#zd41').html() === $('#zd44').html() ||
      $('#zd42').html() === $('#zd43').html() ||
      $('#zd42').html() === $('#zd44').html() ||
      $('#zd43').html() === $('#zd44').html()
    ) {
      arr_zhaodu[4]()
    }
  },
  // 第五个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu5').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu5').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu5').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu5').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd5' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd51').html() === $('#zd52').html() ||
      $('#zd51').html() === $('#zd53').html() ||
      $('#zd51').html() === $('#zd54').html() ||
      $('#zd52').html() === $('#zd53').html() ||
      $('#zd52').html() === $('#zd54').html() ||
      $('#zd53').html() === $('#zd54').html()
    ) {
      arr_zhaodu[5]()
    }
  },
  // 第六个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu6').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu6').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu6').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu6').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd6' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd61').html() === $('#zd62').html() ||
      $('#zd61').html() === $('#zd63').html() ||
      $('#zd61').html() === $('#zd64').html() ||
      $('#zd62').html() === $('#zd63').html() ||
      $('#zd62').html() === $('#zd64').html() ||
      $('#zd63').html() === $('#zd64').html()
    ) {
      arr_zhaodu[6]()
    }
  },
  // 第七个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu7').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu7').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu7').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu7').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd7' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd71').html() === $('#zd72').html() ||
      $('#zd71').html() === $('#zd73').html() ||
      $('#zd71').html() === $('#zd74').html() ||
      $('#zd72').html() === $('#zd73').html() ||
      $('#zd72').html() === $('#zd74').html() ||
      $('#zd73').html() === $('#zd74').html()
    ) {
      arr_zhaodu[7]()
    }
  },
  // 第八个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu8').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu8').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu8').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu8').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd8' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd81').html() === $('#zd82').html() ||
      $('#zd81').html() === $('#zd83').html() ||
      $('#zd81').html() === $('#zd84').html() ||
      $('#zd82').html() === $('#zd83').html() ||
      $('#zd82').html() === $('#zd84').html() ||
      $('#zd83').html() === $('#zd84').html()
    ) {
      arr_zhaodu[8]()
    }
  },
  // 第九个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu9').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu9').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu9').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu9').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd9' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd91').html() === $('#zd92').html() ||
      $('#zd91').html() === $('#zd93').html() ||
      $('#zd91').html() === $('#zd94').html() ||
      $('#zd92').html() === $('#zd93').html() ||
      $('#zd92').html() === $('#zd94').html() ||
      $('#zd93').html() === $('#zd94').html()
    ) {
      arr_zhaodu[9]()
    }
  },
  // 第十个的函数
  function () {
    let arr_zd = [
      NaN,
      $('#ipt_zhaodu10').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu10').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu10').val() - 0 + Math.floor(Math.random() * 16),
      $('#ipt_zhaodu10').val() - 0 + Math.floor(Math.random() * 16),
    ]
    // 四个照度的随机值
    for (let i = 1; i <= 4; i++) {
      $('#zd10' + i).text(arr_zd[i])
    }
    // 出现重复值时换新值
    if (
      $('#zd101').html() === $('#zd102').html() ||
      $('#zd101').html() === $('#zd103').html() ||
      $('#zd101').html() === $('#zd104').html() ||
      $('#zd102').html() === $('#zd103').html() ||
      $('#zd102').html() === $('#zd104').html() ||
      $('#zd103').html() === $('#zd104').html()
    ) {
      arr_zhaodu[10]()
    }
  },
]
// 进入页面先调用
for (let i = 1; i <= 10; i++) {
  arr_zhaodu[i]()
}
// 输入框改变时调用
for (let i = 1; i <= 10; i++) {
  $('#ipt_zhaodu' + i).on('keyup', function () {
    arr_zhaodu[i]()
  })
}
