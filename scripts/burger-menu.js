const $burgerMenu = document.querySelector("#burger-menu");
const $menu = document.querySelector(".nav");
const ipad = window.matchMedia("(max-width: 767px)");
runBurgerMenu(ipad.matches);
ipad.addListener((event) => {
  runBurgerMenu(event.matches);
});

function hideShow() {
  $menu.classList.toggle("is-active");
  $burgerMenu.classList.toggle("is-active");

  if ($menu.classList.contains("is-active")) {
    localStorage.setItem("menu", "true");
  } else {
    localStorage.setItem("menu", "false");
  }
}

function runBurgerMenu(yes) {
  if (yes) {
    $burgerMenu.addEventListener("click", hideShow);
  } else {
    $burgerMenu.removeEventListener("click", hideShow);
  }
}

var specifiedElement = document.querySelector("nav");
document.addEventListener("click", function (event) {
  var isClickInsideIcon = $burgerMenu.contains(event.target);
  var isClickInside = $menu.contains(event.target);
  if (
    !isClickInside &&
    !isClickInsideIcon &&
    $menu.classList.contains("is-active")
  ) {
    $menu.classList.remove("is-active");
    $burgerMenu.classList.remove("is-active");
    localStorage.setItem("menu", "false");
  }
});

if (localStorage.getItem("menu") === "true") {
  $menu.classList.add("is-active");
  $burgerMenu.classList.add("is-active");
} else {
  $menu.classList.remove("is-active");
  $burgerMenu.classList.remove("is-active");
}
