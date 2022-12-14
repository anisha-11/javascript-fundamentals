class ShoppingBasket{
  constructor() {
    this.finalprice = 0;
  };

  addItem(candy) {
    this.finalprice += candy.getPrice();
  };

  getFinalPrice() {
    return this.finalprice;
  };
};

module.exports = ShoppingBasket;