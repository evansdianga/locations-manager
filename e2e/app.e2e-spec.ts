import { LocationsManagerPage } from './app.po';

describe('locations-manager App', () => {
  let page: LocationsManagerPage;

  beforeEach(() => {
    page = new LocationsManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
