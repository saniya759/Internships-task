const form = document.getElementById("dataForm");
const badge = document.getElementById("badge");

let count = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  count++;
  badge.style.display = "inline-block";
  badge.textContent = count;
});
