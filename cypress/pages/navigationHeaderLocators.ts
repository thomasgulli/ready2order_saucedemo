
class NavigationHeaderLocators {
  public shoppingCartButton = (): Cypress.Chainable<any> => cy.getByDataTest('shopping-cart-link');

}

export default NavigationHeaderLocators;