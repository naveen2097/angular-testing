import { AppPage } from './app.po';
import { async } from 'q';
import { browser } from 'protractor';

describe('test-angular-draft App', () => {
  let page: AppPage;
  const EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Users', async () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Users');
  });

  it('should edit the first user ', async () => {
    page.navigateTo();
    await page.getFirstUser().click();
    await browser.wait(EC.presenceOf(await page.getInputField()));
    await page.getInputField().clear();
    await page.getInputField().sendKeys('Naveen');
    await page.clickSubmitButton();
    await browser.wait(EC.presenceOf(await page.getFirstUser()));
    // browser.sleep(2000);
    const userName = await page.getFirstUser().getText();
    expect(userName).toEqual('Naveen');
  });
});
