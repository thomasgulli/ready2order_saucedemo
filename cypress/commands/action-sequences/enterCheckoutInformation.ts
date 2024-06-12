import { User } from "../../fixtures/models";
import CheckoutInformationLocators from "../../pages/checkoutInformationLocators";
import ShoppingCartListLocators from "../../pages/shoppingCartListLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        enterCheckoutInformation: typeof enterCheckoutInformation;
      }
    }
  }
  
  /**
   * Enter checkout information
   * @param user enter the user which holds the checkout information
   * @example
   * cy.enterCheckoutInformation(checkoutInformation)
   *
   */
  export const enterCheckoutInformation = function(user: User) {
    const shoppingCartListLocators = new ShoppingCartListLocators();
    const checkoutInformationLocators = new CheckoutInformationLocators();

    shoppingCartListLocators.checkoutButton().click()

    checkoutInformationLocators.firstName().type(user.checkoutInformation.firstName);
    checkoutInformationLocators.lastName().type(user.checkoutInformation.lastName);
    checkoutInformationLocators.zipCode().type(user.checkoutInformation.zipCode);
    checkoutInformationLocators.continueButton().click();
  };