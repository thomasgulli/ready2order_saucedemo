import { Products } from "../../fixtures/models";
import InventoryLocators from "../../pages/inventoryLocators";

declare global {
    namespace Cypress {
      interface Chainable {
        addProductsToShoppingCart: typeof addProductsToShoppingCart;
      }
    }
  }
  
  /**
   * Add products to the the shopping cart
   * @param products a list of products has to be added
   * @example
   * cy.addProductsToShoppingCart(products)
   *
   */
  export const addProductsToShoppingCart = function(products: Products[]) {
    const inventoryLocators = new InventoryLocators();

    products.forEach((product) => {
      inventoryLocators.addToCartButton(product.name).click();
    })
  };