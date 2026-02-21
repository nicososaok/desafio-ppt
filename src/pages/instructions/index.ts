import * as instructionsImgURL from "url:../../assets/Presioná jugar y elegí piedra, papel o tijera antes de que pasen los 3 segundos INST..svg"; // Revisa si es .svg o .svc en tu carpeta

class InstructionsPage extends HTMLElement {
  goTo: any;

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="instructions-screen">
        <div class="instructions-image-container">
          <img src="${instructionsImgURL}" class="instructions-img" alt="Instrucciones">
        </div>

        <button class="start-game-btn btn-principal">¡Jugar!</button>

        <div class="instructions-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .instructions-screen {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 60px 0 0 0;
        box-sizing: border-box;
      }
      .instructions-image-container {
        width: 320px; /* Tamaño similar al título de la home */
        height: auto;
      }
      .instructions-img {
        width: 100%;
        height: auto;
      }
      .start-game-btn {
        width: 322px;
        height: 87px;
        margin-top: 20px;
      }
      .instructions-hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        height: 234px;
      }
      my-jugada {
        width: 80px;
      }
    `;
    this.appendChild(style);

    this.querySelector(".start-game-btn")?.addEventListener("click", () => {
      this.goTo("/play");
    });
  }
}

customElements.define("instructions-page", InstructionsPage);

export function initInstructions(params) {
  const page = document.createElement("instructions-page") as any;
  page.goTo = params.goTo;
  return page;
}