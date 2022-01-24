
const { CartPage } = require('../pageObjects/saucedemo/CartPage');
const { CheckoutInformationPage } = require('../pageObjects/saucedemo/CheckoutInformationPage');
const { CheckoutComplete } = require('../pageObjects/saucedemo/CheckoutComplete');
const { InventoryPage } = require('../pageObjects/saucedemo/InventoryPage');
const {LoginPage} = require('../pageObjects/saucedemo/LoginPage');
const { PrimaryHeader } = require('../pageObjects/saucedemo/PrimaryHeader');
const {SecondaryHeaderPage} = require('../pageObjects/saucedemo/SecondaryHeaderPage');
const { CheckoutOverviewPage } = require('../pageObjects/saucedemo/CheckoutOverviewPage');

class ManagePages {

    // initSauceDemo
   get sauceDemoLogin(){return new LoginPage()}
   get sauceDemoSecondaryHeader(){return new SecondaryHeaderPage()}
   get sauceDemoInventoryPage() {return new InventoryPage()}
   get sauceCartPage() {return new CartPage}
   get saucePrimaryHeader(){return new PrimaryHeader()}
   get sauceCheckoutOverview(){return new CheckoutOverviewPage()}
   get sauceCheckoutInf(){return new CheckoutInformationPage()}
   get sauceCheckoutComplete() {return new CheckoutComplete()}

}
const managePages = new ManagePages();

module.exports = {
    ManagePages,
    managePages
}