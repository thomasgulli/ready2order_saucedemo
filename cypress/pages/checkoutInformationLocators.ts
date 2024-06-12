
class CheckoutInformationLocators {
  public firstName = (): Cypress.Chainable<any> => cy.getByDataTest('firstName');
  public lastName = (): Cypress.Chainable<any> => cy.getByDataTest('lastName');
  public zipCode = (): Cypress.Chainable<any> => cy.getByDataTest('postalCode');
  public cancelButton = (): Cypress.Chainable<any> => cy.getByDataTest('cancel');
  public continueButton = (): Cypress.Chainable<any> => cy.getByDataTest('continue');
}

export default CheckoutInformationLocators;