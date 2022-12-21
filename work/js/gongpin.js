let arr_gongpin = [
  undefined,
  // 第一个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin1').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin1').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin1').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp1' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp11').html() === $('#gp12').html() ||
      $('#gp11').html() === $('#gp13').html() ||
      $('#gp12').html() === $('#gp13').html()
    ) {
      arr_gongpin[1]()
    }
    // 第四个数值是前三个的平均值
    $('#gp14').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第二个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin2').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin2').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin2').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp2' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp21').html() === $('#gp22').html() ||
      $('#gp21').html() === $('#gp23').html() ||
      $('#gp22').html() === $('#gp23').html()
    ) {
      arr_gongpin[2]()
    }
    // 第四个数值是前三个的平均值
    $('#gp24').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第三个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin3').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin3').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin3').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp3' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp31').html() === $('#gp32').html() ||
      $('#gp31').html() === $('#gp33').html() ||
      $('#gp32').html() === $('#gp33').html()
    ) {
      arr_gongpin[3]()
    }
    // 第四个数值是前三个的平均值
    $('#gp34').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第四个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin4').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin4').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin4').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp4' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp41').html() === $('#gp42').html() ||
      $('#gp41').html() === $('#gp43').html() ||
      $('#gp42').html() === $('#gp43').html()
    ) {
      arr_gongpin[4]()
    }
    // 第四个数值是前三个的平均值
    $('#gp44').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第五个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin5').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin5').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin5').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp5' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp51').html() === $('#gp52').html() ||
      $('#gp51').html() === $('#gp53').html() ||
      $('#gp52').html() === $('#gp53').html()
    ) {
      arr_gongpin[5]()
    }
    // 第四个数值是前三个的平均值
    $('#gp54').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第六个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin6').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin6').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin6').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp6' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp61').html() === $('#gp62').html() ||
      $('#gp61').html() === $('#gp63').html() ||
      $('#gp62').html() === $('#gp63').html()
    ) {
      arr_gongpin[6]()
    }
    // 第四个数值是前三个的平均值
    $('#gp64').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第七个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin7').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin7').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin7').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp7' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp71').html() === $('#gp72').html() ||
      $('#gp71').html() === $('#gp73').html() ||
      $('#gp72').html() === $('#gp73').html()
    ) {
      arr_gongpin[7]()
    }
    // 第四个数值是前三个的平均值
    $('#gp74').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第八个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin8').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin8').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin8').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp8' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp81').html() === $('#gp82').html() ||
      $('#gp81').html() === $('#gp83').html() ||
      $('#gp82').html() === $('#gp83').html()
    ) {
      arr_gongpin[8]()
    }
    // 第四个数值是前三个的平均值
    $('#gp84').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第九个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin9').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin9').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin9').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp9' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp91').html() === $('#gp92').html() ||
      $('#gp91').html() === $('#gp93').html() ||
      $('#gp92').html() === $('#gp93').html()
    ) {
      arr_gongpin[9]()
    }
    // 第四个数值是前三个的平均值
    $('#gp94').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
  // 第十个函数
  function () {
    let arr_gp = [
      NaN,
      ($('#ipt_gongpin10').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin10').val() - 0.005 + Math.random() * 0.01).toFixed(3),
      ($('#ipt_gongpin10').val() - 0.005 + Math.random() * 0.01).toFixed(3),
    ]
    // 前三个工频的随机值
    for (let i = 1; i <= 3; i++) {
      $('#gp10' + i).text(arr_gp[i])
    }
    // 出现重复值时换新值
    if (
      $('#gp101').html() === $('#gp102').html() ||
      $('#gp101').html() === $('#gp103').html() ||
      $('#gp102').html() === $('#gp103').html()
    ) {
      arr_gongpin[10]()
    }
    // 第四个数值是前三个的平均值
    $('#gp104').text(
      (
        (parseFloat(arr_gp[1]) +
          parseFloat(arr_gp[2]) +
          parseFloat(arr_gp[3])) /
        3
      ).toFixed(3)
    )
  },
]
// 进入页面先调用
for (let i = 1; i <= 10; i++) {
  arr_gongpin[i]()
}
// 输入框改变时调用
for (let i = 1; i <= 10; i++) {
  $('#ipt_gongpin' + i).on('keyup', function () {
    arr_gongpin[i]()
  })
}
