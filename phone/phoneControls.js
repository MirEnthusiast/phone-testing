class PhoneControls {
  constructor() {
    this.tilt = 0;
    this.#addListeners();
  }

  #addListeners() {
    window.addEventListener("deviceorientation", (e) => {
      this.tilt = e.beta * Math.PI / 180;
    });
  }
}