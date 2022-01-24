class InventoryPage{
    constructor(){
        this._product_sort_container = ".product_sort_container"
        this._inventory_item = ".inventory_item"
        this._inventory_item_name = ".inventory_item_name"
        this._inventory_item_desc = ".inventory_item_desc"
        this._inventory_item_price = ".inventory_item_price"
        this._btn_removeItem = "button[name*='remove']"
        this._btn_addItem = "button[name*='add-to-cart']"
    }
    get product_sort(){return cy.get(this._product_sort_container)}
    get inventory_item(){return cy.get(this._inventory_item)}
    get inventory_item_name(){return cy.get(this._inventory_item_name)}
    get inventory_item_desc(){return cy.get(this._inventory_item_desc)}
    get inventory_item_price(){return cy.get(this._inventory_item_price)}
    get btn_removeItem(){return cy.get(this._btn_removeItem)}
    get btn_addItem(){return cy.get(this._btn_addItem)}
}
module.exports = {InventoryPage}