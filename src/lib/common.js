import Vue from 'vue'
/* 判断滚动条方向 */
Vue.prototype.scrollDir = function (fn) {
  let beforeScrollTop = document.body.scrollTop
  let fn1 = fn || function () {}
  window.addEventListener('scroll', function () {
    let afterScrollTop = document.body.scrollTop
    let tmp = afterScrollTop - beforeScrollTop
    if (tmp === 0) {
      return false
    }
    console.log(2)
    fn1(tmp > 0 ? 'down' : 'top')
    beforeScrollTop = afterScrollTop
  }, false)
}
