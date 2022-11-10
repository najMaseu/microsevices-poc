import * as ReactDom from "react-dom";
import App from "./App";

class StandaloneRadar extends HTMLElement {
  mountPoint!: HTMLSpanElement;
  name!: string;

  connectedCallback() {
    const mountPoint = document.createElement("span");

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute(
      "href",
      `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_CSS_BUNDLE_PATH}`
    );

    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    this.shadowRoot && this.shadowRoot.appendChild(linkElem);

    ReactDom.render(<App />, mountPoint);
  }
}
export default StandaloneRadar;

window.customElements.get("radar-react") ||
  window.customElements.define("radar-react", StandaloneRadar);
