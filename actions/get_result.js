"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await myActions.return_result.run({}, context);
    return "Party on '" + result + "'";
  },
});
