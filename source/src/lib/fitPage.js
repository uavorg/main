/*
* 移动端响应式处理
* Created by haiyingji on 2018/11/07.
 */
export function runFitPage(callback) {
  const htmlEle = document.getElementsByTagName("html")[0];
  const fitPage = function() {
    let w = htmlEle.getBoundingClientRect().width;
    w = Math.round(w);
    callback && callback(w);
    const newW = (w / 750) * 100;
    htmlEle.style.fontSize = newW + "px";
  };
  fitPage();
  let t;
  const func = function() {
    clearTimeout(t);
    t = setTimeout(fitPage, 25);
  };
  window.addEventListener("resize", func);
}
