const prefix = process.env.PREFIX;
const request = require("request");

function startInterval(message, bot) {
  setInterval(checkStatus(message, bot), 10000);
}

function checkStatus(message, bot) {
  var i = bot.memberCount;
  message.channel.send(i);
  var memberCount = Guild.members.filter((member) => !member.user.bot).size;
  memberCount == 4 ? message.channel.send("yes") : message.channel.send("no");
}

module.exports = {
  checkCmd: function (lowerCase, message, bot) {
    found = false;

    if (lowerCase.includes(prefix + "status")) {
      found = true;
      startInterval(message, bot);
    }
    return found;
  },
};
