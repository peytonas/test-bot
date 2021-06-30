const prefix = process.env.PREFIX;
const request = require("request");

function getQuote(message) {
  request(
    "http://inspirobot.me/api?generate=true",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        message.channel.send({
          embed: {
            color: 0xff0000,
            description: "Did you know...🧐",
            image: {
              url: body,
            },
          },
        });
      }
    }
  );
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes(prefix + "quote")) {
      found = true;
      getQuote(message);
    }
    return found;
  },
};
