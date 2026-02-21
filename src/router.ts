import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initPlay } from "./pages/play";
import { initResults } from "./pages/results";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/instructions/,
    component: initInstructions,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route: string) {
    console.log("El router recibió la ruta:", route);

    let matched = false;

    for (const r of routes) {
      if(r.path.test(route)) {
        matched = true;

        const el = r.component({ goTo: goTo });


        if(container.firstChild) {
          container.firstChild.remove();
        }


        container.appendChild(el);
        break;
      }
    }

    if(!matched) {
      goTo("/welcome");
    }
  }

  const isRoot = location.pathname === "/" || location.pathname === "/desafio-m5-ppt/";

  if(isRoot) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}