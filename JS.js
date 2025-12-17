let menu = document.getElementById("menu_icon");
let menu_options = document.getElementById("menu_options");

menu.onclick = function () {
  menu.classList.toggle("active");

  if (menu_options.style.display === "block") {
    menu_options.style.display = "none";
  } else {
    menu_options.style.display = "block";
  }
};
