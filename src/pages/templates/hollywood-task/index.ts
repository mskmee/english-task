import { Page } from '../Page';
import {DataArray} from '../../../types/types/DataArray';
import {generateHollywoodTask} from '../../../service/generateTasks';

export class HollywoodTaskPage extends Page {
  static TextObject = {
    MainTitle: 'hollywood-task'
  };

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(HollywoodTaskPage.TextObject.MainTitle);
    this.container.appendChild(title);
    const data: DataArray = generateHollywoodTask();
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'question__wrapper');
    data.forEach(el => {
      const elWrapper = document.createElement('div');
      elWrapper.setAttribute('class', 'question__item');
      elWrapper.innerHTML = el;
      wrapper.append(elWrapper);
    });
    this.container.append(wrapper);

    return this.container;
  }
}
