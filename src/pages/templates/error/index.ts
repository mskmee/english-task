import {Page} from '../Page';
import {ErrorTypes} from '../../../types/enum/ErrorTypes';


export class ErrorPage extends Page {
  private readonly errorType: ErrorTypes | string;
  static TextObject: {[prop: string]: string} = {
    404: 'Error! The page was not found'
  };
  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.appendChild(title);
    return this.container;
  }
}
