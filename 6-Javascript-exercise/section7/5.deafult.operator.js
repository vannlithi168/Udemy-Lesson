function interest(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5));
