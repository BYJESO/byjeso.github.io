const btnSwitch = document.querySelector(".switch--dark-mode");
const groot = document.querySelector(":root");

btnSwitch.addEventListener("click", () => 
{
  groot.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (groot.classList.contains("dark")) 
  {
    localStorage.setItem("mode-preference", "dark");
  } else 
  {
    localStorage.setItem("mode-preference", "light");
  }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  groot.classList.add("dark");
  btnSwitch.classList.add("active");
}
  switch (localStorage.getItem("mode-preference")) {
    case "dark":
      groot.classList.add("dark");
      btnSwitch.classList.add("active");
      break;
      
    case "light":
      groot.classList.remove("dark");
      btnSwitch.classList.remove("active");
      break;
  
    default:
      break;
  }