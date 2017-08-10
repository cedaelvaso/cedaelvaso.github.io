import { CedaElVasoPage } from './app.po';

describe('ceda-el-vaso App', () => {
  let page: CedaElVasoPage;

  beforeEach(() => {
    page = new CedaElVasoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
