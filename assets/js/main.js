(function () {
  function createCalculator() {
    return {
      display: document.querySelector(".display"),
      turnOn() {
        this.mouseClick();
        this.keyPressed();
      },
      mouseClick() {
        document.addEventListener("click", (e) => {
          const clicked = e.target;
          if (clicked.classList.contains("num")) {
            this.viewDisplay(clicked.innerText);
          }
          if (clicked.classList.contains("clear")) {
            this.clearDisplay();
          }
          if (clicked.classList.contains("del")) {
            this.deleteValue();
          }
          if (clicked.classList.contains("equal")) {
            this.viewResult();
          }
          //clear input
          this.display.focus();
        });
      },
      viewDisplay(text) {
        this.display.value += text;
      },
      clearDisplay() {
        this.display.value = "";
      },
      viewResult() {
        try {
          return (this.display.value = eval(this.display.value));
        } catch (err) {
          return (this.display.value = "Valor Inválido!");
        }
      },
      deleteValue() {
        this.display.value = this.display.value.slice(0, -1);
      },
      keyPressed() {
        this.display.addEventListener("keyup", (e) => {
          console.log(e.keyCode);
          if (e.keyCode === 13) {
            this.viewResult();
          }
          if (e.keyCode === 8) {
            e.preventDefault();
            this.clearDisplay();
          }
        });
      },
    };
  }
  const calculator = createCalculator();
  calculator.turnOn();
})();
