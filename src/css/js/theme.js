//icons

const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const themeswitcherBtns = document.querySelector(".theme-switcher");
// theme vars :

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (userTheme === "dark" || !userTheme) {
  document.documentElement.classList.add("dark");
  sunIconIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

function iconSwitch(theme) {
  if ((theme = "dark")) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else if(theme==="light") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

//   switcher :
themeswitcherBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    // console.log(theme);
    switch (theme) {
      case "dark": {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconSwitch("dark");
        break;
      }
      case "light": {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconSwitch("light");
        break;
      }
      case "system": {
        localStorage.removeItem("theme");
        if (systemTheme) {
          document.documentElement.classList.add("dark");
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        } else {
          document.documentElement.classList.add("dark");
          sunIcon.classList.remove("hidden");
          moonIcon.classList.add("hidden");
        }
        break;
      }
      default:
        break;
    }
  });
});
