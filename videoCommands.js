const prefix = process.env.PREFIX;

let meatGifs = [
  "./MeatGifs/lurtz.gif",
  "./MeatGifs/meat_vision.gif",
  "./MeatGifs/slap.gif",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sendHai(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=Z-yJTjbswhw");
  }
}

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

function sendMeat(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(meatGifs.length);
    message.channel.send({ files: [meatGifs[i]] });
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

function sendPoorTom(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=51jvfaqiNio");
  }
}

function sendOmg(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("https://www.youtube.com/watch?v=pRR43HZjC4Y");
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
    if (lowerCase.includes("s" + prefix + "ascend confirm")) {
      found = true;
      sendBeans(message);
    }
    if (lowerCase.includes(prefix + "banana")) {
      found = true;
      sendBanana(message);
    }
    if (lowerCase.includes(prefix + "outlaw")) {
      found = true;
      sendIron(message);
    }
    if (lowerCase.includes(prefix + "porkin")) {
      found = true;
      sendPorkin(message);
    }
    if (lowerCase.includes(prefix + "meat")) {
      found = true;
      sendMeat(message);
    }
    if (lowerCase.includes(prefix + "rp1")) {
      found = true;
      sendRp1(message);
    }
    if (lowerCase.includes(prefix + "cooks")) {
      found = true;
      sendCooks(message);
    }
    if (lowerCase.includes(prefix + "poortom")) {
      found = true;
      sendPoorTom(message);
    }
    if (lowerCase.includes("well hi")) {
      found = true;
      sendCooks(message);
    }
    if (lowerCase.includes("whale") && lowerCase.includes("hai")) {
      found = true;
      sendHai(message);
    }
    if (lowerCase.includes(prefix + "omg")) {
      found = true;
      sendOmg(message);
    }
    return found;
  },
};
