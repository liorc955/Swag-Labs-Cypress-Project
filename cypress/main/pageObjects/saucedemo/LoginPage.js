class LoginPage{
    constructor(){
        this._txt_userName = "#user-name"
        this._txt_password = "#password"
        this._loginBtn = "#login-button"
    }

    get txt_userName(){return cy.get(this._txt_userName)}
    get txt_password(){return cy.get(this._txt_password)}
    get loginBtn(){return cy.get(this._loginBtn)}
}
module.exports = {LoginPage}