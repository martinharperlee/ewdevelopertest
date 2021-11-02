import { increaseNumberInList } from './utils';

describe('increaseNumberInList', () => {
    test('Starting at the first number, it should return the next sequential number', () => {
        expect(increaseNumberInList(0, 10)).toBe(1);
    });

    test('Starting at a mid number, it should return the next sequential number', () => {
        expect(increaseNumberInList(5, 10)).toBe(6);
    });

    test('Starting at the last number, it should  be the first number', () => {
        expect(increaseNumberInList(10, 10)).toBe(0);
    });

    test('Starting out of range should, it return the first number', () => {
        expect(increaseNumberInList(12, 10)).toBe(0);
    });
});