'use strict';

const wordToCompare = [];

let lengthyString = 'A dog goes bark and a cat goes meow';

lengthyString = lengthyString.split('');

for (let i = 0; lengthyString.length === i; i++) {
  const word = lengthyString[i];

  if (word === lengthyString[i] + 1) {
    wordToCompare.push(word);
  }
}
return wordToCompare;
