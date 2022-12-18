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

// 输入框改变时修改数据
for (let i = 1; i <= 3; i++) {
  $('#ipt_gaowen' + i).on('keyup', function () {
    arr_gaowen[0]()
  })
}

// 自动刷新三个数据
$('#btn_gaowen').on('click', function () {
  let arr_gaowen_new_2 = parseFloat((22 + Math.random() * 0.5).toFixed(1))

  let arr_gaowen_new_1 = parseFloat(
    (arr_gaowen_new_2 - 0.8 + Math.random() * 0.6).toFixed(1)
  )
  let arr_gaowen_new_3 = parseFloat(
    (arr_gaowen_new_2 - 0.8 + Math.random() * 0.6).toFixed(1)
  )

  let arr_gaowen_new = [arr_gaowen_new_1, arr_gaowen_new_2, arr_gaowen_new_3]

  $('#ipt_gaowen1').val(arr_gaowen_new[0])
  $('#ipt_gaowen2').val(arr_gaowen_new[1])
  $('#ipt_gaowen3').val(arr_gaowen_new[2])

  arr_gaowen[0]()
})
