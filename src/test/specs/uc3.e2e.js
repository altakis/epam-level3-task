const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../pom/pages/login.page');
const loginPage = new LoginPage();
const InventoryPage = require('../../pom/pages/inventory.page');
const inventoryPage = new InventoryPage();
const { credentials, testPassword } = require('../../config/testCredentials.json');

describe('UC-3 Test Login form with credentials by passing Username & Password', () => {
    it('It should open the correct app website', async () => {
        await loginPage.open();
        await expect(browser).toHaveTitle('Swag Labs');
    });
    for (const username of credentials) {
        it(`Test Login form by passing Username: ${username}`, async () => {
            await loginPage.open();
            await loginPage.items.username.setValue(username);
            await loginPage.items.password.setValue(testPassword);
            await loginPage.submitLoginForm();
            await inventoryPage.checkPageTitle('Swags Labs');
            await inventoryPage.logoutSession();
        });
    }
});
