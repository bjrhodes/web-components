import "../webComponents/FourOhFour";

export default () => {
  const root = document.createElement("div");

  root.innerHTML = `<four-oh-four message="Nothing was found" />`;

  return root;
};
