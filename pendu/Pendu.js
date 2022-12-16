"use strict";
export default class Pendu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.querySelector("#pendu");
    const clone = template.content.cloneNode(true);
    this.shadowRoot.append(clone);
    this.createCSS();
  }
  createCSS() {
    const penduContainer = this.shadowRoot.querySelector(".pendu_container");
    const penduWord = this.shadowRoot.querySelector(".pendu_word");
    this.createWord();
  }
  createWord() {
    async function getWord() {
      const response = await fetch("theme.json");
      if (!response.ok) return;
      const data = await response.json();
      let theme;
      let word;
      //   let numTheme = this.getRandomNumber(0, 25);
      //   let numLetter = this.getRandomNumber(0, 26);
      console.log(data[20].Thème_);
      return data;
    }
    this.data = getWord();
    console.log(this.data);
  }
  getRandomNumber(min, max) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
    randomNumber = randomNumber / 4294967296;
    return Math.floor(randomNumber * (max - min + 1) + min);
  }
}
customElements.define("ld-pendu", Pendu);
