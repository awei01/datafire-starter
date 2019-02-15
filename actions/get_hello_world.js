"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await myActions.hello_world.run({
      name: "poop",
    }, context);
    return "Getting " + result;
  },
});
