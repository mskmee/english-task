import { Page } from '../Page';
import {DataArray} from '../../../types/types/DataArray';
import {generateTasks} from '../../../service/generateTasks';

export class ToSTask extends Page {
  static TextObject = {
    MainTitle: 'to-s-task'
  };
  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(ToSTask.TextObject.MainTitle);
    this.container.appendChild(title);
    const data: DataArray = generateTasks();
    const dataObj = document.querySelector('#app');
    if(dataObj) {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'question__wrapper');
      data.forEach(el => {
        const elWrapper = document.createElement('div');
        elWrapper.setAttribute('class', 'question__item');
        elWrapper.innerHTML = el;
        wrapper.append(elWrapper);
      });
      this.container.appendChild(wrapper);
    }
    return this.container;
  }
}
