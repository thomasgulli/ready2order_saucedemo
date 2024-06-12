declare global {
  namespace Cypress {
    interface Chainable {
      getByDataTest: typeof getByDataTest;
    }
  }
}
  
  /**
   * Get elements using data-test tag
   * @param input give the value of the data-test tag
   * @example
   * cy.getDataTest('username')
   *
   */
  export const getByDataTest = function(this: any, input: string): Cypress.Chainable<any> {
    return cy.get(`[data-test='${input}']`);
  };