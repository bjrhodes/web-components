import { Route, Transition } from "./types";

const parameters = (str: string | undefined) => {
  return typeof str === "string" ? str.split("/") : [];
};

export default function (
  window: Window,
  routes: Route[],
  transition: Transition
) {
  const routeChanged = () => {
    const pathname = window.location.pathname;
    const route = routes.find(({ path, regex }) =>
      path
        ? path === pathname
        : regex
        ? new RegExp(regex).exec(pathname)
        : false
    );

    if (route) {
      transition(route);
    }
  };

  window.onpopstate = routeChanged;

  return {
    start: routeChanged,

    route: (to: string) => {
      window.history.pushState(null, "", to);
      window.history.go();
    },

    parameters: () => {
      return parameters(window.location.pathname);
    },
  };
}
