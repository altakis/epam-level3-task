class ContentContainer {
    get pageTitle() {
        return $('#header_container > div.primary_header > div.header_label > div');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }
}


module.exports = ContentContainer;