export class CheckoutOverviewPage{
    constructor(){
        this._cart_item = ".cart_item"
        this._total_price = ".summary_total_label"
        this._btn_finish = "#finish"
        this._btn_cancel = "#cancel"
        this._inventory_item_price = ".inventory_item_price"
        this._tax_price = ".summary_tax_label"
    }

    get cart_item() {return cy.get(this._cart_item)}
    get total_price() {return cy.get(this._total_price)}
    get btn_finish() {return cy.get(this._btn_finish)}
    get btn_cancel() {return cy.get(this._btn_cancel)}
    get inventory_item_price() {return cy.get(this._inventory_item_price)}
    get tax_price() {return cy.get(this._tax_price)}
}

module.exports ={CheckoutOverviewPage}
