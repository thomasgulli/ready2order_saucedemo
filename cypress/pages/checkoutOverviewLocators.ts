
class CheckoutOverviewLocators {
  public paymentInformationLabel = (): Cypress.Chainable<any> => cy.getByDataTest('payment-info-label');
  public paymentInformationValue = (): Cypress.Chainable<any> => cy.getByDataTest('payment-info-value');
  public shippingInformationLabel = (): Cypress.Chainable<any> => cy.getByDataTest('shipping-info-label');
  public shippingInformationValue = (): Cypress.Chainable<any> => cy.getByDataTest('shipping-info-value');
  public totalPriceLabel = (): Cypress.Chainable<any> => cy.getByDataTest('total-info-label');
  public totalPriceValue = (): Cypress.Chainable<any> => cy.getByDataTest('subtotal-label');
  public cancelButton = (): Cypress.Chainable<any> => cy.getByDataTest('cancel');
  public finishButton = (): Cypress.Chainable<any> => cy.getByDataTest('finish');
}

export default CheckoutOverviewLocators;