## ready2order QA Take-Home Task

We want to test the demo app [SauceDemo](https://www.saucedemo.com/). 

Your task is to:
* Familiarize yourself with the app
* Think about how you would test it
* Write down a list of test scenarios covering the app
* Create a Node.js project and automate a few individual test cases that cover the most important functionalities. ready2order uses Cypress, but if you are not comfortable with that, feel free to use another JS/TS-based framework of your choice.

We do not want you to automate as many tests as possible! Our goal is to see how you approach problems and prioritize, so we have a good basis for further discussion in your next interview round.

Please do not spend more than 3 hours on this task. We know that take-home tasks are an investment from your side, and want to keep the commitment manageable.
******************************************************************************************************************************************************************

I would start testing the app by the business relevant scenarios. My priority is the following:
	
 	1. Login/Logout tests
		- Positive and negative tests with different users (if app has different user roles or in this case with the provided usernames causing different errors in the app)
	2. Checkout process
		
		Happy path:
		- Precondition: Login
		- Verifying list of products are shown
		- Adding products to the cart
		- Navigating to the shopping cart
		- Verifying products (Names, amount, prices, description) in shopping cart
		- Entering Checkout Information
		- Verifying Checkout Overview
			- Products (Names, amount, prices, description)
			- Payment information
			- Shipping information
			- Total Price
		- Finsih order
		- Verifying order success message

		* if product prices are constantly changing it might make sense to mock the products in order to test this part more reliably in the automated UI tests to reduce flakiness -> creating seperate tests for the calculation functionality

		Other checkout process scenarios:
		- Removing products from the shopping cart
			- Removing from products list
			- Removing from shopping cart list
		- Changing quantity in the shopping cart
		- Checkout process with no products added to the shopping cart
			- My assumption: It should not be possible to place an order without having products in the shopping cart
		- Negative tests for Checkout information page:
			- Form validation tests
		- If there are different user roles, I would also consider testing these scenarios with that users
		
	3. Other scenarios
		- Verifying the product detail page
			- Open from product list
			- Open from shopping cart
		- Side menu navigation
		- Sorting of the products
		- Testing of other pages like the About page
		- Testing the footer section (links to twitter, facebook, linkedin) and text
		- Checking responsiveness of the app (different screen sizes, styling, layout, etc.)
		
