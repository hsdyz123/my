// 5分钟关闭
$('#close_5').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 5
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})

// 10分钟关闭
$('#close_10').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 10
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})

// 15分钟关闭
$('#close_15').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 15
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})

// 20分钟关闭
$('#close_20').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 20
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})

// 30分钟关闭
$('#close_30').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 30
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})

// 60分钟关闭
$('#close_60').on('click', function () {
  for (let i = 0; i < 100; i++) {
    clearInterval(i)
  }
  var mm = 60
  var ss = 0
  $('#time1').html(mm > 9 ? mm : '0' + mm)
  $('#time2').html(ss > 9 ? ss : '0' + ss)
  console.log(mm, ss)
  setInterval(() => {
    ss--
    $('#time1').html(mm > 9 ? mm : '0' + mm)
    $('#time2').html(ss > 9 ? ss : '0' + ss)
    console.log(mm, ss)
    if (ss === -1) {
      mm -= 1
      ss = 60
      ss--
      $('#time1').html(mm > 9 ? mm : '0' + mm)
      $('#time2').html(ss > 9 ? ss : '0' + ss)
      console.log(mm, ss)
    }
    if (mm === -1) {
      window.close()
    }
  }, 1000)
})
