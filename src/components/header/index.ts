import {Components} from '../../pages/templates/Components';
import {PagesIds} from '../../types/enum/PagesIds';

const Buttons = [
  {
    id: PagesIds.Home,
    text: 'Home Page',
  },
  {
    id: PagesIds.ToSTask,
    text: 'To and S task'
  },
  {
    id: PagesIds.HollywoodTask,
    text: 'HollyWood task'
  },
  {
    id: PagesIds.Sudoku,
    text: 'Sudoku',
  },
];

export class Header extends Components {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'button__wrapper');
    Buttons.forEach(button => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonHTML.setAttribute('class', 'button__element');
      wrapper.append(buttonHTML);
    });
    this.container.appendChild(wrapper);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return this.container;
  }
}
