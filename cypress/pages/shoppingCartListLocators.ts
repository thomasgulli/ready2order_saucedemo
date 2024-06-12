
class ShoppingCartListLocators {
  private item = (itemName: string): Cypress.Chainable<any> => cy.contains('.cart_item', itemName);
  public itemName = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_name');
  public itemDescription = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_desc');
  public itemPrice = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('.inventory_item_price');
  public removeFromCartButton = (itemName: string): Cypress.Chainable<any> => this.item(itemName).find('button');
  public checkoutButton = (): Cypress.Chainable<any> => cy.getByDataTest('checkout');
}

export default ShoppingCartListLocators;