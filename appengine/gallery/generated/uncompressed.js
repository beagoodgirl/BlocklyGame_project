// Automatically generated file.  Do not edit!

window.CLOSURE_NO_DEPS = true;

(function() {
  var srcs = [
      "third-party/base.js",
      "third-party/blockly/core/utils/global.js",
      "third-party/blockly/core/msg.js",
      "src/lib-games.js",
      "src/html.js",
      "gallery/src/html.js",
      "src/lib-storage.js",
      "gallery/src/main.js"
  ];
  function loadScript() {
    var src = srcs.shift();
    if (src) {
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = loadScript;
      document.head.appendChild(script);
    }
  }
  loadScript();
})();
