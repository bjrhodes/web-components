import { View } from "../types";
import onClickLinkFactory from "../webComponents/OnClickLink";

const Home: View = ({ router }) => {
  const Clickable = onClickLinkFactory(() => router.route("form"));

  customElements.define("my-link", Clickable);

  const root = document.createElement("div");

  root.innerHTML = `<my-link>Go to form</my-link>`;

  return root;
};

export default Home;
