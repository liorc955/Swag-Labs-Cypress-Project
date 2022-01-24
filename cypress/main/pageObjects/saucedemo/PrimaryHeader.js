class PrimaryHeader{
    constructor(){
        this._app_logo = ".app_logo"
        this._burger_menu = "#react-burger-menu-bt"
        this._shopping_cart_link = ".shopping_cart_link"
        this._shopping_cart_badge = ".shopping_cart_badge"
    }

    get app_logo(){return cy.get(this._app_logo)}
    get burger_menu(){return cy.get(this._burger_menu)}
    get shopping_cart_link(){return cy.get(this._shopping_cart_link)}
    get shopping_cart_badge(){return cy.get(this._shopping_cart_badge)}
}

module.exports = {PrimaryHeader}