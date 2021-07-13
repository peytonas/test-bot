const prefix = process.env.PREFIX;

let grrmGifs = [
  "./Assets/grrm1.gif",
  "./Assets/grrm2.gif",
  "./Assets/grrm3.gif",
  "./Assets/grrmWave.gif",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sendRyuk(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Pics/ryuk.png"] });
  }
}

function sendWheezy(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Pics/wheezy.png"] });
  }
}

function sendPreference(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Pics/prefer_not_to.png"] });
  }
}

function sendGrind(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/grind.gif"] });
  }
}

function sendBurn(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Pics/burn.jpg"] });
  }
}

function sendKinky(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/kink.gif"] });
  }
}

function sendGoodnight(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("Goodnight, sir.");
    message.channel.send({ files: ["./Assets/KO.gif"] });
  }
}

function sendGrrm(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = getRandomInt(grrmGifs.length);
    message.channel.send({ files: [grrmGifs[i]] });
  }
}

function sendJt(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/jt.gif"] });
  }
}

function sendFlipflop(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/flipflop.gif"] });
  }
}

function sendRt(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/DKRT.gif"] });
  }
}

function sendWhat(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/NANI.gif"] });
  }
}

function sendIrony(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/ironic.gif"] });
  }
}

function sendAngry(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("(╯°□°)╯︵ ┻━┻");
  }
}

function sendTooCool(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Pics/coolCat.jpg"] });
  }
}

function sendPork(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/porkmaster.gif"] });
  }
}

function sendSmarf(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/smarf.gif"] });
  }
}

function sendJammin(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/jammin.gif"] });
  }
}

function sendSummer(message) {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send({ files: ["./Assets/summer.gif"] });
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;
    if (lowerCase.includes(prefix + "ryuk")) {
      found = true;
      sendRyuk(message);
    }

    if (lowerCase.includes(prefix + "grind")) {
      found = true;
      sendGrind(message);
    }

    if (lowerCase.includes(prefix + "burn")) {
      found = true;
      sendBurn(message);
    }

    if (lowerCase.includes(prefix + "kinky")) {
      found = true;
      sendKinky(message);
    }

    if (lowerCase.includes(prefix + "goodnight")) {
      found = true;
      sendGoodnight(message);
    }

    if (lowerCase.includes(prefix + "grrm")) {
      found = true;
      sendGrrm(message);
    }

    if (lowerCase.includes(prefix + "jt")) {
      found = true;
      sendJt(message);
    }

    if (lowerCase.includes(prefix + "flipflop")) {
      found = true;
      sendFlipflop(message);
    }

    if (lowerCase.includes(prefix + "rt")) {
      found = true;
      sendRt(message);
    }

    if (lowerCase.includes(prefix + "toocool")) {
      found = true;
      sendTooCool(message);
    }

    if (lowerCase.includes(prefix + "pork")) {
      found = true;
      sendPork(message);
    }

    if (lowerCase.includes(prefix + "smarf")) {
      found = true;
      sendSmarf(message);
    }

    if (lowerCase.includes(prefix + "jammin")) {
      found = true;
      sendJammin(message);
    }

    if (lowerCase.includes(prefix + "what")) {
      found = true;
      sendWhat(message);
    }

    if (lowerCase.includes(prefix + "nani")) {
      found = true;
      sendWhat(message);
    }

    if (lowerCase.includes(prefix + "ironic")) {
      found = true;
      sendIrony(message);
    }

    if (lowerCase.includes(prefix + "angry")) {
      found = true;
      sendAngry(message);
    }

    if (lowerCase.includes(prefix + "mad")) {
      found = true;
      sendAngry(message);
    }

    if (lowerCase.includes("triggered")) {
      found = true;
      sendAngry(message);
    }

    if (lowerCase.includes(prefix + "blog")) {
      found = true;
      sendWheezy(message);
    }

    if (lowerCase.includes(prefix + "no")) {
      found = true;
      sendPreference(message);
    }

    if (lowerCase.includes(prefix + "summer")) {
      found = true;
      sendSummer(message);
    }
  },
};
