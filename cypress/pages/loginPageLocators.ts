
class LoginPageLocators {
  public usernameField = (): Cypress.Chainable<any> => cy.getByDataTest('username');
  public passwordField = (): Cypress.Chainable<any> => cy.getByDataTest('password');
  public loginButton = (): Cypress.Chainable<any> => cy.getByDataTest('login-button');
  public errorMessageLabel = (): Cypress.Chainable<any> => cy.getByDataTest('error');
}

export default LoginPageLocators;