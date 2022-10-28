var x = document.getElementsByClassName(".p_histor");
var p = document.getElementById("p");
var sp = document.getElementById("span");
let data = [];
for (let index = 0; index < x.length; index++) {
  data.push(x[index].getAttribute("data-tag"));

  x[index].addEventListener("click", () => {
    p.innerHTML =
      "<" + data[index] + ">" + p.innerText + "<" + data[index] + "/>";
    sp.innerText = data[index];
  });
}
