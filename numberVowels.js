const numberOfVowels = function(str) {
  const vowels = ['a', 'e', 'o', 'u', 'i'];

  let total = 0;

  for (const letter of str) {
    if (vowels.includes(letter)) {
      total += 1;
    }
  }

  return total;
};

const numberOfVowels2 = function(str) {
  const vowels = new RegExp(/[aeiou]/gi);

  return str.match(vowels).length;
};

const repeatNumbers = function(arr) {};

module.exports = {
  numberOfVowels,
  repeatNumbers,
};
