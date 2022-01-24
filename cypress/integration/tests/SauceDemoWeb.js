/// <reference types="cypress" />

const {webFlows} = require('../../main/workflows/WebFlows')
const {verifications} = require('../../main/extensions/Verifications')
const {managePages} = require('../../main/utilities/ManagePages')
const { UIactions } = require('../../main/extensions/UIActions')

beforeEach(()=>{
    cy.visit("https://www.saucedemo.com")
    webFlows.login("standard_user","secret_sauce")
})

it("Test01 - Verify Products Page Title", ()=>{
    verifications.verifyTextInElement(managePages.sauceDemoSecondaryHeader.header_secondary_title,"Products")
})

it("Test02 - Verify Items Number", ()=>{
    verifications.verifyNumberOfElements(managePages.sauceDemoInventoryPage.inventory_item, 6)
})

it("Test03 - Add and Remove Item Testing", ()=>{
    webFlows.addItem("Sauce Labs Backpack")
    webFlows.addItem("Sauce Labs Bolt T-Shirt")
    webFlows.removeItem("Sauce Labs Bolt T-Shirt")
    verifications.verifyTextInElement(managePages.saucePrimaryHeader.shopping_cart_badge,1)
    webFlows.removeItem("Sauce Labs Backpack")
})

it("Test04 - Verify low to high sorting items", ()=>{
    UIactions.select(managePages.sauceDemoInventoryPage.product_sort,"Price (low to high)")
    verifications.verifyPriceSorting(managePages.sauceDemoInventoryPage.inventory_item_price,"asc")
})

it("Test05 - Verify high to low sorting items", ()=>{
    UIactions.select(managePages.sauceDemoInventoryPage.product_sort,"Price (high to low)")
    verifications.verifyPriceSorting(managePages.sauceDemoInventoryPage.inventory_item_price,"desc")
})

it("Test06 - Verify visibility of items", ()=>{
    verifications.verifyElementsDisplay(managePages.sauceDemoInventoryPage.inventory_item)
})

it("Test07 - Verify Primary Header Logo Using Visual Testing", ()=>{
    verifications.visualElement(managePages.saucePrimaryHeader.app_logo)
})

describe("Testing Using DDT", ()=>{

    it("Test01 - Verify Item Exists In Cart", ()=>{
        cy.fixture('items').then(function(items){
            items.forEach(item => {
                webFlows.addItem(item.name)
            });
            UIactions.click(managePages.saucePrimaryHeader.shopping_cart_link)
            items.forEach(item => {
                verifications.verifyElementTitleExists(item.name)
            });
        })
    })
    
    it("Test02 - Verify Total Price In Cart", ()=>{
        cy.fixture('items').then(function(items){
            let totalPrice = 0;
            for (let i=0; i<4; i++){
                webFlows.addItem(items[i].name)
                totalPrice += items[i].price;
            }
            webFlows.goToCheckOut("Lior","Cohen","454545")
            managePages.sauceCheckoutOverview.total_price.invoke('text').then((total_txt)=>{ // get price and tax from the website
                managePages.sauceCheckoutOverview.tax_price.invoke('text').then((tax_txt)=>{
                let totalCartPrice = parseFloat(total_txt.split("$")[1]);
                let tax = parseFloat(tax_txt.split("$")[1]);
                assert.equal(totalCartPrice,totalPrice+tax)
                })
            })
        })
    })
})

it("Test08 - Checkout Cart Testing", ()=>{
    webFlows.addItem("Sauce Labs Backpack")
    webFlows.goToCheckOut("Lior","Cohen","454545")
    UIactions.click(managePages.sauceCheckoutOverview.btn_finish)
    verifications.verifyTextInElement(managePages.sauceCheckoutComplete.complete_header,
        "THANK YOU FOR YOUR ORDER")
})

