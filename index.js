const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const X_INDEX = ALPHABET.indexOf("X");

const last = (arr) => arr[arr.length - 1];

const stringToLetters = (string) => Array.from(string);

const lettersToString = (letters) => letters.join("");

const counterIntelligence = (encoded) => {
  const encodedUpper = encoded.toUpperCase();
  const letters = stringToLetters(encodedUpper);
  const lastLetter = last(letters);
  const lastLetterIndex = ALPHABET.indexOf(lastLetter);
  const shift = X_INDEX - lastLetterIndex;
  const decodedLetters = letters.map((letter) => {
    const letterIndex = ALPHABET.indexOf(letter);
    if (letterIndex < 0) return letter;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    const n = letterIndex + shift;
    const d = ALPHABET.length;
    const newIndex = ((n % d) + d) % d;

    return ALPHABET[newIndex];
  });
  return lettersToString(decodedLetters);
};

const runExample = (encoded) => {
  const decoded = counterIntelligence(encoded);
  console.log({ encoded, decoded });
};

const main = () => {
  runExample("Y");
  runExample("BCD Y");
  runExample("ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G");
  runExample("NKRRU YCKKZNKGXZ D");
  runExample("ngbk g toik jge :) d");
  runExample("AAA Y");
};

main();
