let e={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t();localStorage.setItem("ppt-history",JSON.stringify(this.data.history))},subscribe(e){this.listeners.push(e)},init(){let e=localStorage.getItem("ppt-history");if(e){let t=this.getState();t.history=JSON.parse(e),this.data=t}},setMove(e){let t=this.getState();t.currentGame.myPlay=e,this.data=t},pushToHistory(){let e=this.getState(),t=e.currentGame.myPlay,a=["piedra","papel","tijera"][Math.floor(3*Math.random())];e.currentGame.computerPlay=a;let n=this.whoWins(t,a);e.history.push({myPlay:t,computerPlay:a,winner:n}),this.setState(e)},whoWins:(e,t)=>e===t?"empate":"tijera"===e&&"papel"===t||"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t?"yo":"computadora",getScore(){let e=this.getState(),t=0,a=0;return e.history.forEach(e=>{"yo"===e.winner&&t++,"computadora"===e.winner&&a++}),{yo:t,computadora:a}}};var t={};t=import.meta.resolve("efPYo");class a extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
      <main class="welcome-screen">
        <img src="${t}" class="welcome-title-img" />

        <button class="start-button btn-principal">Empezar</button>

        <div class="welcome-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </main>
    `;let e=document.createElement("style");e.textContent=`
      .welcome-screen {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 60px;
        padding: 60px 0 0 0; /* Padding superior para el t\xedtulo */
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
        /* El margen autom\xe1tico lo empuja al centro del espacio disponible */
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
    `,this.appendChild(e),this.querySelector(".start-button")?.addEventListener("click",()=>{this.goTo("/instructions")})}}customElements.define("welcome-page",a);class n extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
      <section class="instructions-screen">
        <div class="instructions-image-container">
          <img src="${$50c57511cb787bf6$exports}" class="instructions-img" alt="Instrucciones">
        </div>

        <button class="start-game-btn btn-principal">\xa1Jugar!</button>

        <div class="instructions-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </section>
    `;let e=document.createElement("style");e.textContent=`
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
        width: 320px; /* Tama\xf1o similar al t\xedtulo de la home */
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
    `,this.appendChild(e),this.querySelector(".start-game-btn")?.addEventListener("click",()=>{this.goTo("/play")})}}customElements.define("instructions-page",n);class i extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `;let e=document.createElement("style");e.textContent=`
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

      /* Clases para la animaci\xf3n del duelo */
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
    `,this.appendChild(e),this.startCountdown()}startCountdown(){let t=this.querySelector(".number"),a=3;this.querySelectorAll(".hand-btn").forEach(t=>{t.addEventListener("click",()=>{let a=t.getAttribute("jugada");e.setMove(a),this.querySelectorAll(".hand-btn").forEach(e=>{e!==t?e.style.filter="grayscale(1) opacity(0.4)":(e.style.filter="none",e.style.transform="translateY(-30px)")})})});let n=setInterval(()=>{if(a--,t&&(t.textContent=a.toString()),a<=0){clearInterval(n);let t=e.getState(),a=t.currentGame.myPlay;if(a){if(!t.currentGame.computerPlay){let a=["piedra","papel","tijera"][Math.floor(3*Math.random())];t.currentGame.computerPlay=a,e.setState(t)}this.showConfrontation(a,e.getState().currentGame.computerPlay)}else this.goTo("/instructions")}},1e3)}showConfrontation(e,t){this.innerHTML=`
      <section class="duel-screen">
        <my-jugada class="hand-pc" jugada="${t}"></my-jugada>
        <my-jugada class="hand-user" jugada="${e}"></my-jugada>
      </section>
    `;let a=document.createElement("style");a.textContent=`
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
        transform: rotate(180deg); /* La mano de la m\xe1quina viene de arriba */
        width: 150px;
      }
      .hand-user {
        width: 150px;
      }
      /* Forzamos el tama\xf1o del componente interno */
      my-jugada {
        display: block;
        width: 150px;
        height: 300px;
      }
    `,this.appendChild(a),setTimeout(()=>{this.goTo("/results")},2500)}}customElements.define("play-page",i);var o={};o=import.meta.resolve("cSPQ6");var s={};s=import.meta.resolve("3YqhD");var r={};r=import.meta.resolve("fapai");var l={};l=import.meta.resolve("d7lWl");var c={};c=import.meta.resolve("hoDR3");var d={};d=import.meta.resolve("1kW6C");class m extends HTMLElement{connectedCallback(){this.render()}render(){let t=e.getState().currentGame,a=e.whoWins(t.myPlay,t.computerPlay),n=e.getScore(),i="yo"===a,m=i?o:s,p=i?r:l,u=i?c:d;this.innerHTML=`
      <section class="results-screen">
        <div class="result-container">
          <img class="star-base" src="${p}" />
          <img class="result-text-img" src="${u}" />
        </div>

        <div class="score-board">
          <h2 class="score-title">Score</h2>
          <div class="score-info">
            <p>Vos: ${n.yo}</p>
            <p>M\xe1quina: ${n.computadora}</p>
          </div>
        </div>

        <button class="return-btn btn-principal">Volver a Jugar</button>
      </section>
    `;let h=document.createElement("style");h.textContent=`
      .results-screen {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-image: url("${m}");
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
    `,this.appendChild(h),this.querySelector(".return-btn")?.addEventListener("click",()=>{this.goTo("/instructions")})}}customElements.define("results-page",m);let p=[{path:/\/welcome/,component:function(e){let t=document.createElement("welcome-page");return t.goTo=e.goTo,t}},{path:/\/instructions/,component:function(e){let t=document.createElement("instructions-page");return t.goTo=e.goTo,t}},{path:/\/play/,component:function(e){let t=document.createElement("play-page");return t.goTo=e.goTo,t}},{path:/\/results/,component:function(e){let t=document.createElement("results-page");return t.goTo=e.goTo,t}}];var u={};u=import.meta.resolve("ewuCh");var h={};h=import.meta.resolve("3l8g3");var g={};g=import.meta.resolve("6agIS");class y extends HTMLElement{connectedCallback(){this.render()}render(){let e=this.getAttribute("jugada")||"piedra",t={piedra:u,papel:h,tijera:g};this.innerHTML=`
      <div class="hand-container">
        <img src="${t[e]}" class="hand-img" />
      </div>
    `;let a=document.createElement("style");a.textContent=`
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
    `,this.appendChild(a)}}customElements.define("my-jugada",y);let f=document.querySelector("#root");if(e.init(),f){function x(e){history.pushState({},"",e),b(e)}function b(e){console.log("El router recibió la ruta:",e);let t=!1;for(let a of p)if(a.path.test(e)){t=!0;let e=a.component({goTo:x});f.firstChild&&f.firstChild.remove(),f.appendChild(e);break}t||x("/welcome")}"/"===location.pathname||"/desafio-m5-ppt/"===location.pathname?x("/welcome"):b(location.pathname),window.addEventListener("popstate",()=>{b(location.pathname)})}else console.error("No se encontró el elemento #root en el HTML. Revisa tu index.html.");
//# sourceMappingURL=desafio-ppt.af676698.js.map
