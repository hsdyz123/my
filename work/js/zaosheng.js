var arr_zaosheng = [
  undefined,
  // 第一个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng1').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng1').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng1').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs1' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs11').html() === $('#zs12').html() ||
      $('#zs11').html() === $('#zs13').html() ||
      $('#zs12').html() === $('#zs13').html()
    ) {
      arr_zaosheng[1]()
    }
    // 第四个数值是前三个的平均值
    $('#zs14').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第二个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng2').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng2').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng2').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs2' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs21').html() === $('#zs22').html() ||
      $('#zs21').html() === $('#zs23').html() ||
      $('#zs22').html() === $('#zs23').html()
    ) {
      arr_zaosheng[2]()
    }
    // 第四个数值是前三个的平均值
    $('#zs24').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第三个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng3').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng3').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng3').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs3' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs31').html() === $('#zs32').html() ||
      $('#zs31').html() === $('#zs33').html() ||
      $('#zs32').html() === $('#zs33').html()
    ) {
      arr_zaosheng[3]()
    }
    // 第四个数值是前三个的平均值
    $('#zs34').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第四个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng4').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng4').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng4').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs4' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs41').html() === $('#zs42').html() ||
      $('#zs41').html() === $('#zs43').html() ||
      $('#zs42').html() === $('#zs43').html()
    ) {
      arr_zaosheng[4]()
    }
    // 第四个数值是前三个的平均值
    $('#zs44').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第五个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng5').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng5').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng5').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs5' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs51').html() === $('#zs52').html() ||
      $('#zs51').html() === $('#zs53').html() ||
      $('#zs52').html() === $('#zs53').html()
    ) {
      arr_zaosheng[5]()
    }
    // 第四个数值是前三个的平均值
    $('#zs54').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第六个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng6').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng6').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng6').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs6' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs61').html() === $('#zs62').html() ||
      $('#zs61').html() === $('#zs63').html() ||
      $('#zs62').html() === $('#zs63').html()
    ) {
      arr_zaosheng[6]()
    }
    // 第四个数值是前三个的平均值
    $('#zs64').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第七个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng7').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng7').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng7').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs7' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs71').html() === $('#zs72').html() ||
      $('#zs71').html() === $('#zs73').html() ||
      $('#zs72').html() === $('#zs73').html()
    ) {
      arr_zaosheng[7]()
    }
    // 第四个数值是前三个的平均值
    $('#zs74').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第八个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng8').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng8').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng8').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs8' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs81').html() === $('#zs82').html() ||
      $('#zs81').html() === $('#zs83').html() ||
      $('#zs82').html() === $('#zs83').html()
    ) {
      arr_zaosheng[8]()
    }
    // 第四个数值是前三个的平均值
    $('#zs84').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第九个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng9').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng9').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng9').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs9' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs91').html() === $('#zs92').html() ||
      $('#zs91').html() === $('#zs93').html() ||
      $('#zs92').html() === $('#zs93').html()
    ) {
      arr_zaosheng[9]()
    }
    // 第四个数值是前三个的平均值
    $('#zs94').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
  // 第十个的函数
  function () {
    let arr_zs = [
      NaN,
      ($('#ipt_zaosheng10').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng10').val() - 1.0 + Math.random() * 2).toFixed(1),
      ($('#ipt_zaosheng10').val() - 1.0 + Math.random() * 2).toFixed(1),
    ]
    // 前三个噪声的随机值
    for (let i = 1; i <= 3; i++) {
      $('#zs10' + i).text(arr_zs[i])
    }
    // 出现重复值时换新值
    if (
      $('#zs101').html() === $('#zs102').html() ||
      $('#zs101').html() === $('#zs103').html() ||
      $('#zs102').html() === $('#zs103').html()
    ) {
      arr_zaosheng[10]()
    }
    // 第四个数值是前三个的平均值
    $('#zs104').text(
      (
        (parseFloat(arr_zs[1]) +
          parseFloat(arr_zs[2]) +
          parseFloat(arr_zs[3])) /
        3
      ).toFixed(1)
    )
  },
]
// 进入页面先调用
for (let i = 1; i <= 10; i++) {
  arr_zaosheng[i]()
}
// 输入框改变时调用
for (let i = 1; i <= 10; i++) {
  $('#ipt_zaosheng' + i).on('keyup', function () {
    arr_zaosheng[i]()
  })
}
