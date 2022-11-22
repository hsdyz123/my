// 2h
function sc_2h() {
  let sc_1 = (2.8 + Math.random() * 2).toFixed(1)
  let sc_2 = (2.8 + Math.random() * 2).toFixed(1)
  let sc_3 = (2.8 + Math.random() * 2).toFixed(1)
  $('#sc1').text(sc_1)
  $('#sc2').text(sc_2)
  $('#sc3').text(sc_3)
  let sc_4 = (Math.max(sc_1, sc_2, sc_3) * Math.sqrt(0.5)).toFixed(1)
  $('#sc4').text(sc_4)
}
// 4h
function sc_4h() {
  let sc_1 = (2.5 + Math.random() * 2).toFixed(1)
  let sc_2 = (2.5 + Math.random() * 2).toFixed(1)
  let sc_3 = (2.5 + Math.random() * 2).toFixed(1)
  $('#sc1').text(sc_1)
  $('#sc2').text(sc_2)
  $('#sc3').text(sc_3)
  let sc_4 = Math.max(sc_1, sc_2, sc_3).toFixed(1)
  $('#sc4').text(sc_4)
}
// 8h
function sc_8h() {
  let sc_1 = (1.5 + Math.random() * 2).toFixed(1)
  let sc_2 = (1.5 + Math.random() * 2).toFixed(1)
  let sc_3 = (1.5 + Math.random() * 2).toFixed(1)
  $('#sc1').text(sc_1)
  $('#sc2').text(sc_2)
  $('#sc3').text(sc_3)
  let sc_4 = (Math.max(sc_1, sc_2, sc_3) * Math.sqrt(2)).toFixed(1)
  $('#sc4').text(sc_4)
}

$('#btn_shouchuan_2h').on('click', function () {
  sc_2h()
})
$('#btn_shouchuan_4h').on('click', function () {
  sc_4h()
})
$('#btn_shouchuan_8h').on('click', function () {
  sc_8h()
})
