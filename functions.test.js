const functionObject = require('./functions');


test('capitalize(string) --> String', () => {
  expect(functionObject.capitalize('string')).toBe('String');
});

test('reverse(string) --> gnirts', () => {
  expect(functionObject.reverse('string')).toBe('gnirts');
});

describe('calculator object', () => {
  test('Calculator object has add', () => {
    expect(functionObject.calculator.add).toBeTruthy();
  });

  test('Calculator add(5,5) returns 10', () => {
    expect(functionObject.calculator.add(5, 5)).toBe(10);
  });

  test('Calculator object has subtract', () => {
    expect(functionObject.calculator.subtract).toBeTruthy();
  });
  test('Calculator subtract(15,10) returns 5', () => {
    expect(functionObject.calculator.subtract(15, 10)).toBe(5);
  });


  test('Calculator object has multiply', () => {
    expect(functionObject.calculator.multiply).toBeTruthy();
  });

  test('Calculator multiply(5,5) returns 25', () => {
    expect(functionObject.calculator.multiply(5, 5)).toBe(25);
  });

  test('Calculator object has divide', () => {
    expect(functionObject.calculator.divide).toBeTruthy();
  });
  test('Calculator divide(10,5) returns 2', () => {
    expect(functionObject.calculator.divide(10, 5)).toBe(2);
  });
});

test('acz cesaer function returns ceb', () => {
  expect(functionObject.caesar('acz', 2)).toBe('ceb');
});

test('aCZ ceaser function returns cEB', () => {
  expect(functionObject.caesar('aCZ', 2)).toBe('cEB');
});

test('abc!, 1 ceaser function returns bcd!', () => {
  expect(functionObject.caesar('abc!', 1)).toBe('bcd!');
});

test('analyze the [1, 8, 3, 4, 2, 6] and return and object', () => {
  expect(functionObject.analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
});