(function () {
  inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("change", handleChanges);
    input.addEventListener("mousemove", handleChanges);
  });

  function handleChanges() {
    if (this.value === this.dataset.last_value) {
      return;
    }
    const suffix = this.dataset.sizing || "";

    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );

    this.dataset.last_value = this.value;
  }
})();
