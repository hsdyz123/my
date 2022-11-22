// 第一个的函数
function zs1() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs1' + i).text(
      ($('#ipt_zaosheng1').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs14').text(
    (
      (parseFloat($('#zs11').text()) +
        parseFloat($('#zs12').text()) +
        parseFloat($('#zs13').text())) /
      3
    ).toFixed(1)
  )
}
// 第二个的函数
function zs2() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs2' + i).text(
      ($('#ipt_zaosheng2').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs24').text(
    (
      (parseFloat($('#zs21').text()) +
        parseFloat($('#zs22').text()) +
        parseFloat($('#zs23').text())) /
      3
    ).toFixed(1)
  )
}
// 第三个的函数
function zs3() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs3' + i).text(
      ($('#ipt_zaosheng3').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs34').text(
    (
      (parseFloat($('#zs31').text()) +
        parseFloat($('#zs32').text()) +
        parseFloat($('#zs33').text())) /
      3
    ).toFixed(1)
  )
}
// 第四个的函数
function zs4() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs4' + i).text(
      ($('#ipt_zaosheng4').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs44').text(
    (
      (parseFloat($('#zs41').text()) +
        parseFloat($('#zs42').text()) +
        parseFloat($('#zs43').text())) /
      3
    ).toFixed(1)
  )
}
// 第五个的函数
function zs5() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs5' + i).text(
      ($('#ipt_zaosheng5').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs54').text(
    (
      (parseFloat($('#zs51').text()) +
        parseFloat($('#zs52').text()) +
        parseFloat($('#zs53').text())) /
      3
    ).toFixed(1)
  )
}
// 第六个的函数
function zs6() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs6' + i).text(
      ($('#ipt_zaosheng6').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs64').text(
    (
      (parseFloat($('#zs61').text()) +
        parseFloat($('#zs62').text()) +
        parseFloat($('#zs63').text())) /
      3
    ).toFixed(1)
  )
}
// 第七个的函数
function zs7() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs7' + i).text(
      ($('#ipt_zaosheng7').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs74').text(
    (
      (parseFloat($('#zs71').text()) +
        parseFloat($('#zs72').text()) +
        parseFloat($('#zs73').text())) /
      3
    ).toFixed(1)
  )
}
// 第八个的函数
function zs8() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs8' + i).text(
      ($('#ipt_zaosheng8').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs84').text(
    (
      (parseFloat($('#zs81').text()) +
        parseFloat($('#zs82').text()) +
        parseFloat($('#zs83').text())) /
      3
    ).toFixed(1)
  )
}
// 第九个的函数
function zs9() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs9' + i).text(
      ($('#ipt_zaosheng9').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs94').text(
    (
      (parseFloat($('#zs91').text()) +
        parseFloat($('#zs92').text()) +
        parseFloat($('#zs93').text())) /
      3
    ).toFixed(1)
  )
}
// 第十个的函数
function zs10() {
  // 前三个噪声的随机值
  for (let i = 1; i <= 3; i++) {
    $('#zs10' + i).text(
      ($('#ipt_zaosheng10').val() - 1.0 + Math.random() * 2).toFixed(1)
    )
  }
  // 第四个数值是前三个的平均值
  $('#zs104').text(
    (
      (parseFloat($('#zs101').text()) +
        parseFloat($('#zs102').text()) +
        parseFloat($('#zs103').text())) /
      3
    ).toFixed(1)
  )
}

// 进入页面先调用
zs1()
zs2()
zs3()
zs4()
zs5()
zs6()
zs7()
zs8()
zs9()
zs10()

// 输入框改变时调用
$('#ipt_zaosheng1').on('keyup', function () {
  zs1()
})
$('#ipt_zaosheng2').on('keyup', function () {
  zs2()
})
$('#ipt_zaosheng3').on('keyup', function () {
  zs3()
})
$('#ipt_zaosheng4').on('keyup', function () {
  zs4()
})
$('#ipt_zaosheng5').on('keyup', function () {
  zs5()
})
$('#ipt_zaosheng6').on('keyup', function () {
  zs6()
})
$('#ipt_zaosheng7').on('keyup', function () {
  zs7()
})
$('#ipt_zaosheng8').on('keyup', function () {
  zs8()
})
$('#ipt_zaosheng9').on('keyup', function () {
  zs9()
})
$('#ipt_zaosheng10').on('keyup', function () {
  zs10()
})
