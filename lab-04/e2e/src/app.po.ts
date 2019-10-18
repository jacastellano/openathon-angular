import { browser, by, element } from 'protractor';

/**
 * Protractor App
 */
export class AppPage {
  /**
   * navigateTo
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * getTitleText
   */
  getTitleText() {
    return element(by.css('oevents-root .content span')).getText() as Promise<string>;
  }
}
