import router from "./router";
import { AppConfig, Transition } from "./types";

const App = (config: AppConfig, el: HTMLElement) => {
  const mount = (component: HTMLElement) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    el.appendChild(component);
  };

  const transition: Transition = (to) => {
    // @todo might need a teardown step?
    // I used to track the currently mounted component
    // and call teardown on it, but not so much now.
    mount(to.component());
  };

  const go = () => router(window, config.routes, transition).start();

  return { go };
};

export default App;
