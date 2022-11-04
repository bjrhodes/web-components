import App from "./app";
import routes from "./routes";

let attempts = 0;

const init = () => {
  const rootEl = document.getElementById("root");

  if (attempts++ > 10) {
    console.error(`Could not bootstrap application after ${attempts} attempts`);
    return;
  }

  if (rootEl && "customElements" in window) {
    // platform is good!
    App({ routes }, rootEl).go();
  } else {
    setTimeout(init, 30);
  }
};

init();
