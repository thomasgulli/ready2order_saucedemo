import { Products } from "../../fixtures/models";
import NavigationHeaderLocators from "../../pages/navigationHeaderLocators";
import ShoppingCartListLocators from "../../pages/shoppingCartListLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        verifyProductsInShoppingCart: typeof verifyProductsInShoppingCart;
      }
    }
  }
  
  /**
   * Verifies products in the the shopping cart
   * @param products a list of products has to be added
   * @example
   * cy.verifyProductsInShoppingCart(products)
   *
   */
  export const verifyProductsInShoppingCart = function(products: Products[]) {
    const shoppingCartListLocators = new ShoppingCartListLocators();
    const navigationHeaderLocators = new NavigationHeaderLocators();

    navigationHeaderLocators.shoppingCartButton().click();

    products.forEach((product) => {
      shoppingCartListLocators.itemName(product.name).should('have.text', product.name);
      shoppingCartListLocators.itemDescription(product.name).should('have.text', product.description);
      shoppingCartListLocators.itemPrice(product.price).should('have.text', product.price);
    })
  };