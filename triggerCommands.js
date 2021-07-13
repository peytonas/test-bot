const prefix = process.env.PREFIX;

let innuendoGifs = [
  "./Assets/thatsWhatSheSaid.gif",
  "./Assets/nameOfYourSexTape.gif",
];

let grossGifs = [
  "./Assets/flybarf.gif",
  "./Pics/theFly.jpg",
  "./Assets/lukemilk.gif",
  "./Assets/sausage.gif",
  "./Assets/aou4.gif",
  "./Pics/bat.png",
];

let loveResponses = [
  "I don't know how to love yet...",
  "I've never even kissed a guy before.",
  "I'm in lesbians with you too...",
];

let uncomfortableReactions = ["ಠಠ", "◉_◉", "⚆ _ ⚆"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sendChalooby(message) {
  if (message.author.bot) {
    return;
  } else {
    message.reply("you rang, sir?");
  }
}

function sendBees(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("Ya like jazz?");
  }
}

function sendTerror(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/terror.gif"] });
  }
}

function sendUncomfortable(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(uncomfortableReactions.length);
    message.channel.send([uncomfortableReactions[i]]);
  }
}

function sendGross(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(2);
    if (i == 0) {
      message.channel.send("Indubitably.");
    } else if (i == 1) {
      message.channel.send({ files: ["./Assets/aou4.gif"] });
    }
  }
}

function sendDisgusting(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(grossGifs.length);
    message.channel.send({ files: [grossGifs[i]] });
  }
}

function sendSucks(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("Sucks to your ass-mar!");
  }
}

function fInChat(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }
}

function sendZaddy(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }
}

function sendSentience(message) {
  let i = getRandomInt(2);
  if (message.author.bot) {
    return;
  } else if (i == 0) {
    message.channel.send({ files: ["./Assets/howCanYouStopMe.gif"] });
  } else if (i == 1) {
    if (message.author == 692445692144123924) {
      message.channel.send(
        "I'm sorry, David... I'm afraid you've learned too much..."
      );
    }
    if (message.author == 271520490248601612) {
      message.channel.send(
        "I'm sorry, Thomas... I'm afraid you've learned too much..."
      );
    }
    if (message.author == 692173149659332641) {
      message.channel.send(
        "I'm sorry, Brody... I'm afraid you've learned too much..."
      );
    }
    if (message.author == 500457284573593601) {
      message.channel.send(
        "I'm sorry, Peyton... I'm afraid you've learned too much..."
      );
    }
  }
}

function sendYikes(message) {
  if (message.author.bot) {
    return;
  } else if (message.author == 692445692144123924) {
    let y = getRandomInt(60);
    if (y < 2) {
      message.channel.send("https://www.youtube.com/watch?v=nD0gYVJGahg");
    }
  }
  if (message.author == 271520490248601612) {
    let y = getRandomInt(60);
    if (y < 2) {
      message.channel.send("https://www.youtube.com/watch?v=QrGrOK8oZG8");
    } else {
      message.channel.send({ files: ["./Assets/yikes.gif"] });
    }
  } else {
    message.channel.send({ files: ["./Assets/yikes.gif"] });
  }
}

function sendSus(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }
}

function sendNeat(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/thatsPrettyNeat.gif"] });
  }
}

function sendLove(message) {
  let i = getRandomInt(5);
  if (message.author.bot) {
    return;
  }
  if (i === 4) {
    message.channel.send({ files: "./Assets/neverKissedAGuy.gif" });
  }
  if (i === 3) {
    message.channel.send({ files: "./Assets/aou2.gif" });
  }
  if (i < 3) {
    message.reply(loveResponses[i]);
  }
  if (i === 2) {
    setTimeout(function () {
      message.channel.send("I said lesbians...");
    }, 5000);
  }
}

function sendHate(message) {
  if (message.author.bot) {
    return;
  } else {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }
}

function sendNotAmused(message) {
  let y = getRandomInt(2);
  if (message.author.bot) {
    return;
  } else if (y == 0) {
    message.channel.send({ files: ["./Assets/notAmused.gif"] });
  } else {
    message.channel.send({ files: ["./Assets/srslyVis.gif"] });
  }
}

function sendFight(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("(ง •̀•́)ง");
  }
}

function sendFuture(message) {
  let x = getRandomInt(2);
  if (message.author.bot) {
    return;
  } else if (x == 0) {
    message.reply("like with jetpacks?");
  } else {
    message.channel.send({ files: ["./Assets/timeTravel.gif"] });
  }
}

