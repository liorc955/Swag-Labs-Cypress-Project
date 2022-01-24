
class UIActions {

  click = (elem) => {
     elem.click();
 }

  updateText = (elem,text) => {
     elem.clear().type(text);
 }

 select = (elem,text) => {
   elem.select(text);
 }

 getElementInList = (elements,elementTitle) => {
   return cy.contains(elements,elementTitle)
 }
 
}

const UIactions = new UIActions();

 module.exports = {UIactions}