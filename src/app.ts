import _router from "./router";
import { AppConfig, Transition } from "./types";

const App = (config: AppConfig, el: HTMLElement) => {
  const transition: Transition = (to) => mount(to.component(appContext));

  const router = _router(window, config.routes, transition);

  const appContext = {
    config,
    router,
  };

  const mount = (component: HTMLElement) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    el.appendChild(component);
  };

  const go = () => router.start();

  return { go };
};

export default App;
