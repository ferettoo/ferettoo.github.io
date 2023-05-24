function adjustFont() {
  var factorZoom = window.devicePixelRatio;
  var baseFont = 10;
  var newFontSize = baseFont / factorZoom;
  document.querySelector("#backgroundText").style.fontSize = newFontSize + "vw";
}

adjustFont();
