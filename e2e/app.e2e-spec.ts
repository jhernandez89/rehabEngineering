import { RehabEngineeringPage } from './app.po';

describe('rehab-engineering App', () => {
  let page: RehabEngineeringPage;

  beforeEach(() => {
    page = new RehabEngineeringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
