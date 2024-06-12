import { standard_user, inventoryProducts } from '../../fixtures/fixtures';

describe('Checkout process', async () => {
  it('Standard user can successfully order some products', () => {
    cy.login(standard_user.username, standard_user.password);

    cy.addProductsToShoppingCart(inventoryProducts);

    cy.verifyProductsInShoppingCart(inventoryProducts);

    cy.enterCheckoutInformation(standard_user);

    cy.verifyCheckoutOverview(inventoryProducts, standard_user);

    cy.verifyOrderSuccessMessage("Thank you for your order!", "Your order has been dispatched, and will arrive just as fast as the pony can get there!");

    cy.logout();
  })
})