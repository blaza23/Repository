

let numOfVowels = 0;
let numOfConsonants = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

function putI (word) {
    for(let letter of word.toLowerCase()) {
        if(vowels.includes(letter)) {
            numOfVowels++;
        }
        else {
            numOfConsonants++;
        }
    }

    if(word.charAt(0) === 'I' || numOfVowels >= numOfConsonants
        || word.charAt(0) === word.charAt(0).toLowerCase()) {
            return 'Invalid word'
        }
        else {
            word = 'i' + word;
            return word
        }
}

console.log(putI('Apple'))
console.log(putI('Bootcamp'))