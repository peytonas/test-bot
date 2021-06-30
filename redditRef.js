function redditRef(lowerCase, message) {
  var lowerCaseStringArray = lowerCase.split(" ");
  var i;
  for (i in lowerCaseStringArray) {
    if (lowerCaseStringArray[i].startsWith("r/")) {
      lowerCase = lowerCaseStringArray[i];
    }
  }
  if (message.author.bot) {
    return;
  } else if (lowerCase.includes(".com")) {
    return;
  } else {
    message.channel.send("This one?");
    setTimeout(function () {
      message.channel.send("https://www.reddit.com/" + lowerCase);
    }, 1500);
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes("r/")) {
      found = true;
      redditRef(lowerCase, message);
    }
    return found;
  },
};
