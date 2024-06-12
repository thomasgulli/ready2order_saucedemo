
class InventoryLocators {
  private item = (itemName: string): Cypress.Chainable<any> => cy.contains('.inventory_item', itemName);
  public itemName = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_name');
  public itemDescription = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_desc');
  public itemPrice = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_price');
  public addToCartButton = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('button');
}

export default InventoryLocators;