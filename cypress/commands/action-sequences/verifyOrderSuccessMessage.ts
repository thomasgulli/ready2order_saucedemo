import CheckoutcompleteLocators from "../../pages/checkoutCompleteLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        verifyOrderSuccessMessage: typeof verifyOrderSuccessMessage;
      }
    }
  }
  
  /**
   * Verifies the order success message in the checkout complete page
   * @param title title of the message
   * @param text text of the message
   * @example
   * cy.verifyCheckoutComplete(title, text)
   *
   */
  export const verifyOrderSuccessMessage = function(title: string, text: string) {
    const checkoutCompleteLocators = new CheckoutcompleteLocators();

    checkoutCompleteLocators.image().should('be.visible');
    checkoutCompleteLocators.title().should('have.text', title);
    checkoutCompleteLocators.text().should('have.text', text);

    checkoutCompleteLocators.BackToHomeButton().click();
  };