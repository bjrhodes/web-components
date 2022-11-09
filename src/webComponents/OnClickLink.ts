export default (onClick: (e: Event) => void) => {
  return class OnClickLink extends HTMLElement {
    protected _observer: MutationObserver;

    public constructor() {
      super();

      this._observer = new MutationObserver(() => this._domChanged());
    }

    public connectedCallback(): void {
      this._render();
      this._observer.observe(this, {
        characterData: true,
        subtree: true,
        childList: true,
      });
    }

    public disconnectedCallback(): void {
      this._observer.disconnect();
    }

    protected _domChanged(): void {
      this._render();
    }

    protected _render(): void {
      this.onclick = onClick;
    }
  };
};
