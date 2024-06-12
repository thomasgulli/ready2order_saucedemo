// Import the fixture JSON file
import users from './users.json';
import products from './products.json';
import { Products, User } from './models';

// Export the typed fixture data
const parsedUsers: User[] = JSON.parse(JSON.stringify(users));

export const standard_user: User = parsedUsers['standard_user'];
export const locked_out_user: User = parsedUsers['locked_out_user'];
export const inventoryProducts: Products[] = products;