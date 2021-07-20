function censor(lowerCase, message) {
  let lc = lowerCase.split(" ");
  if (message.author.bot) {
    return;
  }
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
      lc[i].endsWith(`"`) ||
      lc[i].endsWith(`'`) ||
      lc[i].endsWith(":") ||
      lc[i].endsWith(")") ||
      lc[i].endsWith("*")
    ) {
      lc[i] = lc[i].slice(0, -1);
    } else if (lc[i].includes("||")) {
      return;
    }
  }
  for (var i = 0; i < lc.length; i++) {
    if (lc[i].includes("damn")) {
      lc[i] = "*a beaver's home*";
    }
    if (lc[i].includes("dammit")) {
      lc[i] = "*dangnabbit*";
    }
    if (lc[i].includes("fucking")) {
      lc[i] = "*fudgesicle-ing*";
    }
    if (lc[i].includes("fuck")) {
      lc[i] = "*fudgesicle*";
    }
    if (lc[i].includes("godfather")) {
      lc[i] = "*golly papa*";
    }
    if (lc[i].includes("god")) {
      lc[i] = "*golly*";
    }
    if (lc[i].includes("bitches")) {
      lc[i] = "*female dogs*";
    }
    if (lc[i].includes("bitchin")) {
      lc[i] = "*female dogging*";
    }
    if (lc[i].includes("bitch")) {
      lc[i] = "*female dog*";
    }
    if (lc[i].includes("dick")) {
      lc[i] = "*penis*";
    }
    if (lc[i].includes("pussy")) {
      lc[i] = "*kitty cat*";
    }
    if (lc[i].includes("pussies")) {
      lc[i] = "*kitty cats*";
    }
    if (lc[i].includes("bullshit")) {
      lc[i] = "*male cow poop*";
    }
    if (lc[i].includes("horseshit")) {
      lc[i] = "*horse poop*";
    }
    if (lc[i].includes("shitty")) {
      lc[i] = "*poopy*";
    }
    if (lc[i].includes("shitposting")) {
      lc[i] = "*poopy posting*";
    }
    if (lc[i].includes("shitpost")) {
      lc[i] = "*poopy post*";
    }
    if (lc[i].includes("shit")) {
      lc[i] = "*poop*";
    }
    if (lc[i].includes("assholes")) {
      lc[i] = "*bootyholes*";
    }
    if (lc[i].includes("asshole")) {
      lc[i] = "*bootyhole*";
    }
    if (lc[i].includes("jackass")) {
      lc[i] = "*burro*";
    }
    if (lc[i].includes("dumbass")) {
      lc[i] = "*dumb burro*";
    }
    if (lc[i].includes("assa")) {
      return;
    }
    if (lc[i].includes("asses") && lc[i].length == 5) {
      lc[i] = "*booties*";
    }
    if (lc[i].includes("asse")) {
      return;
    }
    if (lc[i].includes("assi")) {
      return;
    }
    if (lc[i].includes("asso")) {
      return;
    }
    if (lc[i].includes("assu")) {
      return;
    }
    if (lc[i].includes("assy")) {
      return;
    }
    if (lc[i].includes("aass")) {
      return;
    }
    if (lc[i].includes("bass")) {
      return;
    }
    if (lc[i].includes("cass")) {
      return;
    }
    if (lc[i].includes("dass")) {
      return;
    }
    if (lc[i].includes("eass")) {
      return;
    }
    if (lc[i].includes("fass")) {
      return;
    }
    if (lc[i].includes("gass")) {
      return;
    }
    if (lc[i].includes("hass")) {
      return;
    }
    if (lc[i].includes("iass")) {
      return;
    }
    if (lc[i].includes("jass")) {
      return;
    }
    if (lc[i].includes("kass")) {
      return;
    }
    if (lc[i].includes("lass")) {
      return;
    }
    if (lc[i].includes("mass")) {
      return;
    }
    if (lc[i].includes("nass")) {
      return;
    }
    if (lc[i].includes("oass")) {
      return;
    }
    if (lc[i].includes("pass")) {
      return;
    }
    if (lc[i].includes("qass")) {
      return;
    }
    if (lc[i].includes("rass")) {
      return;
    }
    if (lc[i].includes("sass")) {
      return;
    }
    if (lc[i].includes("tass")) {
      return;
    }
    if (lc[i].includes("uass")) {
      return;
    }
    if (lc[i].includes("vass")) {
      return;
    }
    if (lc[i].includes("wass")) {
      return;
    }
    if (lc[i].includes("xass")) {
      return;
    }
    if (lc[i].includes("yass")) {
      return;
    }
    if (lc[i].includes("zass")) {
      return;
    }
    if (lc[i].includes("ass")) {
      lc[i] = "*booty*";
    }
  }
  let newStr = lc.join(" ");
  message.channel.send(`Don't you mean "` + newStr + `"?`);
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
