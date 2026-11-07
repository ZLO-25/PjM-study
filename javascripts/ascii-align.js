// docs/javascripts/ascii-align.js
// 讓 ASCII 圖在任何字型下都對齊：
// 中文等全形字固定佔 2 個半形寬，框線、箭頭等符號固定佔 1 個半形寬。
(function () {
  var WIDE = /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿ꀀ-꓏가-힣豈-﫿︰-﹏＀-｠￠-￦]/;
  var NARROW = /[←-⇿─-▟■-◿•·…−×÷]/;

  function fix(code) {
    if (code.dataset.asciiAligned) return;
    code.dataset.asciiAligned = "1";
    code.classList.add("ascii-block");
    var walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      if (!WIDE.test(text) && !NARROW.test(text)) return;
      var frag = document.createDocumentFragment();
      var buf = "";
      for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        var cls = WIDE.test(ch) ? "ascii-w2" : NARROW.test(ch) ? "ascii-w1" : null;
        if (cls) {
          if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ""; }
          var s = document.createElement("span");
          s.className = cls;
          s.textContent = ch;
          frag.appendChild(s);
        } else {
          buf += ch;
        }
      }
      if (buf) frag.appendChild(document.createTextNode(buf));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function run() {
    document.querySelectorAll(".md-typeset div.language-text pre code, .md-typeset div.highlight:not([class*='language-']) pre code")
      .forEach(fix);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(run);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
