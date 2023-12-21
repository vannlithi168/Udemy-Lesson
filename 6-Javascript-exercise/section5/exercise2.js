// Factory and Constructor Function

//factory function
function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address1 = showAddress("a", "b", "c");
console.log(address1);

// Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new Address("d", "e", "f");
console.log(address2);
