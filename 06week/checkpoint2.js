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
];
const objFunc = userArray.map((custObj) => {
  let person = custObj.customer;
  console.log(custObj.customer.customerState);
});
