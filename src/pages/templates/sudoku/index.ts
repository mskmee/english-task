import {Page} from '../Page';
import {DataArray} from '../../../types/types/DataArray';
import {generateNames, generateTasks} from '../../../service/generateTasks';

export class MainPage extends Page{
  templateData: string[] = ['V1\nWill', 'will be able to...\nwill be allowed to...\nwill have to...',
    'will be', 'V1', 'can\nmay\nmust', 'am\nis\nare','V2', 'could\nmight\nhad to\nshould\nwould', 'was\nwere'];
  static TextObject = {
    MainTitle: 'Sudoku'
  };
  constructor(id: string) {
    super(id);
  }

  createSudokuTemplate(): HTMLElement {
    const wrapper = document.createElement('table');
    wrapper.setAttribute('border', '1');
    wrapper.innerHTML = `
  <tr>
  <td>
   <label class="table__item" for="C1r2"></label>
  </td>
  <td>
    <label class="table__item" for="C2r2"> </label>
  </td>
  <td>
    <label class="table__item" for="C3r2"></label>
  </td>
  </tr>
  
  <tr>
  <td>
    <label class="table__item" for="C1r3"></label>
  </td>
  <td>
    <label class="table__item" for="C2r3"></label>
  </td>
  <td>
    <label class="table__item" for="C3r3"></label>
  </td>
  </tr>
  
  <tr>
  <td>
    <label class="table__item" for="C1r4"></label>
  </td>
  <td>
    <label class="table__item" for="C2r4"></label>
  </td>
  <td>
    <label class="table__item" for="C3r4"></label>
  </td>
  </tr>
  
  </table>`;
    return wrapper;
  }

  fillSudokuTemplate(template: HTMLElement, data: string[]): void{
    const templateItems = template.querySelectorAll('.table__item');
    for (let i = 0; i < data.length; i++){
      templateItems[i].innerHTML = data[i];
    }
    template.onclick = function(event) {
      if(event.target instanceof Element){
        const td = event.target.closest('td');
        if (!td) return; // (2)

        if (!template.contains(td)) return; // (3)

        td.classList.toggle('_green');
      }
    };
  }

  createSudokuTask(){
    const wrapper = document.createDocumentFragment();
    const templateSudoku = this.createSudokuTemplate();
    this.fillSudokuTemplate(templateSudoku, this.templateData);
    templateSudoku.classList.add('template__temp', '_hidden');
    const openCloseButton = document.createElement('button');
    openCloseButton.classList.add('button', 'template__button');
    openCloseButton.textContent = 'Open/Close template';
    openCloseButton.onclick = () => {
      templateSudoku.classList.toggle('_hidden');
    };
    const taskData = generateNames(9);
    const taskTemplate = this.createSudokuTemplate();
    this.fillSudokuTemplate(taskTemplate, taskData);
    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('table__wrapper');
    tableWrapper.append(taskTemplate, templateSudoku);
    wrapper.append(openCloseButton, tableWrapper);
    this.container.append(wrapper);
  }

  render(): HTMLElement{
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    this.createSudokuTask();
    return this.container;
  }
}
