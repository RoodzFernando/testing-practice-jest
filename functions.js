const ourTest = {
    // capitalize(string) takes a string and returns that string with the first character capitalized.
    capitalize: (str) => {
        return `${str[0].toUpperCase()}${str.substr(1, str.length-1)}`;
    },
    // reverseString(string) takes a string and returns it reversed
    reverse: (str) => {
        return str.split("").reverse().join("");
    },
    // A calculator object that contains the basic operations: add, subtract, divide, and multiply.
    calculator: {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        divide: (x, y) => x / y,
        multiply: (x, y) => x * y,
    },
}

module.exports = ourTest;