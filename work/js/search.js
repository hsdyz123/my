function search() {
  if ($('#ipt_search').val().trim() == '') {
    alert('你要不要看看你自己输入的什么东西！！重新输！！！')
  } else {
    window.location.href =
      'https://quark.sm.cn/s?q=' + $('#ipt_search').val().trim()
  }
}
$('#btn_search').on('click', function () {
  search()
})
$('#ipt_search').on('keyup', function (e) {
  if (e.key == 'Enter') {
    search()
  }
})