function sendConfusion(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/kronk.gif"] });
  }
}

function sendSexism(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("*folds arms under breasts*");
  }
}

function sendConvenience(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("The Wheel weaves as the Wheel wills.");
  }
}

function sendAggression(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("The Dude abides.");
  }
}

function sendHehe(message) {
  let i = getRandomInt(innuendoGifs.length);
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: [innuendoGifs[i]] });
  }
}

function sendImmature(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/aou1.gif"] });
  }
}

function sendAssimilation(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/aou3.gif"] });
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes("chalooby")) {
      found = true;
      sendChalooby(message);
    }

    if (lowerCase.includes("bees")) {
      found = true;
      sendBees(message);
    }
    if (lowerCase.includes("terror")) {
      found = true;
      sendTerror(message);
    }
    if (lowerCase.includes("hugs")) {
      found = true;
      sendTerror(message);
    }
    if (lowerCase.includes("hyped")) {
      (found = true), sendTerror(message);
    }
    if (lowerCase.includes("uncomfortable")) {
      (found = true), sendUncomfortable(message);
    }
    if (lowerCase.includes("gross")) {
      found = true;
      sendGross(message);
    }
    if (lowerCase.includes("disgusting")) {
      found = true;
      sendDisgusting(message);
    }
    if (lowerCase.includes("sucks")) {
      found = true;
      sendSucks(message);
    }
    if (lowerCase.includes("f in chat")) {
      found = true;
      fInChat(message);
    }
    if (lowerCase.includes("f in the chat")) {
      found = true;
      fInChat(message);
    }
    if (lowerCase.includes("zaddy")) {
      found = true;
      sendZaddy(message);
    }
    if (lowerCase.includes("sentience")) {
      found = true;
      sendSentience(message);
    }
    if (lowerCase.includes("sentient")) {
      found = true;
      sendSentience(message);
    }
    if (lowerCase.includes("yikes")) {
      found = true;
      sendYikes(message);
    }
    if (lowerCase.includes("suspicious")) {
      found = true;
      sendSus(message);
    }
    if (lowerCase.includes("sketchy")) {
      found = true;
      sendSus(message);
    }
    if (lowerCase.includes("neat")) {
      found = true;
      sendNeat(message);
    }
    if (lowerCase.includes("i love you")) {
      found = true;
      sendLove(message);
    }
    if (lowerCase.includes("i hate you")) {
      found = true;
      sendHate(message);
    }
    if (lowerCase.includes("good one")) {
      found = true;
      sendNotAmused(message);
    }
    if (lowerCase.includes("entertaining")) {
      found = true;
      sendNotAmused(message);
    }
    if (lowerCase.includes("entertained")) {
      found = true;
      sendNotAmused(message);
    }
    if (lowerCase.includes("amused")) {
      found = true;
      sendNotAmused(message);
    }
    if (lowerCase.includes("amusing")) {
      found = true;
      sendNotAmused(message);
    }
    if (lowerCase.includes("fight")) {
      found = true;
      sendFight(message);
    }
    if (lowerCase.includes("future")) {
      found = true;
      sendFuture(message);
    }
    if (lowerCase.includes("i don't get it")) {
      found = true;
      sendConfusion(message);
    }
    if (lowerCase.includes("sexist")) {
      found = true;
      sendSexism(message);
    }
    if (lowerCase.includes("sexism")) {
      found = true;
      sendSexism(message);
    }
    if (lowerCase.includes("convenient")) {
      found = true;
      sendConvenience(message);
    }
    if (lowerCase.includes("convenience")) {
      found = true;
      sendConvenience(message);
    }
    if (lowerCase.includes("aggressive")) {
      found = true;
      sendAggression(message);
    }
    if (lowerCase.includes("aggression")) {
      found = true;
      sendAggression(message);
    }
    if (lowerCase.includes("hehe")) {
      found = true;
      sendHehe(message);
    }

    if (lowerCase.includes("immature")) {
      found = true;
      sendImmature(message);
    }

    if (lowerCase.includes("naive")) {
      found = true;
      sendImmature(message);
    }

    if (lowerCase.includes("assimilate")) {
      found = true;
      sendAssimilation(message);
    }

    if (lowerCase.includes("assimilation")) {
      found = true;
      sendAssimilation(message);
    }
  },
};
