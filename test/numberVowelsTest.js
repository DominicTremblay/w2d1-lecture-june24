const assert = require('assert');
const { numberOfVowels, repeatNumbers } = require('../numberVowels');

describe('numberOfVowels()', function() {
  it('counts 3 vowels for the word "orange"', function() {
    const result = numberOfVowels('orange');

    assert.equal(result, 3);
  });

  it('counts 5 vowels for the word "lighthouse labs"', function() {
    const result = numberOfVowels('lighthouse labs');
    assert.equal(result, 5);
  });

  it('counts 5 vowels for the word "aeiou"', function() {
    const result = numberOfVowels('aeiou');
    assert.equal(result, 5);
  });
});
