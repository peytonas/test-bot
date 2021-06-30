const prefix = process.env.PREFIX;

function diceRoll(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function d20Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 20);
    message.channel.send("You rolled..." + i);
  }
}

function d12Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 12);
    message.channel.send("You rolled..." + i);
  }
}

function d10Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 10);
    message.channel.send("You rolled..." + i);
  }
}

function d8Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 8);
    message.channel.send("You rolled..." + i);
  }
}

function d6Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 6);
    message.channel.send("You rolled..." + i);
  }
}

function d4Roll(message) {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 4);
    message.channel.send("You rolled..." + i);
  }
}

module.exports = {
  checkCmd: function (message) {
    let command = message.content,
      found = false;

    switch (command) {
      case prefix + "d20":
        // set found equal to true so your index.js file knows
        //   to not try executing 'other' commands
        found = true;
        d20Roll(message);
        break;

      case prefix + "d12":
        found = true;
        d12Roll();
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
