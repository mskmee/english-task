import {MainPage} from '../templates/sudoku/index';
import {ToSTask} from '../templates/to-s-task/index';
import {Page} from '../templates/Page';
import {HollywoodTaskPage} from '../templates/hollywood-task/index';
import {PagesIds} from '../../types/enum/PagesIds';
import {Header} from '../../components/header/index';
import {ErrorPage} from '../templates/error/index';
import {ErrorTypes} from '../../types/enum/ErrorTypes';

export class App{
  private header: Header;
  private readonly container: HTMLElement;
  private initialPage: MainPage;
  static renderNewPage(idPage: string){
    const appBlock = document.querySelector('#app');
    if(appBlock){
      appBlock.innerHTML = '';
    }
    let page: Page | null = null;
    if(idPage === PagesIds.Sudoku) {
      page = new MainPage(idPage);
    } else if(idPage === PagesIds.ToSTask){
      page = new ToSTask(idPage);
    } else if(idPage === PagesIds.HollywoodTask){
      page = new HollywoodTaskPage(idPage);
    } else if(idPage === PagesIds.Home){
      page = null;
    } else {
      page = new ErrorPage(idPage,ErrorTypes.ERROR_404);
    }

    if(page){
      const pageHTML = page.render();
      const appBlock = document.querySelector('#app');
      appBlock.appendChild(pageHTML);
    }
  }
  constructor() {
    this.header = new Header('header', 'header__wrapper');
    this.container = document.querySelector('#app');
    this.initialPage = new MainPage('main__page');
  }

  private enableRouteChange(){
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash.toLowerCase());
    });
    window.addEventListener('load', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash.toLowerCase());
    });
  }
  run() {
    const body = document.querySelector('body');
    body.prepend(this.header.render());
    this.enableRouteChange();
  }
}
