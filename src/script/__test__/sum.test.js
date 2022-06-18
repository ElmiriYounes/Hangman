/**
 * @jest-environment jsdom
 */
import sum from '../sum.js'
// const sum = require('../sum')

test('receives string number and should add it as number', () => {
    expect(sum('1', 3)).toBe(4);
});