const ourTest = {
    capitalize: (str) => {
        return `${str[0].toUpperCase()}${str.substr(1, str.length-1)}`;
    },
    reverse: (str) => {
        return str.split("").reverse().join("");
    },
    calculator: {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        divide: (x, y) => x / y,
        multiply: (x, y) => x * y,
    },
    caesar: (str, num) => {
        const letters = [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ];
        let output = "";
        str.split("").forEach(letter => {
            const letterIndex = letters.indexOf(letter);
            if ((letterIndex + num) > 25) {
                output += letters[(letterIndex + num) % 25];
            } else {
                output += letters[letterIndex + num];
            }

        })
        return output;
    },
    analyze: (arr) => {
        let len = arr.length;
        let avg = arr.reduce((a, b) => {
            return a + b
        }, 0) / len;
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return {
            average: avg,
            min: min,
            max: max,
            length: len
        }
    }
}

module.exports = ourTest;