const ContentContainer = require('../components/login/contentContainer.component');
class LoginPage {
    constructor() {
        this.items = new ContentContainer();
    }
    async open() {
        await browser.url(`https://the-internet.herokuapp.com/login`);
    }

    async submit() {
        await this.items.submitButton.click()
    }

    async checkFormTitle(title){
        return await expect(this.items.formTitle).toHaveText(expect.stringContaining(title));
    }

    async isFlashBannerDisplayed() {
        return await expect(this.items.flashBanner).toBeDisplayed();
    }

    async checkFlashBannerMessage(msg) {
        return await expect(this.items.flashBanner).toHaveText(expect.stringContaining(msg));
    }

    async checkFlashBannerAttribute(attr, value){        
        return await expect(this.items.flashBanner).toHaveAttribute(attr, value);
    }
}


module.exports = LoginPage;