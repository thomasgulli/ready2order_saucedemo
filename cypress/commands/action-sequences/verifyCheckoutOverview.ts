import { Products, User } from "../../fixtures/models";
import CheckoutOverviewLocators from "../../pages/checkoutOverviewLocators";
import ShoppingCartListLocators from "../../pages/shoppingCartListLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        verifyCheckoutOverview: typeof verifyCheckoutOverview;
      }
    }
  }
  
  /**
   * Verifies products, payment information, shipping information and total price in the checkout overview page
   * @param products a list of products has to be added
   * @param user the user which holds all the information (payment, shipping)
   * @example
   * cy.verifyCheckoutOverview(products, user)
   *
   */
  export const verifyCheckoutOverview = function(products: Products[], user: User) {
    const shoppingCartListLocators = new ShoppingCartListLocators();
    const checkoutOverviewLocators = new CheckoutOverviewLocators();

    // Verify products
    products.forEach((product) => {
      shoppingCartListLocators.itemName(product.name).should('have.text', product.name);
      shoppingCartListLocators.itemDescription(product.name).should('have.text', product.description);
      shoppingCartListLocators.itemPrice(product.price).should('have.text', product.price);
    })

    // Verify Payment information
    checkoutOverviewLocators.paymentInformationLabel().should('have.text', 'Payment Information:');
    checkoutOverviewLocators.paymentInformationValue().should('have.text', user.paymentInformation);

    // Verify Shipping Information
    checkoutOverviewLocators.shippingInformationLabel().should('have.text', 'Shipping Information:');
    checkoutOverviewLocators.shippingInformationValue().should('have.text', user.shippingInformation);

    checkoutOverviewLocators.finishButton().click();
  };