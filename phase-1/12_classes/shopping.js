class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getFinalPrice() {
    return this.items.reduce(
      (add, value) => add + value.price,0);
  }

  addItem(candy) {
    this.items.push(candy);
  }
}

module.exports = ShoppingBasket;