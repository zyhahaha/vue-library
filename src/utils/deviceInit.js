// 默认配置
const defaultOption = {
  docWidth: 375 // 设计稿宽度
}
// 使用rem
let doc = window.document
let docEl = doc.documentElement
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
let recalc = (function refreshRem() {
  let clientWidth = docEl.getBoundingClientRect().width
  let widthProp = clientWidth / defaultOption.docWidth
  let htmlFontSize = Math.ceil(widthProp * 625)

  docEl.style.fontSize = htmlFontSize + '%'
  return refreshRem
})()

// 添加倍屏标识，安卓为1
docEl.setAttribute(
  'data-dpr',
  window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1
)

if (doc.addEventListener) {
  window.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}

