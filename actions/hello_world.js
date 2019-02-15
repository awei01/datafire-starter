"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "name",
    default: "world"
  }],
  handler: async (input, context) => {
    return 'Hello, ' + input.name;
  },
});
