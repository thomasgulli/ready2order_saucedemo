
class SideMenuLocators {
  public openMenuButton = (): Cypress.Chainable<any> => cy.getById('react-burger-menu-btn');
  public closeMenuButton = (): Cypress.Chainable<any> => cy.getById('react-burger-cross-btn');
  public menuItemAllItems = (): Cypress.Chainable<any> => cy.getByDataTest('inventory-sidebar-link');
  public menuItemAbout = (): Cypress.Chainable<any> => cy.getByDataTest('about-sidebar-link');
  public menuItemLogout = (): Cypress.Chainable<any> => cy.getByDataTest('logout-sidebar-link');
  public menuItemReset = (): Cypress.Chainable<any> => cy.getByDataTest('reset-sidebar-link');
}

export default SideMenuLocators;