class FourOhFour extends HTMLElement {
  protected _message?: string;
  protected _observer: MutationObserver;
  protected _shadowRoot: ShadowRoot;

  public get message(): string | undefined {
    return this._message;
  }

  public set message(v: string | undefined) {
    this._message = v;
    this._render();
  }

  public constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._observer = new MutationObserver(() => this._domChanged());
  }

  public static get observedAttributes(): string[] {
    return ["message"];
  }

  public attributeChangedCallback(
    name: string,
    _oldValue: string,
    newValue: string
  ): void {
    if (name === "message") {
      this.message = newValue;
    }
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
    const message = this.message ? this.message : "Page not found";

    this._shadowRoot.innerHTML = `
    <div class="card">
      <div class="card-body">${message}</div>
    </div>`;
  }
}

customElements.define("four-oh-four", FourOhFour);
