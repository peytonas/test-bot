const prefix = process.env.PREFIX;

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
      ? message.channel.send(
          player + ", you rolled..." + 20 + "! **NATURAL CRIT**"
        )
      : i == 1
      ? message.channel.send(player + "...That's a " + 1 + "...*crit fail*...")
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

function dXRoll(lowerCase, message) {
  player = playerRoll(message);
  numArr = [];
  let i;

  if (message.author.bot) {
    return;
  } else {
    let lc = lowerCase.split("");
    for (x = 2; x < lc.length; x++) {
      numArr.push(lc[i]);
    }
    console.log(numArr);
    console.log(lc);
    arrString = numArr.toString();
    stringToNum = parseInt(arrString);
    console.log(arrString);
    console.log(stringToNum);

    i = diceRoll(1, stringToNum);
    message.channel.send(player + ", you rolled..." + i);
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    switch (lowerCase) {
      case prefix + "d20":
        // set found equal to true so your index.js file knows
        //   to not try executing 'other' commands
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

      case prefix + "d" + Number:
        found = true;
        dXRoll(message);
        break;
    }
    return found;
  },
};
