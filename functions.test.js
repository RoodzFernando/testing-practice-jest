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

  