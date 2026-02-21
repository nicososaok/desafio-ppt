import * as piedraURL from "url:../../assets/mano-piedra.svg";
import * as papelURL from "url:../../assets/mano-papel.svg";
import * as tijeraURL from "url:../../assets/mano-tijera.svg";

class HandComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const jugada = this.getAttribute("jugada") || "piedra";
    const images: any = {
      piedra: piedraURL,
      papel: papelURL,
      tijera: tijeraURL,
    };

    this.innerHTML = `
      <div class="hand-container">
        <img src="${images[jugada]}" class="hand-img" />
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: inline-block;
        width: 104px;   /* Medida exacta pedida */
        height: 234px;  /* Medida exacta pedida */
      }
      .hand-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end; /* Alinea la mano al fondo del contenedor */
      }
      .hand-img {
        width: 100%;
        height: auto;
        display: block;
        filter: none; /* Aseguramos que por defecto no tengan gris */
      }
    `;
    this.appendChild(style);
  }
}
customElements.define("my-jugada", HandComponent);