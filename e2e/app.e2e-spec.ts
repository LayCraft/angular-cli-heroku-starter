import { AngularCliHerokuStarterPage } from './app.po';

describe('angular-cli-heroku-starter App', () => {
  let page: AngularCliHerokuStarterPage;

  beforeEach(() => {
    page = new AngularCliHerokuStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
