import { Route, Transition } from "./types";

const parameters = (str: string | undefined) => {
  return typeof str === "string" ? str.split("/") : [];
};

export default function (
  window: Window,
  routes: Route[],
  transition: Transition
) {
  const hashChanged = () => {
    const hash = window.location.hash.substr(1);
    const route = routes.find(({ path }) => new RegExp(path).exec(hash));

    if (route) {
      transition(route);
    }
  };

  window.onhashchange = hashChanged;

  return {
    start: hashChanged,

    route: (to: string) => {
      // @todo bit old skool, lets make this a proper path based route instead
      window.location.hash = "#" + to;
    },

    parameters: () => {
      return parameters(window.location.hash.substr(1));
    },
  };
}
