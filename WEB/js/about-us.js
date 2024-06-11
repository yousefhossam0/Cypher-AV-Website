let flip = document.querySelectorAll(".about-us .container .view .box .flip");
let box = document.querySelectorAll(".about-us .container .view .box");
flip.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    box[index].classList.toggle("fliped");
  });
});

let view = document.querySelectorAll(".about-us .container .view");
window.onscroll = function () {
  view.forEach((card) => {
    let viewOffestTop = card.offsetTop;
    let viewOffestHeight = card.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop >= viewOffestTop + viewOffestHeight - windowHeight) {
      card.style.left = "0px";
    }
  });
};
  window.scrollBy(0, 1);
