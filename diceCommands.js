const prefix = process.env.PREFIX;

let natCritResponses = [
  "Fudgesicle, yes! That's a 20!",
  "Uh-oh, looks like someone just entered the *CRIT*-aceous period...You rolled a 20!",
  "Hey, I just met you, and this is crazy, but here's your number (20), so CRIT-i-call me maybe?",
];
let critFailResponses = [
  "So you're actually just really bad at this, I guess? That was a 1, in case you weren't sure by my disappointed demeanor.",
  "Don't feel too bad, at least your mom would still be proud of that 1. That is,if you weren't too ashamed of her knowing you're still playing DnD as a full grown man.",
  "You had 19 chances to land on something better than a 1 and failed. Are we campaigning your sex life?",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function diceRoll(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function playerRoll(message) {
  let player = "";
  if (message.author == 692445692144123924) {
    player = "David";
  }
  if (message.author == 271520490248601612) {
    player = "Tom";
  }
  if (message.author == 692173149659332641) {
    player = "Brody";
  }
  if (message.author == 500457284573593601) {
    player = "Peyton";
  }
  return player;
}

function d20Roll(message) {
  player = playerRoll(message);
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 20);
    i == 20
      ? message.channel.send(player + ": " + natCritResponses[getRandomInt(3)])
      : i == 1
      ? message.channel.send(player + ": " + critFailResponses[getRandomInt(3)])
      : message.channel.send(player + ", you rolled..." + i);
  }
}

function d12Roll(message) {
  player = playerRoll(message);

  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 12);
    message.channel.send(player + ", you rolled..." + i);
  }
}

function d10Roll(message) {
  player = playerRoll(message);

  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 10);
    message.channel.send(player + ", you rolled..." + i);
  }
}

function d8Roll(message) {
  player = playerRoll(message);

  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 8);
    message.channel.send(player + ", you rolled..." + i);
  }
}

function d6Roll(message) {
  player = playerRoll(message);

  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 6);
    message.channel.send(player + ", you rolled..." + i);
  }
}

function d4Roll(message) {
  player = playerRoll(message);

  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 4);
    message.channel.send(player + ", you rolled..." + i);
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    switch (lowerCase) {
      case prefix + "d20":
        found = true;
        d20Roll(message);
        break;

      case prefix + "d12":
        found = true;
        d12Roll(message);
        break;

      case prefix + "d10":
        found = true;
        d10Roll(message);
        break;

      case prefix + "d8":
        found = true;
        d8Roll(message);
        break;

      case prefix + "d6":
        found = true;
        d6Roll(message);
        break;

      case prefix + "d4":
        found = true;
        d4Roll(message);
        break;
    }
    return found;
  },
};
