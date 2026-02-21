import { state } from "../../state";

import * as bgVerde from "url:../../assets/Rectangle-verde.svg";
import * as bgRojo from "url:../../assets/Rectangle-rojo.svg";
import * as starVerde from "url:../../assets/star-green.svg";
import * as starRojo from "url:../../assets/star-red.svg";
import * as textGanaste from "url:../../assets/ganaste.svg";
import * as textPerdiste from "url:../../assets/perdiste.svg";

class ResultsPage extends HTMLElement {
  goTo: any;

  connectedCallback() {
    this.render();
  }

  render() {
    const lastGame = state.getState().currentGame;
    const result = state.whoWins(lastGame.myPlay, lastGame.computerPlay);
    const score = state.getScore();
    const isWin = result === "yo";
    const bgImg = isWin ? bgVerde : bgRojo;
    const starImg = isWin ? starVerde : starRojo;
    const textImg = isWin ? textGanaste : textPerdiste;

    this.innerHTML = `
      <section class="results-screen">
        <div class="result-container">
          <img class="star-base" src="${starImg}" />
          <img class="result-text-img" src="${textImg}" />
        </div>

        <div class="score-board">
          <h2 class="score-title">Score</h2>
          <div class="score-info">
            <p>Vos: ${score.yo}</p>
            <p>Máquina: ${score.computadora}</p>
          </div>
        </div>

        <button class="return-btn btn-principal">Volver a Jugar</button>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .results-screen {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-image: url("${bgImg}");
        background-size: cover;
        background-position: center;
        position: fixed; /* Asegura que tape el fondo anterior completamente */
        top: 0;
        left: 0;
      }

      .result-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 260px;
        height: 260px;
      }

      .star-base { width: 100%; height: auto; }

      .result-text-img {
        position: absolute;
        width: 60%;
        top: 50%;
        transform: translateY(-50%);
      }

      .score-board {
        background: #FFFFFF;
        border: 10px solid #000000;
        border-radius: 10px;
        width: 260px;
        padding: 20px;
        box-sizing: border-box;
      }

      .score-title { margin: 0 0 10px 0; font-size: 55px; text-align: center; }
      .score-info { font-size: 45px; text-align: right; }
      .score-info p { margin: 5px 0; }

      .return-btn { width: 322px; height: 87px; }
    `;
    this.appendChild(style);

    this.querySelector(".return-btn")?.addEventListener("click", () => {
      this.goTo("/instructions");
    });
  }
}

customElements.define("results-page", ResultsPage);

export function initResults(params) {
  const page = document.createElement("results-page") as any;
  page.goTo = params.goTo;
  return page;
}