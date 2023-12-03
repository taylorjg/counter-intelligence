const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHABET_LENGTH = ALPHABET.length;
const X_INDEX = ALPHABET.indexOf("X");

const last = (arr) => arr[arr.length - 1];

const stringToLetters = (string) => Array.from(string);

const lettersToString = (letters) => letters.join("");

const decodeLetterIndex = (shift, unshiftedIndex) => {
  const shiftedIndex = unshiftedIndex + shift;

  if (shiftedIndex >= ALPHABET_LENGTH) {
    return ALPHABET[shiftedIndex - ALPHABET_LENGTH];
  }

  if (shiftedIndex < 0) {
    return ALPHABET[shiftedIndex + ALPHABET_LENGTH];
  }

  return ALPHABET[shiftedIndex];
};

const counterIntelligence = (encoded) => {
  const encodedUpper = encoded.toUpperCase();
  const letters = stringToLetters(encodedUpper);
  const lastLetter = last(letters);
  const lastLetterIndex = ALPHABET.indexOf(lastLetter);
  const shift = X_INDEX - lastLetterIndex;
  const decodedLetters = letters.map((letter) => {
    const letterIndex = ALPHABET.indexOf(letter);
    return letterIndex >= 0 ? decodeLetterIndex(shift, letterIndex) : letter;
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
