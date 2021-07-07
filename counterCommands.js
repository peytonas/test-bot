const prefix = process.env.PREFIX;

// function startInterval(message, members) {
//   setInterval(checkStatus(message, members), 10000);
// }

// function checkStatus(message, guild) {
//   var i = guild;
//   message.channel.send(i);
//   i == 4 ? message.channel.send("yes") : message.channel.send("no");
// }

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;
    if (lowerCase.includes(prefix + "status")) {
      found = true;
      message.channel.send("Server Count:", guild.memberCount);
      // startInterval(message, members);
    }
    return found;
  },
};
