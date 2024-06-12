import SideMenuLocators from "../../pages/sidemenuLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        logout: typeof logout;
      }
    }
  }
  
  /**
   * Logs out of the application
   * @example
   * cy.logout()
   *
   */
  export const logout = function() {
    const sidemenuLocators = new SideMenuLocators();

    sidemenuLocators.openMenuButton().click();
    sidemenuLocators.menuItemLogout().click();
  };