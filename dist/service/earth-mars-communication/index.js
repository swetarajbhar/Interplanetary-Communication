"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateMessage = void 0;
const charMap = {
    a: "2",
    b: "22",
    c: "222",
    d: "3",
    e: "33",
    f: "333",
    g: "4",
    h: "44",
    i: "444",
    j: "5",
    k: "55",
    l: "555",
    m: "6",
    n: "66",
    o: "666",
    p: "7",
    q: "77",
    r: "777",
    s: "7777",
    t: "8",
    u: "88",
    v: "888",
    w: "9",
    x: "99",
    y: "999",
    z: "9999",
    " ": " ",
    0: "0",
    "#": "#",
    "*": "*",
    "+": "+",
    ".": ".",
    ",": ",",
    ":": ":",
};
const keypad = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '*': '',
    '0': ' ',
    '#': 'uppercase'
};
const reverseCharMap = {};
for (const key in charMap) {
    reverseCharMap[charMap[key]] = key;
}
const translateMessage = (message, sender, receiver) => {
    const isEarthToMars = sender === "earth" && receiver === "mars";
    const isMarsToEarth = sender === "mars" && receiver === "earth";
    if (isEarthToMars) {
        return message
            .toLowerCase()
            .split("")
            .map((char) => charMap[char] || char)
            .join("");
    }
    else if (isMarsToEarth) {
        console.log("ENTERED ELSE");
        // const numericWords = message.split(" ");
        // console.log("NUMERIC WORDS :", numericWords);
        // return numericWords
        //   .map((numericWord) =>
        //     numericWord
        //       .split(".")
        //       .map((numericPart) => {
        //         const char = reverseCharMap[numericPart];
        //         if (char === undefined) {
        //           return numericPart;
        //         }
        //         return char;
        //       })
        //       .join("")
        //   )
        //   .join(" ");
        let translation = '';
        let currentChar = '';
        let currentDigit = '';
        let isUppercase = false;
        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (char === '#') {
                // Handle uppercase by toggling the flag.
                isUppercase = !isUppercase;
            }
            else if (char === '.') {
                // Treat the dot as a delimiter and add the current character to the translation.
                if (currentDigit !== '') {
                    if (!isUppercase) {
                        // If not in uppercase mode, process the digit.
                        const letters = keypad[currentDigit];
                        if (letters) {
                            const index = currentChar.length % letters.length;
                            currentChar += letters[index];
                        }
                    }
                    else {
                        // If in uppercase mode, convert the digit to uppercase.
                        currentChar += currentDigit[currentDigit.length - 1].toUpperCase();
                    }
                }
                currentDigit = ''; // Reset the currentDigit.
            }
            else {
                // Append the digit to the currentDigit.
                currentDigit += char;
            }
        }
        // Append any remaining characters.
        if (currentDigit !== '') {
            if (!isUppercase) {
                // If not in uppercase mode, process the digit.
                const letters = keypad[currentDigit];
                if (letters) {
                    const index = currentChar.length % letters.length;
                    currentChar += letters[index];
                }
            }
            else {
                // If in uppercase mode, convert the digit to uppercase.
                currentChar += currentDigit[currentDigit.length - 1].toUpperCase();
            }
        }
        // Append any remaining characters.
        if (currentChar !== '') {
            translation += currentChar;
        }
        return translation;
    }
    return message; // Return the original message if sender and receiver don't match conditions
};
exports.translateMessage = translateMessage;
