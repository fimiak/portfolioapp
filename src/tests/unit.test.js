import { sum, myCard } from './unit.js';

test('adds 2 + 2', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Create a card', () => {
  expect(myCard).toMatchObject({ id: 0, value: 1, suite: 2 });
});

/*
expect(myCard)
  .toBeInstanceOf(Class)
  .toMatchObject(object)
  .toHaveProperty(keyPath, value)
*/
