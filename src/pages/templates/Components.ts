export abstract class Components {
  protected container: HTMLElement;
  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.setAttribute('class', className);
  }

  render(){
    return this.container;
  }
}
