export default class Component {
  protected element: HTMLElement;
  #parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClasses: string = '',
  ) {
    this.#parentElement = parentElement;
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }
}
