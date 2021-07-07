const prefix = process.env.PREFIX;
const { Guild } = require("discord.js");
const request = require("request");

function startInterval(message, members) {
  setInterval(checkStatus(message, members), 10000);
}

function checkStatus(message, members) {
  var i = members;
  message.channel.send(i);
  i == 4 ? message.channel.send("yes") : message.channel.send("no");
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;
    members = Guild.members.filter((member) => !member.user.bot).size;
    if (lowerCase.includes(prefix + "status")) {
      found = true;
      startInterval(message, members);
    }
    return found;
  },
};
