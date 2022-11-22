// 第一个的函数
function zd1() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd1' + i).text(
      $('#ipt_zhaodu1').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第二个的函数
function zd2() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd2' + i).text(
      $('#ipt_zhaodu2').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第三个的函数
function zd3() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd3' + i).text(
      $('#ipt_zhaodu3').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第四个的函数
function zd4() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd4' + i).text(
      $('#ipt_zhaodu4').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第五个的函数
function zd5() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd5' + i).text(
      $('#ipt_zhaodu5').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第六个的函数
function zd6() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd6' + i).text(
      $('#ipt_zhaodu6').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第七个的函数
function zd7() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd7' + i).text(
      $('#ipt_zhaodu7').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第八个的函数
function zd8() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd8' + i).text(
      $('#ipt_zhaodu8').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第九个的函数
function zd9() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd9' + i).text(
      $('#ipt_zhaodu9').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}
// 第十个的函数
function zd10() {
  // 四个照度的随机值
  for (let i = 1; i <= 4; i++) {
    $('#zd10' + i).text(
      $('#ipt_zhaodu10').val() - 0 + Math.floor(Math.random() * 16)
    )
  }
}

// 进入页面先调用
zd1()
zd2()
zd3()
zd4()
zd5()
zd6()
zd7()
zd8()
zd9()
zd10()

// 输入框改变时调用
$('#ipt_zhaodu1').on('keyup', function () {
  zd1()
})
$('#ipt_zhaodu2').on('keyup', function () {
  zd2()
})
$('#ipt_zhaodu3').on('keyup', function () {
  zd3()
})
$('#ipt_zhaodu4').on('keyup', function () {
  zd4()
})
$('#ipt_zhaodu5').on('keyup', function () {
  zd5()
})
$('#ipt_zhaodu6').on('keyup', function () {
  zd6()
})
$('#ipt_zhaodu7').on('keyup', function () {
  zd7()
})
$('#ipt_zhaodu8').on('keyup', function () {
  zd8()
})
$('#ipt_zhaodu9').on('keyup', function () {
  zd9()
})
$('#ipt_zhaodu10').on('keyup', function () {
  zd10()
})
