(function () {
  panels = document.querySelectorAll(".panel");

  function animateOpen() {
    this.classList.toggle("open");
  }

  function animateText(event) {
    if (event.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  panels.forEach((element) => {
    element.addEventListener("click", animateOpen);
    element.addEventListener("transitionend", animateText);
  });
})();
