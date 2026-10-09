import { AppController } from './app.controller.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    appController = new AppController();
  });

  it('filters products by category and sorts by descending stock', () => {
    const result = appController.getFilter('elektronika');

    expect(result.selectedCategory).toBe('elektronika');
    expect(result.products.map((product) => product.stock)).toEqual([
      25, 12, 7, 3,
    ]);
    expect(
      result.products.every((product) => product.category === 'elektronika'),
    ).toBe(true);
  });

  it('returns no products for an unknown category', () => {
    const result = appController.getFilter('ismeretlen');

    expect(result.selectedCategory).toBe('');
    expect(result.products).toEqual([]);
  });

  it('returns no products before a category is selected', () => {
    const result = appController.getFilter();

    expect(result.selectedCategory).toBe('');
    expect(result.products).toEqual([]);
  });
});
