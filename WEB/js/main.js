//////////////////////////////////////////////////////////////// Light And Dark Functions ////////////////////////////////////////////////
function lightMode(){
  //light mode
  document.documentElement.style.setProperty("--main-mode-color", "#f1f1f1");
  document.documentElement.style.setProperty("--second-mode-color", "#b1b1b1");
  document.documentElement.style.setProperty("--main-text-color", " #000");
  document.documentElement.style.setProperty("--p-text-color", " #656565");
  document.documentElement.style.setProperty("--form-color", " #cecece");
  document.documentElement.style.setProperty("--card-color", " #E6E6E6");
  document.documentElement.style.setProperty("--card-color2", " #e3e3e3");
  document.documentElement.style.setProperty("--footer-color", " #E3E3E3");
}
function darkMode() {
//dark mode
document.documentElement.style.setProperty("--main-mode-color", "#181818");
document.documentElement.style.setProperty("--main-text-color", "red");
document.documentElement.style.setProperty("--second-mode-color", " #000");
document.documentElement.style.setProperty("--main-text-color", " #fff");
document.documentElement.style.setProperty("--p-text-color", " #c2c2c2");
document.documentElement.style.setProperty("--form-color", " #343434");
document.documentElement.style.setProperty("--card-color", " #232323");
document.documentElement.style.setProperty("--card-color2", " #2b2a2a");
document.documentElement.style.setProperty("--footer-color", " #242424");
}
///////////////////////////////////////////////////////////// Scorll Up And Scorll Bar //////////////////////////////////////////////////
let scrollUp = document.querySelector(".scroll-up");
let topScroolBar = document.querySelector(".top-scroll-bar");

window.addEventListener("scroll", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  let allHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  topScroolBar.style.width = `${(scrollTop / allHeight) * 100}%`;
  if (scrollTop >= 1200) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
});
scrollUp.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
///////////////////////////////////////////////////////////// Light And Dark Mode //////////////////////////////////////////////////
let mode = document.querySelector("header .mode .toggle-checkbox");
mode.addEventListener("click", (e) => {
  if (mode.checked) {
    lightMode()
    localStorage.setItem("mode","light")
  } else {
    darkMode()
    localStorage.setItem("mode","dark")
  }
});
////////////////////////////////////////////////////////////////// Local Storage ////////////////////////////////////////////////////////
if(localStorage.getItem("mode") === "light"){
  mode.checked = true
  lightMode()
}
////////////////////////////////////////////////////////////////// Menu ////////////////////////////////////////////////////////
let menuIcon = document.querySelector("header .container .menu-icon")
let linksMenu = document.querySelector("header .container-links")
menuIcon.addEventListener("click",e=> {
  menuIcon.classList.toggle("selected")
  linksMenu.classList.toggle("open")
})
//////////////////////////////////////////////////////////////// Bullets ////////////////////////////////////////////////////////
let bulltes = document.querySelectorAll(".bullets-container .bullets li")
bulltes.forEach(li=>{
  li.addEventListener("click",e => {
    document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
      behavior:"smooth"
    })
  })
})