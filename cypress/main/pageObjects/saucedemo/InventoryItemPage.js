export class InventoryItemPage{
    constructor(){
        this._inventory_details_img = ".inventory_details_img"
        this._inventory_details_name = "div[class='inventory_details_name large_size']"
        this._inventory_details_desc = "div[class='inventory_details_desc large_size']"
        this._inventory_details_price = ".inventory_details_price"
        this._btn_removeItem = "button[name*='remove']"
        this._btn_addItem = "button[name*='add-to-cart']"
    }

    get inventory_details_img() {return cy.get(this._inventory_details_img)}
    get inventory_details_name() {return cy.get(this._inventory_details_name)}
    get inventory_details_desc() {return cy.get(this._inventory_details_desc)}
    get inventory_details_price() {return cy.get(this._inventory_details_price)}
    get btn_removeItem() {return cy.get(this._btn_removeItem)}
    get btn_addItem() {return cy.get(this._btn_addItem)}

}