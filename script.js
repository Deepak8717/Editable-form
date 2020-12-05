let edit = document.getElementById("js-edit");
let save = document.getElementById("js-save");
let input = document.querySelectorAll("input");
let form = document.querySelector("form");

edit.addEventListener("click", function () {
  for (var i = 0; i < input.length; i++) {
    input[i].disabled = false;
  }
  if (form.className == "is-readonly") {
    form.className = "is-editing";
  } else form.className = "is-readonly";
});

save.addEventListener("click", function () {
  for (var i = 0; i < input.length; i++) {
    input[i].disabled = true;
  }
  if (form.className == "is-readonly") {
    form.className = "is-editing";
  } else form.className = "is-readonly";
});
