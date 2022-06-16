/**
 * @jest-environment jsdom
 */
const sum = require('../sum');

test('received string number and should add it as number', () => {
    expect(sum('1', 3)).toBe(4);
});
