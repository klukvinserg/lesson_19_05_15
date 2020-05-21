function onTop() {
  window.scroll(0, 0);
  butt.style.display = "none";
}

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;
  if (scrollValue >= 100) {
    butt.style.display = "block";
  } else if (scrollValue < 100) {
    butt.style.display = "none";
  }
});
