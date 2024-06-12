import { standard_user, locked_out_user } from '../../fixtures/fixtures';
import LoginPageLocators from '../../pages/loginPageLocators';

describe('Login/Logout tests', async () => {
  it('Standard user can successfully login and logout', () => {
    cy.login(standard_user.username, standard_user.password);
    cy.location('pathname').should('eq', '/inventory.html');
    cy.getCookie('session-username').should('exist');
    
    cy.logout();
    cy.location('pathname').should('eq', '/');
    cy.getCookie('session-username').should('not.exist');
  })

  it('Locked out user can not login', () => {
    const loginPageLocators = new LoginPageLocators();
    
    cy.login(locked_out_user.username, locked_out_user.password);
    loginPageLocators.errorMessageLabel().should('be.visible').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    
    /**
     * This verification fails, because the application sets a cookie even the user was not able to login --> bug
     */
    cy.getCookie('session-username').should('not.exist');
  })

  it('Login with non-existing user should not work', () => {
    const loginPageLocators = new LoginPageLocators();
    
    cy.login('test_user', '123456');
    loginPageLocators.errorMessageLabel().should('be.visible').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    cy.getCookie('session-username').should('not.exist');  
  })

  it('Login with existing user, but wrong password', () => {
    const loginPageLocators = new LoginPageLocators();
    
    cy.login(standard_user.username, '123456');
    loginPageLocators.errorMessageLabel().should('be.visible').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    cy.getCookie('session-username').should('not.exist');    
  })

  it('Login with empty username and empty password', () => {
    const loginPageLocators = new LoginPageLocators();
    
    cy.visit('/');
    loginPageLocators.loginButton().click();
    loginPageLocators.errorMessageLabel().should('be.visible').should('contain', 'Epic sadface: Username is required');
    cy.getCookie('session-username').should('not.exist');    
  })

  it('Login with username and empty password', () => {
    const loginPageLocators = new LoginPageLocators();
    
    cy.visit('/');
    loginPageLocators.usernameField().type(standard_user.username);
    loginPageLocators.loginButton().click();
    loginPageLocators.errorMessageLabel().should('be.visible').should('contain', 'Epic sadface: Password is required');
    cy.getCookie('session-username').should('not.exist');    
  })
})