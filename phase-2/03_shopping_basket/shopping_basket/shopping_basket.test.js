const ShoppingBasket = require('./shopping_basket');

describe('shopping basket', () => {
  it('has 0 items in basket', () => {
    const shopping_basket = new ShoppingBasket();
    expect(shopping_basket.getFinalPrice()).toEqual(0);
  });

  it('calculates price after 1 added item', () => {
    const shopping_basket = new ShoppingBasket();
    const candyDouble = { getName: () => 'Aero', getPrice: () => 1.99};
    shopping_basket.addItem(candyDouble)
    expect(shopping_basket.getFinalPrice()).toEqual(1.99);
  });

  it('calculates price after many added items', () => {
    const shopping_basket = new ShoppingBasket();
    const candyDouble = { getName: () => 'Aero', getPrice: () => 1.99};
    const anothercandyDouble = { getName: () => 'Skittles', getPrice: () => 5.99};
    shopping_basket.addItem(candyDouble)
    shopping_basket.addItem(anothercandyDouble)
    expect(shopping_basket.getFinalPrice()).toEqual(7.98);
  });
})