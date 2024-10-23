const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../po/pages/login.page');
const loginPage = new LoginPage();

describe('My Login application', () => {
    it('should open the app in the expected hosting', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('The Internet');
        await loginPage.checkFormTitle('Login Page');
    })
    it('should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.items.username.setValue('tomsmith');
        await loginPage.items.password.setValue('SuperSecretPassword!');
        await loginPage.submit();

        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerMessage('You logged into a secure area!');
    })

    it('should show an username invalid error with no credentials', async () => {
        await loginPage.open();

        await loginPage.submit();

        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerAttribute('class', 'flash error');
        await loginPage.checkFlashBannerMessage('Your username is invalid!');
    })

    it('should show an username invalid error with invalid username', async () => {
        await loginPage.open();

        await loginPage.items.username.setValue('random');
        await loginPage.submit();

        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerAttribute('class', 'flash error');
        await loginPage.checkFlashBannerMessage('Your username is invalid!');
    })

    it('should show an password invalid error with valid username an no password', async () => {
        await loginPage.open();

        await loginPage.items.username.setValue('tomsmith');
        await loginPage.submit();

        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerAttribute('class', 'flash error');
        await loginPage.checkFlashBannerMessage('Your password is invalid!');
    })

    it('should show an password invalid error with valid username and wrong password', async () => {
        await loginPage.open();

        await loginPage.items.username.setValue('tomsmith');
        await loginPage.items.password.setValue('random');
        await loginPage.submit();

        await loginPage.isFlashBannerDisplayed();
        await loginPage.checkFlashBannerAttribute('class', 'flash error');
        await loginPage.checkFlashBannerMessage('Your password is invalid!');
    })
})

