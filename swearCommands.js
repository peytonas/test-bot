const prefix = process.env.PREFIX;
const request = require("request");

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (
      lowerCase.includes("shit") ||
      lowerCase.includes("damn") ||
      lowerCase.includes("dammit") ||
      lowerCase.includes("fuck") ||
      lowerCase.includes("god") ||
      lowerCase.includes("bitch") ||
      lowerCase.includes("dick") ||
      lowerCase.includes("pussy") ||
      lowerCase.includes("pussies") ||
      lowerCase.includes("ass")
    ) {
      if (message.author.bot) {
        return;
      }
      let lc = lowerCase.split(" ");
      for (var i in lc) {
        if (lc[i].includes("https")) {
          return;
        }
        if (
          lc[i].endsWith("?") ||
          lc[i].endsWith("!") ||
          lc[i].endsWith(".") ||
          lc[i].endsWith(",") ||
          lc[i].endsWith(";") ||
          lc[i].endsWith("*")
        ) {
          lc[i] = lc[i].slice(0, -1);
        }
        if (lc[i] == "shit") {
          lc[i] = "*poop*";
          found = true;
        }
        if (lc[i].includes("shitty")) {
          lc[i] = "*poopy*";
          found = true;
        }
        if (lc[i].includes("damn")) {
          lc[i] = "*a beaver's home*";
          found = true;
        }
        if (lc[i].includes("dammit")) {
          lc[i] = "*dangnabbit*";
          found = true;
        }
        if (lc[i] == "fuck") {
          lc[i] = "*fudgesicle*";
          found = true;
        }
        if (lc[i].includes("fucking")) {
          lc[i] = "*fudgesicle-ing*";
          found = true;
        }
        if (lc[i].includes("god")) {
          lc[i] = "*golly*";
          found = true;
        }
        if (lc[i] == "bitch") {
          lc[i] = "*female dog*";
          found = true;
        }
        if (lc[i] == "bitches") {
          lc[i] = "*female dogs*";
          found = true;
        }
        if (lc[i].includes("bitchin")) {
          lc[i] = "*female dogging*";
          found = true;
        }
        if (lc[i].includes("dick")) {
          lc[i] = "*penis*";
          found = true;
        }
        if (lc[i] == "pussy") {
          lc[i] = "*kitty cat*";
          found = true;
        }
        if (lc[i] == "pussies") {
          lc[i] = "*kitty cats*";
          found = true;
        }
        if (lc[i] == "ass") {
          lc[i] = "*booty*";
          found = true;
        }
        if (lc[i] == "asshole") {
          lc[i] = "*bootyhole*";
          found = true;
        }
        if (lc[i] == "assholes") {
          lc[i] = "*bootyholes*";
          found = true;
        }
        if (lc[i].includes("ass") && lc[i] != "ass") {
          found = true;
          return;
        }
      }
      let newStr = lc.join(" ");
      message.channel.send(`Don't you mean "` + newStr + `"?`);
    }
    return found;
  },
};
