const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../pom/pages/login.page');
const loginPage = new LoginPage();
const { credentials } = require('../../config/testCredentials.json');

describe('UC-2 Test Login form with credentials by passing Username', () => {
    it('It should open the correct app website', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('Swag Labs');
    });
    for (const username of credentials) {
        it(`Test Login form by passing Username: ${username}`, async () => {
            await loginPage.open();
            await loginPage.items.username.setValue(username);
            await loginPage.submitLoginForm();
            await loginPage.isFlashBannerDisplayed();
            await loginPage.checkFlashBannerMessage('Password is required');
        });
    }
});
