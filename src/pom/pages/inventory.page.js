const ContentContainer = require('../components/inventory/elementsContainer.component');
class InventoryPage {
    constructor() {
        this.items = new ContentContainer();
    }

    async open() {
        return await browser.url(`https://www.saucedemo.com/inventory.html`);
    }

    async checkPageTitle(title) {
        return await expect(this.items.pageTitle).toHaveText(expect.stringContaining(title));
    }

    async logoutSession() {
        return await this.items.logoutSession.click();
    }
}


module.exports = InventoryPage;