const ContentContainer = require('../components/login/contentContainer.component');
class LoginPage {
    constructor() {
        this.contentContainer = new ContentContainer();
    }
    async open() {
        await browser.url(`https://the-internet.herokuapp.com/login`);
    }

    async submit() {
        await this.contentContainer.submitButton.click()
    }

    async checkFormTitle(title){
        return await expect(this.contentContainer.formTitle).toHaveText(expect.stringContaining(title));
    }

    async checkFlashBannerAvailability() {
        return await expect(this.contentContainer.flashBanner).toBeExisting();
    }

    async checkFlashBannerMessage(msg) {
        return await expect(this.contentContainer.flashBanner).toHaveText(expect.stringContaining(msg));
    }

    async checkFlashBannerAttribute(attr, value){        
        return await expect(this.contentContainer.flashBanner).toHaveAttribute(attr, value);
    }
}


module.exports = LoginPage;