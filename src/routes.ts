import FourOhFour from "./views/FourOhFour";
import Form from "./views/Form";
import Home from "./views/Home";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/form",
    component: Form,
  },
  {
    regex: ".*",
    component: FourOhFour,
  },
];
