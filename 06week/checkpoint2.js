'use strict';

const userArray = [{
    "customer": {
      "id": 1,
      "customerName": "Marilyn Monroe",
      "customerCity": "New York City",
      "customerState": "NY",
      "product": "Yellow Chair",
      "productPrice": 19.99
    }
  },
  {
    "customer": {
      "id": 2,
      "customerName": "Abraham Lincoln",
      "customerCity": "Boston",
      "customerState": "MA",
      "product": "Movie Tickets",
      "productPrice": 27.00
    }
  },
  {
    "customer": {
      "id": 3,
      "customerName": "John F. Kennedy",
      "customerCity": "Dallas",
      "customerState": "TX",
      "product": "Mustang Convertible",
      "productPrice": 24999.99
    }
  },
  {
    "customer": {
      "id": 4,
      "customerName": "Martin Luther King",
      "customerCity": "Burmingham",
      "customerState": "AL",
      "product": "Sandwiches",
      "productPrice": 7.99
    }
  },
  {
    "customer": {
      "id": 5,
      "customerName": "Edward O. Vidaurri",
      "customerCity": "Austin",
      "customerState": "TX",
      "products": "Javascript Course",
      "productPrice": 2790.00
    }
  },
  //Add another 'customer item to userArray'.
  {
    "customer": {
      "id": 5,
      "customerName": "Edward O. Vidaurri",
      "customerCity": "Austin",
      "customerState": "TX",
      "products": "Javascript Course",
      "productPrice": 2790.00
    }
  },
];
//Added 'const person = custObj.customer' variable to replace 'custObj.customer'
//Forgot to apply it on previous console.log
const objFunc = userArray.map((custObj) => {
  const person = custObj.customer;
  console.log(`${person.customerName} paid $${person.productPrice} for ${person.products} in ${person.customerCity}, ${person.customerState}.`);
});
