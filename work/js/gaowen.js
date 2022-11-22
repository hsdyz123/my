function gaowen() {
  var num1 = $('#ipt_gaowen1').val() - 0
  var num2 = $('#ipt_gaowen2').val() - 0
  var num3 = $('#ipt_gaowen3').val() - 0
  var num = (num1 + num2 + num3) / 3
  $('#jieguo_gaowen').html(num.toFixed(1))
}
gaowen()
$('#ipt_gaowen1').on('keyup', function () {
  gaowen()
})
$('#ipt_gaowen2').on('keyup', function () {
  gaowen()
})
$('#ipt_gaowen3').on('keyup', function () {
  gaowen()
})

// 自动刷新三个数据
$('#btn_gaowen').on('click', function () {
  $('#ipt_gaowen1').val((22 - 0.5 + Math.random() * 0.8).toFixed(1) - 0)
  $('#ipt_gaowen2').val((22 - 0.2 + Math.random() * 1.0).toFixed(1) - 0)
  $('#ipt_gaowen3').val((22 - 0.5 + Math.random() * 0.8).toFixed(1) - 0)
  gaowen()
})
