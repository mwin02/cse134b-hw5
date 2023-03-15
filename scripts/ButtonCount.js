class ButtonCount extends HTMLElement {
  count = 0;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "count-button");

    const button = document.createElement("button");
    button.innerText = `Times Clicked: ${this.count}`;
    button.addEventListener("click", () => {
      this.count++;
      button.innerText = `Times Clicked: ${this.count}`;
    });

    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
  }
}

window.customElements.define("button-count", ButtonCount);
