import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  describe('hero parent component', () => {
    const heroNames = ['Superman', 'Aquaman', 'Flash', 'Antman', 'Wonder woman'];
    const masterName = 'Master';

    it('Shoul render properties passed from parent', () => {
      browser.get(`${browser.baseUrl}/component-comunication/parent-to-child-with-input-binding-page`);

      const parent = element.all(by.tagName('app-hero-parent')).get(0);
      const childList = parent.all(by.tagName('app-hero-child'));

      for (let i = 0; i < heroNames.length; i++) {
        const childTitle = childList.get(i).element(by.tagName('h3')).getText();
        const childDetail = childList.get(i).element(by.tagName('p')).getText();

        expect(childTitle).toEqual(`Hero in child: ${heroNames[i]}`);
        expect(childDetail).toContain(masterName);
      }
    });
  });

  describe('name parent component', () => {
    it('Should display trimmed name', () => {
      browser.get(`${browser.baseUrl}/component-comunication/intercept-input-property-changes-with-a-setter`);

      const idxOfTrimmedNameElement = 1;
      const trimmedName = 'flash';

      const parent = element.all(by.tagName('app-name-parent')).get(0);
      const child = parent.all(by.tagName('app-name-child')).get(idxOfTrimmedNameElement);
      const titleElement = child.element(by.tagName('h3'));

      expect(titleElement.getText()).toEqual(trimmedName);
    });

    it('Should display default name', () => {
      browser.get(`${browser.baseUrl}/component-comunication/intercept-input-property-changes-with-a-setter`);

      const idxOfDefaultNameElement = 2;
      const defaultName = '<without name>';

      const parent = element.all(by.tagName('app-name-parent')).get(0);
      const child = parent.all(by.tagName('app-name-child')).get(idxOfDefaultNameElement);
      const titleElement = child.element(by.tagName('h3'));

      expect(titleElement.getText()).toEqual(defaultName);
    });
  });
});
