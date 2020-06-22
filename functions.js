const functionObject = {
    capitalize: (str) => {
        return `${str[0].toUpperCase()}${str.substr(1, str.length-1)}`;
    },
    reverse: (str) => {
        return str.split("").reverse().join("");
    },
    calculator: {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        divide: (x, y) => {
            if (y == 0) {
                return 'Error';
            } else {
                return x / y;
            }
        },
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
            let letterUpper = /^[A-Z]/.test(letter);
            letter = letter.toLowerCase();

            const letterIndex = letters.indexOf(letter);
            // If not a letter, return same as is
            if(/[^a-zA-Z]/.test(letter)){
                output += letter;
            }else{
                if ((letterIndex + num) > 25) {
                if(letterUpper){
                    output += letters[(letterIndex + num) % 25 - 1].toUpperCase();
                }else{
                     output += letters[(letterIndex + num) % 25 - 1];
                }
               
            } else {
                if(letterUpper){
                    output += letters[letterIndex + num].toUpperCase();
                }else{
                    output += letters[letterIndex + num];
                }
                
            }
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

module.exports = functionObject;