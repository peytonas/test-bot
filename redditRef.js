function redditRef(lowerCase) {
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
  checkCmd: function (message) {
    let command = message.content,
      found = false;
    lowerCase = message.content.toLowerCase();

    switch (lowerCase) {
      // your first admin command (can be whatever you want)
      case lowerCase.includes("r/"):
        found = true;
        redditRef(lowerCase);
        break;
    }
    return found;
  },
};
