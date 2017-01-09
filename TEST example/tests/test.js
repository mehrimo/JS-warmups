'use strict';
const code = require('../array-integers-and-tests.js');
const expect = require('chai').expect; //chai is the assertion library


describe("arrSum", function() {
  it("param must be an array", () => {
    expect([1, 5, 10]).to.deep.equal([1, 5, 10]);
  });
  it("param must not be empty", () => {
    expect(([1,2,3])).not.equal([]);
  });
});
