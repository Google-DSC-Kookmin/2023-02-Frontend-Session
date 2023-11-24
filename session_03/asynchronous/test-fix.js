console.log("Test started!");

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(src);

  document.head.append(script);
}

loadScript("long-time.js", function() {
  console.log("Test done!");
});