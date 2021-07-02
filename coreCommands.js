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

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;
    console.log(lowerCase);
    switch (lowerCase) {
      case lowerCase.includes(prefix + "ryuk"):
        found = true;
        sendRyuk(message);
        break;

      case lowerCase.includes(prefix + "burn"):
        found = true;
        sendBurn(message);
        break;

      case lowerCase.includes(prefix + "kinky"):
        found = true;
        sendKinky(message);
        break;

      case lowerCase.includes(prefix + "goodnight"):
        found = true;
        sendGoodnight(message);
        break;

      case lowerCase.includes(prefix + "grrm"):
        found = true;
        sendGrrm(message);
        break;

      case lowerCase.includes(prefix + "jt"):
        found = true;
        sendJt(message);
        break;

      case lowerCase.includes(prefix + "flipflop"):
        found = true;
        sendFlipflop(message);
        break;

      case lowerCase.includes(prefix + "rt"):
        found = true;
        sendRt(message);
        break;

      case lowerCase.includes(prefix + "toocool"):
        found = true;
        sendTooCool(message);
        break;

      case lowerCase.includes(prefix + "pork"):
        found = true;
        sendPork(message);
        break;

      case lowerCase.includes(prefix + "smarf"):
        found = true;
        sendSmarf(message);
        break;

      case lowerCase.includes(prefix + "jammin"):
        found = true;
        sendJammin(message);
        break;

      case lowerCase.includes(prefix + "what"):
        found = true;
        sendWhat(message);
        break;

      case lowerCase.includes(prefix + "nani"):
        found = true;
        sendWhat(message);
        break;

      case lowerCase.includes(prefix + "irony"):
        found = true;
        sendIrony(message);
        break;

      case lowerCase.includes(prefix + "ironic"):
        found = true;
        sendIrony(message);
        break;

      case lowerCase.includes(prefix + "angry"):
        found = true;
        sendAngry(message);
        break;

      case lowerCase.includes(prefix + "mad"):
        found = true;
        sendAngry(message);
        break;

      case lowerCase.includes("triggered"):
        found = true;
        sendAngry(message);
        break;
    }
    return found;
  },
};
