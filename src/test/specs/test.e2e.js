const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../pom/pages/login.page');
const loginPage = new LoginPage();

describe('saucedemo test battery', () => {
    it('It should open the correct app website', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('Swag Labs');
    });
    it('UC-1 Test Login form with empty credentials', async () => {
        await loginPage.open();
        await loginPage.items.username.setValue('test');
        await loginPage.items.password.setValue('test');
        await loginPage.clearLoginFormCredentials();
        await loginPage.submitLoginForm();
        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerMessage('Epic sadface: Username is required');
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
})

