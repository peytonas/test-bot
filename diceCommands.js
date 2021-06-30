const prefix = process.env.PREFIX;

function diceRoll(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function d20Roll() {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 20);
    message.channel.send("You rolled..." + i);
  }
}

function d12Roll() {
  if (message.author.bot) {
    return;
  } else {
    let i = diceRoll(1, 12);
    message.channel.send("You rolled..." + i);
  }
}

function d10Roll() {}

function d8Roll() {}

function d6Roll() {}

function d4Roll() {}

module.exports = {
  checkCmd: function (message) {
    let command = message.content,
      found = false;

    switch (command) {
      // your first admin command (can be whatever you want)
      case prefix + "d20":
        // set found equal to true so your index.js file knows
        //   to not try executing 'other' commands
        found = true;
        // execute function associated with this command
        d20Roll();
        break;

      // your second admin command (similar setup as above)
      case prefix + "d12":
        found = true;
        d12Roll();
        break;

      // ... more admin commands
    }

    // value of 'found' will be returned in index.js
    return found;
  },
};
