const prefix = process.env.PREFIX;

function censor(lowerCase, message) {
  if (message.author.bot) {
    return;
  } else {
    let lc = lowerCase.split(" ");
    for (var i in lc) {
      if (lc[i].includes("https")) {
        return;
      } else if (
        lc[i].endsWith("?") ||
        lc[i].endsWith("!") ||
        lc[i].endsWith(".") ||
        lc[i].endsWith(",") ||
        lc[i].endsWith(";") ||
        lc[i].endsWith("*")
      ) {
        lc[i] = lc[i].slice(0, -1);
      } else if (lc[i] == "shit") {
        lc[i] = "*poop*";
      } else if (lc[i] == "horseshit") {
        lc[i] = "*horse poop*";
      } else if (lc[i].includes("shitty")) {
        lc[i] = "*poopy*";
      } else if (lc[i].includes("damn")) {
        lc[i] = "*a beaver's home*";
      } else if (lc[i].includes("dammit")) {
        lc[i] = "*dangnabbit*";
      } else if (lc[i] == "fuck") {
        lc[i] = "*fudgesicle*";
      } else if (lc[i].includes("fucking")) {
        lc[i] = "*fudgesicle-ing*";
      } else if (lc[i].includes("god")) {
        lc[i] = "*golly*";
      } else if (lc[i] == "bitch") {
        lc[i] = "*female dog*";
      } else if (lc[i] == "bitches") {
        lc[i] = "*female dogs*";
      } else if (lc[i].includes("bitchin")) {
        lc[i] = "*female dogging*";
      } else if (lc[i].includes("dick")) {
        lc[i] = "*penis*";
      } else if (lc[i] == "pussy") {
        lc[i] = "*kitty cat*";
      } else if (lc[i] == "pussies") {
        lc[i] = "*kitty cats*";
      } else if (lc[i] == "ass") {
        lc[i] = "*booty*";
      } else if (lc[i] == "asses") {
        lc[i] = "*booties*";
      } else if (lc[i] == "asshole") {
        lc[i] = "*bootyhole*";
      } else if (lc[i] == "assholes") {
        lc[i] = "*bootyholes*";
      } else if (lc[i] == "bullshit") {
        lc[i] = "*male cow poop*";
      } else if (lc[i] == "ass" && lc[i].length != 3) {
        return;
      }
    }
    let newStr = lc.join(" ");
    message.channel.send(`Don't you mean "` + newStr + `"?`);
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (
      lowerCase.includes("shit") ||
      lowerCase.includes("horseshit") ||
      lowerCase.includes("damn") ||
      lowerCase.includes("dammit") ||
      lowerCase.includes("fuck") ||
      lowerCase.includes("fucking") ||
      lowerCase.includes("god") ||
      lowerCase.includes("bitch") ||
      lowerCase.includes("bitches") ||
      lowerCase.includes("dick") ||
      lowerCase.includes("pussy") ||
      lowerCase.includes("pussies") ||
      lowerCase.includes("ass") ||
      lowerCase.includes("asses") ||
      lowerCase.includes("asshole") ||
      lowerCase.includes("assholes") ||
      lowerCase.includes("bullshit")
    ) {
      censor(lowerCase, message);
      found = true;
    }
    return found;
  },
};
