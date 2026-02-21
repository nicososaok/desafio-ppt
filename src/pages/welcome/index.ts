// src/pages/welcome/index.ts
import * as titleImgURL from "url:../../assets/Piedra-papel-tijera-green.png";

class WelcomePage extends HTMLElement {
  goTo: any;

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="welcome-screen">
        <img src="${titleImgURL}" class="welcome-title-img" />

        <button class="start-button btn-principal">Empezar</button>

        <div class="welcome-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </main>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .welcome-screen {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 60px;
        padding: 60px 0 0 0; /* Padding superior para el título */
        box-sizing: border-box;
      }
      .welcome-title-img {
        width: 284px;
        height: auto;
      }
      .start-button {
        width: 100%;
        max-width: 322px;
        height: 87px;
        /* El margen automático lo empuja al centro del espacio disponible */
        margin-top: 20px;
      }
      .welcome-hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        overflow: hidden; /* Evita scroll si las manos son grandes */
        height: 234px; /* Altura fija para que la base sea igual siempre */
      }
      my-jugada {
        width: 80px;
      }
    `;
    this.appendChild(style);

    this.querySelector(".start-button")?.addEventListener("click", () => {
      this.goTo("/instructions");
    });
  }
}

customElements.define("welcome-page", WelcomePage);

export function initWelcome(params) {
  const page = document.createElement("welcome-page") as any;
  page.goTo = params.goTo;
  return page;
}