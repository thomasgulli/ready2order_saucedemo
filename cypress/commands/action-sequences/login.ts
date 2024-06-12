import LoginPageLocators from "../../pages/loginPageLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        login: typeof login;
      }
    }
  }
  
  /**
   * Logs into the application with the given user
   * @param username username to login
   * @param password password to login
   * @example
   * cy.login('standard_user', 'secret_sauce')
   *
   */
  export const login = function(username: string, password: string) {
    const loginPageLocators = new LoginPageLocators();

    cy.visit('/');
    loginPageLocators.usernameField().type(username);
    loginPageLocators.passwordField().type(password);
    loginPageLocators.loginButton().click();
  };