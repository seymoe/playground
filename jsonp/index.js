function jsonp(url, functionName) {
  if (!url || !functionName) {
    throw new Error("URL and Function Name is required.");
  }
  let script = document.createElement("script");
  script.src = `${url}?jsoncallback=${functionName}`;
  document.body.appendChild(script);
}

jsonp("https://www.runoob.com/try/ajax/jsonp.php", "callbackFunction");

// 以上是创建 jsonp， 以下是业务逻辑，fn 函数
function callbackFunction(response) {
  console.log("This is response", response);
}
