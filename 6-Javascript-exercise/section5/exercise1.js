//Address Object

let address = {
  street: "123",
  city: "Phnom Penh",
  zipCode: "456",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key + ":", address[key]);
  }
}

showAddress(address);
