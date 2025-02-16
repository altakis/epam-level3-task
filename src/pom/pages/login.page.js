const ContentContainer = require('../components/login/elementsContainer.component');
class LoginPage {
    constructor() {
        this.items = new ContentContainer();
    }
    async open() {
        return await browser.url(`https://www.saucedemo.com/`);
    }

    async submitLoginForm() {
        return await this.items.submitButton.click();
    }

    async fillLoginFormFieldsWithValue(value) {
        await this.items.username.setValue(value);
        return await this.items.password.setValue(value);        
    }

    async submitLoginFormWithNoCredentials() {
        await this.items.username.clearValue();
        await this.items.password.clearValue();
        return await this.items.submitButton.click();
    }

    async clearLoginFormCredentials() {
        await this.items.username.clearValue();
        await this.items.password.clearValue();
        await expect(this.items.username).toHaveText('');
        return await expect(this.items.password).toHaveText('');
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