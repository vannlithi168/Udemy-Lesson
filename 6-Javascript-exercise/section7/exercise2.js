const circle = {
  radius: 1,
  get area() {
    return Math.floor.PI * this.radius * this.radius;
  },
};
console.log(circle.area);
