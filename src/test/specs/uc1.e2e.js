const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../pom/pages/login.page');
const loginPage = new LoginPage();

describe('UC-1 Test Login form with empty credentials', () => {
    it('It should open the correct app website', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('Swag Labs');
    });
    it('It should fail authentication with form with empty credentials', async () => {
        await loginPage.open();
        //await loginPage.fillLoginFormFieldsWithValue('test');
        //await loginPage.clearLoginFormCredentials();
        await loginPage.submitLoginFormWithNoCredentials();
        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerMessage('Epic sadface: Username is required');
    });
});

