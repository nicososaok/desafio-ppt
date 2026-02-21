import { state } from "../../state";

class PlayPage extends HTMLElement {
  goTo: any;

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="play-container">
        <div class="countdown-wrapper">
          <svg class="timer-svg" viewBox="0 0 100 100">
            <circle class="timer-circle-bg" cx="50" cy="50" r="45"></circle>
            <circle class="timer-circle-path" cx="50" cy="50" r="45"></circle>
          </svg>
          <div class="number">3</div>
        </div>

        <div class="play__hands">
          <my-jugada class="hand-btn" jugada="piedra"></my-jugada>
          <my-jugada class="hand-btn" jugada="papel"></my-jugada>
          <my-jugada class="hand-btn" jugada="tijera"></my-jugada>
        </div>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .play-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 350px;
      }
      .countdown-wrapper {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .timer-svg {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      .timer-circle-bg {
        fill: none;
        stroke: rgba(0, 0, 0, 0.1);
        stroke-width: 8;
      }
      .timer-circle-path {
        fill: none;
        stroke: #000;
        stroke-width: 8;
        stroke-linecap: round;
        stroke-dasharray: 283;
        stroke-dashoffset: 0;
        animation: countdown-animation 3s linear forwards;
      }
      @keyframes countdown-animation {
      from { stroke-dashoffset: 0;
      } to { stroke-dashoffset: 283; } }
      .number {
        font-size: 80px;
        font-weight: bold;
      }
      .play__hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        height: 234px;
      }

      /* Clases para la animación del duelo */
      .showdown-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; overflow: hidden;
      }
      .pc-hand {
        transform: rotate(180deg);
        animation: slideDown 0.5s ease-out;
      }
      .my-hand {
      animation: slideUp 0.5s ease-out;
      }
      @keyframes slideDown {
        from { transform: translateY(-100px) rotate(180deg);
      } to { transform: translateY(0) rotate(180deg); } }
      @keyframes slideUp { from { transform: translateY(100px); } to { transform: translateY(0); } }
    `;
    this.appendChild(style);

    this.startCountdown();
  }

  startCountdown() {
    const numberEl = this.querySelector(".number") as HTMLElement;
    let counter = 3;

    this.querySelectorAll(".hand-btn").forEach((hand: any) => {
      hand.addEventListener("click", () => {
        const move = hand.getAttribute("jugada");
        state.setMove(move); // Guarda tu jugada en el state

        this.querySelectorAll(".hand-btn").forEach((h: any) => {
          if(h !== hand) {
            h.style.filter = "grayscale(1) opacity(0.4)";
          } else {
            h.style.filter = "none";
            h.style.transform = "translateY(-30px)";
          }
        });
      });
    });

    const intervalId = setInterval(() => {
      counter--;
      if(numberEl) numberEl.textContent = counter.toString();

      if(counter <= 0) {
        clearInterval(intervalId);
        const currentState = state.getState();
        const myPlay = currentState.currentGame.myPlay;

        if (!myPlay) {
          this.goTo("/instructions");
        } else {
          if(!currentState.currentGame.computerPlay) {
            const moves = ["piedra", "papel", "tijera"];
            const randomMove = moves[Math.floor(Math.random() * 3)];
            currentState.currentGame.computerPlay = randomMove;
            state.setState(currentState);
          }

          this.showConfrontation(myPlay, state.getState().currentGame.computerPlay);
        }
      }
    }, 1000);
  }

  showConfrontation(myPlay: string, pcPlay: string) {
    this.innerHTML = `
      <section class="duel-screen">
        <my-jugada class="hand-pc" jugada="${pcPlay}"></my-jugada>
        <my-jugada class="hand-user" jugada="${myPlay}"></my-jugada>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .duel-screen {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Empuja una mano a cada extremo */
        align-items: center;
        overflow: hidden;
      }
      .hand-pc {
        transform: rotate(180deg); /* La mano de la máquina viene de arriba */
        width: 150px;
      }
      .hand-user {
        width: 150px;
      }
      /* Forzamos el tamaño del componente interno */
      my-jugada {
        display: block;
        width: 150px;
        height: 300px;
      }
    `;
    this.appendChild(style);

    setTimeout(() => {
      this.goTo("/results");
    }, 2500);
  }
}

customElements.define("play-page", PlayPage);

export function initPlay(params) {
  const page = document.createElement("play-page") as any;
  page.goTo = params.goTo;
  return page;
}