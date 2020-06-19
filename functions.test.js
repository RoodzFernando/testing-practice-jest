const ourTest = require('./functions');


test('capitalize(string) --> String', () => {
    expect(ourTest.capitalize('string')).toBe('String');
});

test('reverse(string) --> gnirts', () => {
    expect(ourTest.reverse('string')).toBe('gnirts');
});

test('Calculator object has add', () => {
    expect(ourTest.calculator.add).toBeTruthy();
})

test('Calculator object has subtract', () => {
    expect(ourTest.calculator.subtract).toBeTruthy();
})


test('Calculator object has multiply', () => {
    expect(ourTest.calculator.multiply).toBeTruthy();
})

test('Calculator object has divide', () => {
    expect(ourTest.calculator.divide).toBeTruthy();
})

test('acz cesaer function returns cec', () => {
    expect(ourTest.caesar('acz', 2)).toBe('cec');
});

test('analyze the [1, 8, 3, 4, 2, 6] and return and object', () => {
    expect(ourTest.analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})