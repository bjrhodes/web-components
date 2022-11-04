export type Route = {
  path: string;
  component: () => HTMLElement;
};

export type Transition = (route: Route) => void;

export type AppConfig = {
  routes: Route[];
};
