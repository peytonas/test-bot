var MarkovChain = require("markovchain");
quotes = new MarkovChain(fs.readFileSync("./quotes.txt", "utf8"));
const prefix = process.env.PREFIX;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getMarkovChain(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(101);
    var useUpperCase = function (wordList) {
      var tmpList = Object.keys(wordList).filter(function (word) {
        return word[0] >= "A" && word[0] <= "Z";
      });
      return tmpList[~~(Math.random() * tmpList.length)];
    };
    message.channel.send(quotes.start(useUpperCase).end(i).process());
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes(prefix + "markov")) {
      found = true;
      getMarkovChain(message);
    }
    return found;
  },
};
