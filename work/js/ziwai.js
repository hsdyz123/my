let arr_ziwai = [
  // 定义紫外函数
  function () {
    var num1 = $('#ipt_ziwai1').val() - 0
    var num2 = $('#ipt_ziwai2').val() - 0
    var num3 = $('#ipt_ziwai3').val() - 0
    var num = num1 * 0.00011 + num2 * 0.64 + num3 * 0.5
    $('#jieguo_ziwai').html(num.toFixed(2))
  },
]

arr_ziwai[0]()
for (let i = 1; i <= 10; i++) {
  $('#ipt_ziwai1').on('keyup', function () {
    arr_ziwai[0]()
  })
}

// 自动刷新三个数据
$('#btn_ziwai').on('click', function () {
  let arr_ziwai_new = [
    NaN,
    (0.16 - 0.05 + Math.random() * 0.1).toFixed(2) - 0,
    (0.15 - 0.03 + Math.random() * 0.05).toFixed(2) - 0,
    (0.17 - 0.05 + Math.random() * 0.1).toFixed(2) - 0,
  ]
  for (let i = 1; i <= 3; i++) {
    $('#ipt_ziwai' + i).val(arr_ziwai_new[i].toFixed(2))
  }
  arr_ziwai[0]()
})
