import { browser, by, element } from 'protractor';

export class CedaElVasoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.scss('app-root h1')).getText();
  }
}
