export type View = (appContext: AppContext) => HTMLElement;

export type AppContext = {
  config: AppConfig;
  router: {
    start: () => void;
    route: (to: string) => void;
    parameters: () => string[];
  };
};

export type Route = {
  path?: string;
  regex?: string;
  component: View;
};

export type Transition = (route: Route) => void;

export type AppConfig = {
  routes: Route[];
};
