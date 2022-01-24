
const {UIactions} = require('../extensions/UIActions')
const {ManagePages, managePages} = require('../../main/utilities/ManagePages')

class WebFlows extends ManagePages {
  
   login = (firstName, password) => {
        UIactions.updateText(this.sauceDemoLogin.txt_userName,firstName)
        UIactions.updateText(this.sauceDemoLogin.txt_password,password)
        UIactions.click(this.sauceDemoLogin.loginBtn)
    }

    addItem = (itemName) =>{
      UIactions.getElementInList(this.sauceDemoInventoryPage._inventory_item,itemName)
      .find(this.sauceDemoInventoryPage._btn_addItem)
      .click()
    }

    removeItem = (itemName) =>{
      UIactions.getElementInList(this.sauceDemoInventoryPage._inventory_item,itemName)
      .find(this.sauceDemoInventoryPage._btn_removeItem)
      .click()
    }

    typeCheckoutInformation = (firstName, lastName, postalCode) => {
      UIactions.updateText(managePages.sauceCheckoutInf.first_name, firstName)
      UIactions.updateText(managePages.sauceCheckoutInf.last_name, lastName)
      UIactions.updateText(managePages.sauceCheckoutInf.postal_code, postalCode)
    }

    goToCheckOut = (firstName, lastName, postalCode) => {
        UIactions.click(managePages.saucePrimaryHeader.shopping_cart_link)
        UIactions.click(managePages.sauceCartPage.btn_checkout)
        this.typeCheckoutInformation(firstName,lastName,postalCode)
        UIactions.click(managePages.sauceCheckoutInf.btn_continue)
    }

}

const webFlows = new WebFlows();

module.exports = {webFlows}
