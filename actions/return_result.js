"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "name",
    maxLength: 100,
    default: "World"
  }],
  handler: async (input, context) => {
    let result = await Promise.resolve();
    return "Hello, " + input.name;
  },
});
