const modo = document.getElementById("modo");
const mode = document.querySelectorAll(".mode");

modo.addEventListener("click", () => {
  if (modo.checked) {
    mode.forEach((e) => {
      e.classList.add("inverted");
    });
  } else {
    mode.forEach((e) => {
      e.classList.remove("inverted");
    });
  }
});
