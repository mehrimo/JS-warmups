'use strict';
const code = require('../01032017.js');
const expect = require('chai').expect; //chai is the assertion library
describe("countVowels", function() {
  it("accepts only one argument", () => {
    expect(code.countVowels("Hello", "There")).to.equal("I only accept 1 arg");
  });
  it("must include one argument", () => {
    expect(code.countVowels()).to.equal("You must inclue 1 arg");
  });
  it("param must be a string", () => {
    expect(code.countVowels(22)).to.equal("I only accept strings");
  });
});
