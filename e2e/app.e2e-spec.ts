import { Ng2AccordionMenuPage } from './app.po';

describe('ng2-accordion-menu App', () => {
  let page: Ng2AccordionMenuPage;

  beforeEach(() => {
    page = new Ng2AccordionMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
