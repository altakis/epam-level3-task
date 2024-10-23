class ContentContainer {
    get formTitle() {
        return $('#root > div > div.login_logo');
    }
    get username() { return $('#user-name') }
    get password() { return $('#password') }
    get submitButton() { return $('#login-button') }
    get flashBanner() { return $('#login_button_container > div > form > div.error-message-container.error > h3') }

}


module.exports = ContentContainer;