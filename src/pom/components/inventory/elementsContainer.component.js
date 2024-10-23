class ContentContainer {
    get pageTitle() {
        return $('#header_container > div.primary_header > div.header_label > div');
    }    
}


module.exports = ContentContainer;