var arr_wendu = [
  // 定义温度函数
  function () {
    let num = $('#ipt_wendu').val() - 0
    $('#s2').html((num + 0.2).toFixed(1))
    $('#s3').html((num + 0.4).toFixed(1))
    $('#s4').html((num + 0.6).toFixed(1))
    $('#s5').html((num + 0.8).toFixed(1))
    $('#s6').html((num + 1.0).toFixed(1))
    $('#s7').html((num + 1.2).toFixed(1))
    $('#s8').html((num + 1.4).toFixed(1))
    $('#s9').html((num + 1.6).toFixed(1))
    $('#s10').html((num + 1.8).toFixed(1))
    $('#s11').html((num + 2.0).toFixed(1))
    $('#s12').html((num + 2.2).toFixed(1))
    $('#s13').html((num + 2.4).toFixed(1))

    $('#x1').html((num + 2.4).toFixed(1))
    $('#x2').html((num + 2.2).toFixed(1))
    $('#x3').html((num + 2.0).toFixed(1))
    $('#x4').html((num + 1.8).toFixed(1))
    $('#x5').html((num + 1.6).toFixed(1))
    $('#x6').html((num + 1.4).toFixed(1))
    $('#x7').html((num + 1.2).toFixed(1))
    $('#x8').html((num + 1.0).toFixed(1))
    $('#x9').html((num + 0.8).toFixed(1))
    $('#x10').html((num + 0.6).toFixed(1))
    $('#x11').html((num + 0.4).toFixed(1))
    $('#x12').html((num + 0.2).toFixed(1))
    $('#x13').html(num.toFixed(1))
  },
  // 定义湿度函数
  function () {
    for (let i = 1; i <= 100; i++) {
      $('#sd' + i).html((Math.random() * 3 + 51).toFixed(1))
    }
  },
]

arr_wendu[0]()
arr_wendu[1]()
$('#ipt_wendu').on('keyup', function () {
  arr_wendu[0]()
  arr_wendu[1]()
})
