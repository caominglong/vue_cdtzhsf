! function (e) {
  var t = e.document,
    n = t.documentElement,
    i = "orientationchange" in e ? "orientationchange" : "resize",
    a = function e() {
      var t = n.getBoundingClientRect().width;
      return n.style.fontSize = 5 * Math.max(Math.min(t / 750 * 20, 11.2), 8.55) + "px", e
    }();
  n.setAttribute("data-dpr", e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio : 1), /iP(hone|od|ad)/
    .test(e.navigator.userAgent) && (t.documentElement.classList.add("ios"), parseInt(e.navigator.appVersion.match(
      /OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8 && t.documentElement.classList.add("hairline")), t.addEventListener &&
    (e.addEventListener(i, a, !1), t.addEventListener("DOMContentLoaded", a, !1))
}(window);


// (function flexible (window, document) {
//   var docEl = document.documentElement
//   var dpr = window.devicePixelRatio || 1

//   // adjust body font size
//   function setBodyFontSize () {
//     if (document.body) {
//       document.body.style.fontSize = (12 * dpr) + 'px'
//     }
//     else {
//       document.addEventListener('DOMContentLoaded', setBodyFontSize)
//     }
//   }
//   setBodyFontSize();

//   // set 1rem = viewWidth / 10
//   function setRemUnit () {
//     var rem = docEl.clientWidth / 10
//     docEl.style.fontSize = rem + 'px'
//   }

//   setRemUnit()

//   // reset rem unit on page resize
//   window.addEventListener('resize', setRemUnit)
//   window.addEventListener('pageshow', function (e) {
//     if (e.persisted) {
//       setRemUnit()
//     }
//   })

//   // detect 0.5px supports
//   if (dpr >= 2) {
//     var fakeBody = document.createElement('body')
//     var testElement = document.createElement('div')
//     testElement.style.border = '.5px solid transparent'
//     fakeBody.appendChild(testElement)
//     docEl.appendChild(fakeBody)
//     if (testElement.offsetHeight === 1) {
//       docEl.classList.add('hairlines')
//     }
//     docEl.removeChild(fakeBody)
//   }
// }(window, document))
