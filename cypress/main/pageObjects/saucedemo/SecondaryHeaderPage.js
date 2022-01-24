class SecondaryHeaderPage {
    constructor(){
        this._header_secondary_title = ".title"
        this._back_to_products_btn = "#back-to-products"
    }

    get header_secondary_title() {return cy.get(this._header_secondary_title)}
    get back_to_products_btn() {return cy.get(this._back_to_products_btn)}
}

module.exports = {SecondaryHeaderPage}