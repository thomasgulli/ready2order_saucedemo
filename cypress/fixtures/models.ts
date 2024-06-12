interface CheckoutInformation {
    firstName: string,
    lastName: string,
    zipCode: string
  }
  
  // Define the type for the fixture data
  export interface User {
    username: string;
    password: string;
    checkoutInformation: CheckoutInformation,
    paymentInformation: string,
    shippingInformation: string
  }
  
  export interface Products {
    name: string,
    description: string,
    price: string
  }