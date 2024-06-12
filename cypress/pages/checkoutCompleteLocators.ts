
class CheckoutcompleteLocators {
  public image = (): Cypress.Chainable<any> => cy.getByDataTest('pony-express');
  public title = (): Cypress.Chainable<any> => cy.getByDataTest('complete-header');
  public text = (): Cypress.Chainable<any> => cy.getByDataTest('complete-text');
  public BackToHomeButton = (): Cypress.Chainable<any> => cy.getByDataTest('back-to-products');
}

export default CheckoutcompleteLocators;