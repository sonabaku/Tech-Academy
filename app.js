
const vowels = ["A", "E", "I", "O", "U","Y"]

function countVowel(str) {
    let say = 0;

  
    for (let letter of str.toUpperCase()) {
        if (vowels.includes(letter)) {
            say++;
        }
    }

    return say
}

// take input
const string = prompt('Enter a string: ');

const netice = countVowel(string);

console.log(netice);