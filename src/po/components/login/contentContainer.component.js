class ContentContainer {
    get rootEl() {
        return $('#content');
    }
    get formTitle() {
        return $('#content > div > h2');
    }
    get username() { return $('#username') }
    get password() { return $('#password') }
    get submitButton() { return $('#login button[type=submit]') }
    get flashBanner() { return $('#flash') }
    
}


module.exports = ContentContainer;