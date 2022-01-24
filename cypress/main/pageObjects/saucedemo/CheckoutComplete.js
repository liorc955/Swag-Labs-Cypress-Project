export class CheckoutComplete{
    constructor(){
        this._complete_header = ".complete-header"
        this._btn_back = "#back-to-products"
    }

    get complete_header() {return cy.get(this._complete_header)}
    get btn_back() {return cy.get(this._btn_back)}
}

module.exports ={CheckoutComplete}
