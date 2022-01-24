class CartPage{
    constructor(){
        this._cart_items = ".cart_item"
        this._cart_item_name = ".inventory_item_name"
        this._btn_continue_shopping = "#continue-shopping"
        this._btn_checkout = "#checkout"
        this._btn_remove_item_cart = "button[class='btn btn_secondary btn_small cart_button']"
    }

    get cart_items() {return cy.get(this._cart_items)}
    get cart_item_name() {return cy.get(this._cart_item_name)}
    get btn_continue_shopping() {return cy.get(this._btn_continue_shopping)}
    get btn_checkout() {return cy.get(this._btn_checkout)}
    get btn_remove_item_cart() {return cy.get(this._btn_remove_item_cart)}

}

module.exports = {CartPage}