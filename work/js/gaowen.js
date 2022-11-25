let arr_gaowen = [
  // 定义高温函数
  function () {
    let arr_gw = [
      $('#ipt_gaowen1').val() - 0,
      $('#ipt_gaowen2').val() - 0,
      $('#ipt_gaowen3').val() - 0,
    ]
    let num = (arr_gw[0] + arr_gw[1] + arr_gw[2]) / 3
    $('#jieguo_gaowen').html(num.toFixed(1))
  },
]
arr_gaowen[0]()
for (let i = 1; i <= 3; i++) {
  $('#ipt_gaowen' + i).on('keyup', function () {
    arr_gaowen[0]()
  })
}

// 自动刷新三个数据
$('#btn_gaowen').on('click', function () {
  let arr_gaowen_new = [
    NaN,
    (22 - 0.5 + Math.random() * 0.8).toFixed(1),
    (22 - 0.5 + Math.random() * 0.8).toFixed(1),
    (22 - 0.5 + Math.random() * 0.8).toFixed(1),
  ]
  for (let i = 1; i <= 3; i++) {
    $('#ipt_gaowen' + i).val(parseFloat(arr_gaowen_new[i]).toFixed(1))
  }
  arr_gaowen[0]()
})
