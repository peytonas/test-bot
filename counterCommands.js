const prefix = process.env.PREFIX;
const request = require("request");

// function startInterval(message, members) {
//   setInterval(checkStatus(message, members), 10000);
// }

// function checkStatus(message, guild) {
//   var i = guild;
//   message.channel.send(i);
//   i == 4 ? message.channel.send("yes") : message.channel.send("no");
// }

module.exports = {
  checkCmd: function (lowerCase, message, guild) {
    found = false;
    if (lowerCase.includes(prefix + "status")) {
      found = true;
      message.channel.send(guild[0]);
      // startInterval(message, members);
    }
    return found;
  },
};
