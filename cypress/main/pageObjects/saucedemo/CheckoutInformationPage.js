export class CheckoutInformationPage{
    constructor(){
        this._first_name = "#first-name"
        this._last_name = "#last-name"
        this._btn_cancel = "#cancel"
        this._btn_continue = "#continue"
        this._postal_code = "#postal-code"
    }

    get first_name() {return cy.get(this._first_name)}
    get last_name() {return cy.get(this._last_name)}
    get btn_cancel() {return cy.get(this._btn_cancel)}
    get btn_continue() {return cy.get(this._btn_continue)}
    get postal_code() {return cy.get(this._postal_code)}
}
 module.exports ={CheckoutInformationPage}