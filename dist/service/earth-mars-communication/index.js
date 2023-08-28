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
    ".": "#",
    ",": "*",
    ":": "+",
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
        // console.log("ENTERED ELSE");
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
        let translatedMessage = "";
        let currentNumeric = "";
        for (const char of message) {
            if (char === " " || char === ".") {
                const translatedChar = reverseCharMap[currentNumeric] || currentNumeric;
                translatedMessage += translatedChar;
                if (char === " ") {
                    translatedMessage += " ";
                }
                currentNumeric = "";
            }
            else {
                currentNumeric += char;
            }
        }
        return translatedMessage;
    }
    return message; // Return the original message if sender and receiver don't match conditions
};
exports.translateMessage = translateMessage;
