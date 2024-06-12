declare global {
  namespace Cypress {
    interface Chainable {
      getById: typeof getById;
    }
  }
}
  
  /**
   * Get elements using id tag
   * @param input give the value of the id tag
   * @example
   * cy.getById('react-burger-menu-btn')
   *
   */
  export const getById = function(this: any, input: string): Cypress.Chainable<any> {
    return cy.get(`[id='${input}']`);
  };