

const stringLength = require('./characterCounter.js')
const reverseString = require('./reverseString.js');
const Calculator = require('./calculator.js');
const capitalizeString=require('./TDD')

//TASK1
it('Character count', () => expect(stringLength('Golden')).toBe(6))
it('Character count more than 10', () => expect(stringLength('ddddddddddd')).toBe('Error in Data Entry'))
it('Character count Less than 1', () => expect(stringLength(' ')).toBe('Error in Data Entry'))

//TASK2
it('Reversing a String', () => expect(reverseString('Hello')).toBe('olleH'))

//TASK3#
describe('Calculator', () => {
    test('ADD', () => {
        expect(Calculator.add(5, 5)).toBe(10);
        expect(Calculator.add(3, 5)).toBe(8);
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test('SUBTRACT', () => {
        expect(Calculator.subtract(10, 5)).toBe(5);
        expect(Calculator.subtract(8, 5)).toBe(3);
        expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('DIVIDE', () => {
        expect(Calculator.divide(10, 5)).toBe(2);
        expect(Calculator.divide(8, 2)).toBe(4);
        expect(Calculator.divide(6, 3)).toBe(2);
    });

    test('MULTIPLY', () => {
        expect(Calculator.multiply(10, 5)).toBe(50);
        expect(Calculator.multiply(8, 2)).toBe(16);
        expect(Calculator.multiply(6, 3)).toBe(18);
    });
});

//TASK$
it('Capitalize String', () => expect(capitalizeString('hello')).toBe('Hello'))
