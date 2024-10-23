const ContentContainer = require('../components/login/contentContainer.component');
class LoginPage {
    constructor() {
        this.items = new ContentContainer();
    }
    async open() {
        return await browser.url(`https://www.saucedemo.com/`);
    }

    async submitLoginForm() {
        return await this.items.submitButton.click()
    }

    async clearLoginFormCredentials() {
        await this.items.username.clearValue();
        return await this.items.password.clearValue();
    }

    async checkFormTitle(title) {
        return await expect(this.items.formTitle).toHaveText(expect.stringContaining(title));
    }

    async isFlashBannerDisplayed() {
        return await expect(this.items.flashBanner).toBeDisplayed();
    }

    async checkFlashBannerMessage(msg) {
        return await expect(this.items.flashBanner).toHaveText(expect.stringContaining(msg));
    }

    async checkFlashBannerAttribute(attr, value) {
        return await expect(this.items.flashBanner).toHaveAttribute(attr, value);
    }
}


module.exports = LoginPage;