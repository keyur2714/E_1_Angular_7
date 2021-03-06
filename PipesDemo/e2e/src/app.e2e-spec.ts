import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('PipesDemo');
  });

  it('should display paragraph message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('KEYUR');
  });
});
