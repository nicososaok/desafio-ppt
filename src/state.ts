type Jugada = "piedra" | "papel" | "tijera";

type Game = {
  myPlay: Jugada;
  computerPlay: Jugada;
  winner: "yo" | "computadora" | "empate";
};

const state = {
  data: {
    currentGame: {
      computerPlay: "" as Jugada | "",
      myPlay: "" as Jugada | "",
    },
    history: [] as Game[],
  },

  listeners: [] as Function[],

  getState() {
    return this.data;
  },

  setState(newState: any) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("ppt-history", JSON.stringify(this.data.history));
  },

  subscribe(callback: (any: any) => any) {
    this.listeners.push(callback);
  },

  init() {
    const localData = localStorage.getItem("ppt-history");
    if(localData) {
      const currentState = this.getState();
      currentState.history = JSON.parse(localData);
      this.data = currentState;
    }
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.data = currentState;
  },

  pushToHistory() {
    const currentState = this.getState();
    const miJugada = currentState.currentGame.myPlay as Jugada;
    const options: Jugada[] = ["piedra", "papel", "tijera"];
    const computerMove = options[Math.floor(Math.random() * 3)];
    currentState.currentGame.computerPlay = computerMove;

    const resultado = this.whoWins(miJugada, computerMove);

    currentState.history.push({
      myPlay: miJugada,
      computerPlay: computerMove,
      winner: resultado,
    });

    this.setState(currentState);
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    if(myPlay === computerPlay) return "empate";

    const ganeConTijera = myPlay === "tijera" && computerPlay === "papel";
    const ganeConPiedra = myPlay === "piedra" && computerPlay === "tijera";
    const ganeConPapel = myPlay === "papel" && computerPlay === "piedra";

    return (ganeConTijera || ganeConPiedra || ganeConPapel) ? "yo" : "computadora";
  },

  getScore() {
    const currentState = this.getState();
    let misPuntos = 0;
    let puntosCompu = 0;

    currentState.history.forEach((partida: Game) => {
      if(partida.winner === "yo") misPuntos++;
      if(partida.winner === "computadora") puntosCompu++;
    });

    return { yo: misPuntos, computadora: puntosCompu };
  }
};

export { state };