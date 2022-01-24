

class Verifications{

    verifyTextInElement = (element, expectedString) => {
        element.should('have.text',expectedString);
    }

    verifyNumberOfElements = (elements, expectedNumber) => {
        elements.should('have.length', expectedNumber)
    }

    verifyPriceSorting = (elements, sortOption) => {
        switch(sortOption){
            case 'asc':
                let minPrice = Number.MIN_VALUE
                  elements.each(elem => {
                  let currentPrice =  parseFloat(elem.text().replace("$",""))
                  assert.equal(currentPrice >= minPrice, true)
                  minPrice = currentPrice
                })
                break
            case 'desc':
                 let maxPrice = Number.MAX_VALUE
                  elements.each(elem => {
                  let currentPrice =  parseFloat(elem.text().replace("$",""))
                  assert.equal(currentPrice <= maxPrice, true)
                  maxPrice = currentPrice
                })
                break    
        }
    }

    verifyElementsDisplay = (elements) => {
        elements.should('be.visible')
    }

    verifyElementTitleExists = (elemTitle) => {
        cy.contains(elemTitle).should('exist')
    }

    visualElement = (element) => {
        element.toMatchImageSnapshot();
    }
}

const verifications = new Verifications();
module.exports = {verifications}