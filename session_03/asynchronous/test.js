console.log("Test started!");

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript("long-time.js");
console.log("Test done!");