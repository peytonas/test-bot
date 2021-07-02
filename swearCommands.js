const prefix = process.env.PREFIX;

function censor(lowerCase, message) {
  console.log("CENSOR");
  let lc = lowerCase.split(" ");
  console.log(lc);
  if (message.author.bot) {
    return;
  } else {
    for (var i in lc) {
      console.log(i);
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
      if (lc[i].includes("shit")) {
        lc[i] = "*poop*";
      }
      if (lc[i].includes("horseshit")) {
        lc[i] = "*horse poop*";
      }
      if (lc[i].includes("shitty")) {
        lc[i] = "*poopy*";
      }
      if (lc[i].includes("damn")) {
        lc[i] = "*a beaver's home*";
      }
      if (lc[i].includes("dammit")) {
        lc[i] = "*dangnabbit*";
      }
      if (lc[i].includes("fuck")) {
        lc[i] = "*fudgesicle*";
      }
      if (lc[i].includes("fucking")) {
        lc[i] = "*fudgesicle-ing*";
      }
      if (lc[i].includes("god")) {
        lc[i] = "*golly*";
      }
      if (lc[i].includes("bitch")) {
        lc[i] = "*female dog*";
      }
      if (lc[i].includes("bitches")) {
        lc[i] = "*female dogs*";
      }
      if (lc[i].includes("bitchin")) {
        lc[i] = "*female dogging*";
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
      if (lc[i].includes("ass")) {
        console.log("booty");
        lc[i] = "*booty*";
      }
      if (lc[i].includes("asses")) {
        lc[i] = "*booties*";
      }
      if (lc[i].includes("asshole")) {
        lc[i] = "*bootyhole*";
      }
      if (lc[i].includes("assholes")) {
        lc[i] = "*bootyholes*";
      }
      if (lc[i].includes("bullshit")) {
        lc[i] = "*male cow poop*";
      } else {
        return;
      }
    }
    let newStr = lc.join(" ");
    message.channel.send(`Don't you mean "` + newStr + `"?`);
    console.log("end");
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;
    console.log(lowerCase);
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
