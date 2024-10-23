const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../pom/pages/login.page');
const loginPage = new LoginPage();
const {credentials} = require('../../config/testCredentials.json');

describe('UC-2 Test Login form with credentials by passing Username', () => {
    it('It should open the correct app website', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('Swag Labs');
    });    
    for (const username of credentials) {
        it(`Test Login form by passing Username: ${username}`, async () => {
            await loginPage.open();
            //await loginPage.fillLoginFormFieldsWithValue('test');
            //await loginPage.clearLoginFormCredentials();
            await loginPage.submitLoginFormWithNoCredentials();
            await loginPage.isFlashBannerDisplayed();
            await loginPage.checkFlashBannerMessage('Epic sadface: Username is required');
        });
    }
});

/* it('should login with valid credentials', async () => {
    await loginPage.open();

    await loginPage.items.username.setValue('tomsmith');
    await loginPage.items.password.setValue('SuperSecretPassword!');
    await loginPage.submit();

    await loginPage.isFlashBannerDisplayed();
    await loginPage.checkFlashBannerMessage('You logged into a secure area!');
});

it('should show an username invalid error with no credentials', async () => {
    await loginPage.open();

    await loginPage.submit();

    await loginPage.isFlashBannerDisplayed();
    await loginPage.checkFlashBannerAttribute('class', 'flash error');
    await loginPage.checkFlashBannerMessage('Your username is invalid!');
});

it('should show an username invalid error with invalid username', async () => {
    await loginPage.open();

    await loginPage.items.username.setValue('random');
    await loginPage.submit();

    await loginPage.isFlashBannerDisplayed();
    await loginPage.checkFlashBannerAttribute('class', 'flash error');
    await loginPage.checkFlashBannerMessage('Your username is invalid!');
});

it('should show an password invalid error with valid username an no password', async () => {
    await loginPage.open();

    await loginPage.items.username.setValue('tomsmith');
    await loginPage.submit();

    await loginPage.isFlashBannerDisplayed();
    await loginPage.checkFlashBannerAttribute('class', 'flash error');
    await loginPage.checkFlashBannerMessage('Your password is invalid!');
});

it('should show an password invalid error with valid username and wrong password', async () => {
    await loginPage.open();

    await loginPage.items.username.setValue('tomsmith');
    await loginPage.items.password.setValue('random');
    await loginPage.submit();

    await loginPage.isFlashBannerDisplayed();
    await loginPage.checkFlashBannerAttribute('class', 'flash error');
    await loginPage.checkFlashBannerMessage('Your password is invalid!');
}); */

