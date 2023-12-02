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
  const indexDiff = X_INDEX - lastLetterIndex;
  const decodedLetters = letters.map((letter) => {
    const letterIndex = ALPHABET.indexOf(letter);
    if (letterIndex < 0) return letter;
    const newIndex = (letterIndex + indexDiff) % ALPHABET.length;
    return ALPHABET[newIndex];
  });
  return lettersToString(decodedLetters);
};

const main = () => {
  const encoded = "NKRRU YCKKZNKGXZ D";
  const decoded = counterIntelligence(encoded);
  console.log({ encoded, decoded });
};

main();
