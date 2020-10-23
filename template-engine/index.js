let template =
  "<div>" +
  "<h3><%=name%></h3>" +
  "<ul>" +
  "<% for (let i = 0; i < skills.length; i++) { %>" +
  "<li><%=skills[i].label%></li>" +
  "<% } %>" +
  "</ul>" +
  "</div>";

let person = {
  name: "seymoe",
  skills: [{ label: "JavaScript" }, { label: "HTML5" }, { label: "CSS3" }]
};

// 规则
// 前面加上 var p = [];p.push('
// <% 替换成 ');
// %> 替换成 p.push('
// <%=xxx%> 替换成功 ');p.push(xxx);p.push('
// 后面加上 ');

function tpl(str, data) {
  let fn = new Function(
    "obj",
    "var p = [];with(obj){p.push('" +
      str
        .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
        .replace(/<%/g, "');")
        .replace(/%>/g, "p.push('") +
      "');}" +
      "return p.join('');"
  );
  return fn(data);
}

let html = tpl(template, person);
document.querySelector("#app").innerHTML = html;
