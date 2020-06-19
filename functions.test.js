const ourTest = require('./functions');


test('capitalize(string) --> String', () => {
    expect(ourTest.capitalize('string')).toBe('String');
});

test('reverse(string) --> gnirts', () => {
    expect(ourTest.reverse('string')).toBe('gnirts');
});