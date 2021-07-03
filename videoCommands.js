const prefix = process.env.PREFIX;

function sendSeinfeld(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=_V2sBURgUBI");
  }
}

function sendCurb(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=Ag1o3koTLWM");
  }
}

function sendSunny(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://youtu.be/idoYCVLh2qI");
  }
}

function sendKermitWrong(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=bKgWm5TNeBA");
  }
}

function sendBeans(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://youtu.be/bM25p7tGcOQ");
  }
}

function sendBanana(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=S-Eyhq-D9yM");
  }
}

function sendIron(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=GJ0mO8P37Eg");
  }
}

function sendPorkin(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=PwQns6vGfj4");
  }
}

function sendRp1(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=VMBylNJQEbg");
  }
}

function sendCooks(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=QrGrOK8oZG8");
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes(prefix + "awkward")) {
      found = true;
      sendSeinfeld(message);
    }
    if (lowerCase.includes(prefix + "awk")) {
      found = true;
      sendSeinfeld(message);
    }
    if (lowerCase.includes(prefix + "fail")) {
      found = true;
      sendCurb(message);
    }
    if (lowerCase.includes(prefix + "abrupt")) {
      found = true;
      sendSunny(message);
    }
    if (lowerCase.includes(prefix + "sudden")) {
      found = true;
      sendSunny(message);
    }
    if (lowerCase.includes(prefix + "wrong")) {
      found = true;
      sendKermitWrong(message);
    }
    if (lowerCase.includes(prefix + "beans")) {
      found = true;
      sendBeans(message);
    }
    if (lowerCase.includes(prefix + "banana")) {
      found = true;
      sendBanana(message);
    }
    if (lowerCase.includes(prefix + "iron")) {
      found = true;
      sendIron(message);
    }
    if (lowerCase.includes(prefix + "porkin")) {
      found = true;
      sendPorkin(message);
    }
    if (lowerCase.includes(prefix + "rp1")) {
      found = true;
      sendRp1(message);
    }
    if (lowerCase.includes(prefix + "cooks")) {
      found = true;
      sendCooks(message);
    }
    return found;
  },
};
