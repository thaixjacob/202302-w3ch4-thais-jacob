import Component from '../Component.js';

export default class Header extends Component {
  #text: string;

  constructor(
    text: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'header', cssClasses);
    this.#text = text;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<h1>${this.#text}</h1>`;
  }
}
