let arr_shouchuan = [
  undefined,
  // 2h
  function sc_2h() {
    let arr_sc = [
      NaN,
      (2.8 + Math.random() * 2).toFixed(1),
      (2.8 + Math.random() * 2).toFixed(1),
      (2.8 + Math.random() * 2).toFixed(1),
    ]
    for (let i = 1; i <= 3; i++) {
      $('#sc' + i).text(arr_sc[i])
    }
    let sc_4 = (
      Math.max(arr_sc[1], arr_sc[2], arr_sc[3]) * Math.sqrt(0.5)
    ).toFixed(1)
    $('#sc4').text(sc_4)
  },
  // 4h
  function sc_4h() {
    let arr_sc = [
      NaN,
      (2.5 + Math.random() * 2).toFixed(1),
      (2.5 + Math.random() * 2).toFixed(1),
      (2.5 + Math.random() * 2).toFixed(1),
    ]
    for (let i = 1; i <= 3; i++) {
      $('#sc' + i).text(arr_sc[i])
    }
    let sc_4 = Math.max(arr_sc[1], arr_sc[2], arr_sc[3]).toFixed(1)
    $('#sc4').text(sc_4)
  },
  // 6h
  function sc_6h() {
    let arr_sc = [
      NaN,
      (2.0 + Math.random() * 2).toFixed(1),
      (2.0 + Math.random() * 2).toFixed(1),
      (2.0 + Math.random() * 2).toFixed(1),
    ]
    for (let i = 1; i <= 3; i++) {
      $('#sc' + i).text(arr_sc[i])
    }
    let sc_4 = (
      Math.max(arr_sc[1], arr_sc[2], arr_sc[3]) * Math.sqrt(1.5)
    ).toFixed(1)
    $('#sc4').text(sc_4)
  }, // 8h
  function sc_8h() {
    let arr_sc = [
      NaN,
      (1.5 + Math.random() * 2).toFixed(1),
      (1.5 + Math.random() * 2).toFixed(1),
      (1.5 + Math.random() * 2).toFixed(1),
    ]
    for (let i = 1; i <= 3; i++) {
      $('#sc' + i).text(arr_sc[i])
    }
    let sc_4 = (
      Math.max(arr_sc[1], arr_sc[2], arr_sc[3]) * Math.sqrt(2)
    ).toFixed(1)
    $('#sc4').text(sc_4)
  },
]

$('#btn_shouchuan_2h').on('click', function () {
  arr_shouchuan[1]()
})
$('#btn_shouchuan_4h').on('click', function () {
  arr_shouchuan[2]()
})
$('#btn_shouchuan_6h').on('click', function () {
  arr_shouchuan[3]()
})
$('#btn_shouchuan_8h').on('click', function () {
  arr_shouchuan[4]()
})
