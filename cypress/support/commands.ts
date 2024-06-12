// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { addProductsToShoppingCart } from '../commands/action-sequences/addProductsToShoppingCart';
import { enterCheckoutInformation } from '../commands/action-sequences/enterCheckoutInformation';
import { login } from '../commands/action-sequences/login'
import { logout } from '../commands/action-sequences/logout';
import { verifyCheckoutOverview } from '../commands/action-sequences/verifyCheckoutOverview';
import { verifyOrderSuccessMessage } from '../commands/action-sequences/verifyOrderSuccessMessage';
import { verifyProductsInShoppingCart } from '../commands/action-sequences/verifyProductsInShoppingCart';
import { getById } from '../commands/utility-commands/getById';
import { getByDataTest } from '../commands/utility-commands/getDataTest';

Cypress.Commands.addAll({ login, getByDataTest, logout, getById, addProductsToShoppingCart, verifyProductsInShoppingCart, enterCheckoutInformation, verifyCheckoutOverview, verifyOrderSuccessMessage })