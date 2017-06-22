import { NgAngularFrontendComponentPage } from './app.po';

describe('ng-angular-frontend-component App', () => {
  let page: NgAngularFrontendComponentPage;

  beforeEach(() => {
    page = new NgAngularFrontendComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
