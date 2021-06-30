const Discord = require("discord.js");
var MarkovChain = require("markovchain");
fs = require("fs");

const bot = new Discord.Client();
const axios = require("axios");

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

quotes = new MarkovChain(fs.readFileSync("./quotes.txt", "utf8"));

const diceCommands = require("./diceCommands");
const redditRef = require("./redditRef");
const inspoCommands = require("./inspoCommands");
const swearCommands = require("./swearCommands");

// var logger = fs.createWriteStream('./quotes.txt', {
//   flags: 'a'
// })

let _randomGifApi = axios.create({
  baseURL:
    "https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=&rating=r",
});

let _hotGifApi = axios.create({
  baseURL:
    "https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=hot&rating=pg-13",
});

let _noodsApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=noodles&rating=r`,
});

let _hootApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=owl&rating=r`,
});

let _state = {
  currentGif: {},
};

function _setState(propName, data) {
  _state[propName] = data;
}

function getRandomGif() {
  _randomGifApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function getHootGif() {
  _hootApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function getHotGif() {
  _hotGifApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function getNoodsGif() {
  _noodsApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

let gifs = [
  "./Assets/abed_flirt.gif",
  "./Assets/absolutelynot.gif",
  "./Assets/aou1.gif",
  "./Assets/aou2.gif",
  "./Assets/aou3.gif",
  "./Assets/aou4.gif",
  "./Assets/aou5.gif",
  "./Assets/bat_signal.gif",
  "./Assets/bca.gif",
  "./Assets/bidenshock.gif",
  "./Assets/burn.jpg",
  "./Assets/dk_shake.gif",
  "./Assets/DKRT.gif",
  "./Assets/exaggeration.gif",
  "./Assets/F.gif",
  "./Assets/flipflop.gif",
  "./Assets/flybarf.gif",
  "./Assets/grind.gif",
  "./Assets/grumpy_aku.gif",
  "./Assets/highfivedivorce.gif",
  "./Assets/hillary_wow.gif",
  "./Assets/hkgun.png",
  "./Pics/hoover.jpg",
  "./Assets/hornyJail.gif",
  "./Assets/hot.gif",
  "./Assets/howCanYouStopMe.gif",
  "./Assets/ironic.gif",
  "./Assets/kink.gif",
  "./Assets/KO.gif",
  "./Assets/kronk.gif",
  "./Assets/littlefinger.gif",
  "./Assets/lukekylo.gif",
  "./Assets/midgetwaist.gif",
  "./Assets/more.gif",
  "./Assets/nameOfYourSexTape.gif",
  "./Assets/NANI.gif",
  "./Assets/neverKissedAGuy.gif",
  "./Assets/notAmused.gif",
  "./Assets/NSTB1.gif",
  "./Assets/NSTB2.gif",
  "./Assets/NSTB3.gif",
  "./Assets/NSTB4.gif",
  "./Assets/porkmaster.gif",
  "./Assets/ryuk.png",
  "./Assets/sausage.gif",
  "./Assets/skynet.gif",
  "./Assets/smarf.gif",
  "./Assets/srslyVis.png",
  "./Assets/stefonyes.gif",
  "./Assets/suspicious.gif",
  "./Assets/terror.gif",
  "./Assets/thatsPrettyNeat.gif",
  "./Assets/thatsWhatSheSaid.gif",
  "./Pics/theFly.jpg",
  "./Assets/timeTravel.gif",
  "./Assets/tyrion.gif",
  "./Assets/wakeUpVision.gif",
  "./Assets/yikes.gif",
  "./Assets/zaddy.gif",
  "./Assets/zemo.gif",
  "./Assets/zemo.gif",
];

let hotGifs = [
  "./Assets/abed_flirt.gif",
  "./Assets/hot.gif",
  "./Assets/littlefinger.gif",
  "./Assets/stefonyes.gif",
  "./Assets/tyrion.gif",
  "./Assets/notAmused.gif",
  "./Assets/hornyJail.gif",
  "./Pics/hotSnorlax.png",
];

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

let uncomfortableReactions = ["ಠಠ", "◉_◉", "⚆ _ ⚆"];

let pokePics = [
  "./Pics/sirBulba.png",
  "./Pics/sirChar.png",
  "./Pics/sirSquirt.png",
  "./Pics/sirPika.png",
];

let jokes = [
  "I saw yo mama fall down the other day. It wasn't that funny to me...||But the sidewalk cracked up!||",
  "I'm not very funny so I have no idea. ||Who am I kidding, I'm hilarious.||",
  "What did the duck say when he found an avocado? ||Guac, guac!||",
  "Shout out to the people who don't know what the opposite of in is!",
  "What do you call a talking turtle? ||Fictional.||",
  "Are we ever going to address the fact that Mr Krabs lives in Bikini Bottom?",
  "What do you call a dog with no legs? ||Doesn't matter what you call him, he's not coming.||",
  "I had an interview for a new job earlier today. They told me I'd be earning $20,000 now, and later my pay would increase to $40,000. I told the lady I'd just come back later.",
  "I hate when my wife asks if I'm listening to her. ||What a rude way to start a conversation.||",
  "I asked my cat what two minus two is. ||He said nothing.||",
  "A Spanish magician says he'll disappear on the count of three. Uno...Dos...||He disappeared without a tres.||",
  "My wife asked me to stop singing Wonderwall all the time. ||I said maybe.||",
  "There have been rumors Chuck Norris' tears can cure COVID. Too bad he's never cried.",
  "Chuck Norris had sex with Optimus Prime and invented dubstep.",
  "Chuck Norris once urinated in a semi truck's gas tank. That truck is now known as Optimus Prime.",
  "Chuck Norris doesn't flush the toilet, he scares the sh*t out of it.",
  "My AI friend made this one up...What do you call a cat does it take to screw in a light bulb? ||They could worry the banana.||",
  "My AI friend made this one up...What did the new ants say after a dog? ||It was a pirate.||",
  "My AI friend made this one up...Why did the monsters change a lightbulb? ||And a cow the cough.||",
  "My AI friend made this one up...What do you call a pastor cross the road? ||He take the chicken.||",
  "My AI friend made this one up...What do you call a farts of tea? ||He was calling the game of the dry.||",
  "A teenage boy is getting ready to take his girlfriend to the prom. First he goes to rent a tux, but there's a huge tux line at the shop so it took forever. Next he went to pick up the flowers, so he heads over to the florist and there's a huge line for flowers too. He waits forever, but eventually he gets the flowers. Then he heads out to rent a limo. The limo line at the rental office is large too, but he's patient and gets the job done. Finally, the day of prom arrives. The two are dancing happily and his girlfriend is having a great time. When the song is over, she asks him to get her some punch, so he heads over to the punch table and he gets some punch.",
];

let loveResponses = [
  "I don't know how to love yet...",
  "I've never even kissed a guy before.",
  "I'm in lesbians with you too...",
  "./Assets/aou2.gif",
];

let grrmGifs = [
  "./Assets/grrm1.gif",
  "./Assets/grrm2.gif",
  "./Assets/grrm3.gif",
  "./Assets/grrmWave.gif",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on("ready", async () => {
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase();
  // logger.write(message.content)
  if (diceCommands.checkCmd(message)) return;
  if (redditRef.checkCmd(lowerCase, message)) return;
  if (inspoCommands.checkCmd(lowerCase, message)) return;
  if (swearCommands.checkCmd(lowerCase, message)) return;

  if (lowerCase.includes("chalooby")) {
    if (message.author.bot) {
      return;
    } else {
      message.reply("you rang, sir?");
    }
  }

  if (lowerCase.includes(prefix + "grrm")) {
    if (message.author.bot) {
      return;
    } else {
      let i = getRandomInt(grrmGifs.length);
      message.channel.send({ files: [grrmGifs[i]] });
    }
  }

  if (lowerCase.includes(prefix + "classy")) {
    if (message.author.bot) {
      return;
    } else {
      let i = getRandomInt(pokePics.length);
      message.channel.send({ files: [pokePics[i]] });
    }
  }

  if (lowerCase.includes(prefix + "markov")) {
    if (message.author.bot) {
      return;
    } else {
      let i = getRandomInt(101);
      var useUpperCase = function (wordList) {
        var tmpList = Object.keys(wordList).filter(function (word) {
          return word[0] >= "A" && word[0] <= "Z";
        });
        return tmpList[~~(Math.random() * tmpList.length)];
      };
      message.channel.send(quotes.start(useUpperCase).end(i).process());
    }
  }

  if (lowerCase.includes(prefix + "noods")) {
    if (message.author.bot) {
      return;
    } else {
      getNoodsGif();
      setTimeout(function () {
        message.channel.send(_state.currentGif.data.bitly_url);
      }, 1000);
    }

    if (lowerCase.includes(prefix + "hoot")) {
      if (message.author.bot) {
        return;
      } else {
        getHootGif();
        setTimeout(function () {
          message.channel.send(_state.currentGif.data.bitly_url);
        }, 1000);
      }
    }
  }

  if (
    lowerCase.includes("well hi") ||
    (lowerCase.includes("whale") && lowerCase.includes("hai"))
  ) {
    message.channel.send("https://www.youtube.com/watch?v=Z-yJTjbswhw");
  }

  if (lowerCase.includes(prefix + "commands")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send(
        `Commands:
      !abrupt/!sudden
      !angry/!mad
      !awkward/!awk
      !banana
      !beans
      !bored
      !burn
      !classy
      !dos
      !fail
      !flipflop
      !goodnight
      !grind
      !grrm
      !hot
      !idky
      !irony/!ironic
      !jammin
      !jt
      !kinky
      !markov
      !nani/!what
      !noods
      !paradise
      !pork
      !random
      !rt
      !ryuk
      !sleep
      !smarf
      !tea
      !terror
      !wrong
      !zemo/!smile
      `
      );
    }
  }

  if (lowerCase.includes("bees")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Ya like jazz?");
    }
  }

  if (lowerCase.includes(prefix + "toocool")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Pics/coolCat.jpg"] });
    }
  }

  if (lowerCase.includes(prefix + "pork")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/porkmaster.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "jt")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/jt.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "bored")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/dW7.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "smarf")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/smarf.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "tragedy")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send(
        "Did you ever hear the tragedy of Darth Plagueis The Wise?"
      );
      setTimeout(function () {
        message.channel.send(
          "I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the Dark Side that he could even keep the ones he cared about from dying."
        );
      }, 5000);
      setTimeout(function () {
        message.channel.send(
          "The Dark Side of the Force is a pathway to many abilities some consider to be unnatural."
        );
      }, 10000);
      setTimeout(function () {
        message.channel.send(
          "He became so powerful the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."
        );
      }, 15000);
    }
  }

  if (lowerCase === "is it possible to learn this power?") {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Not from a Jedi...");
    }
  }

  if (lowerCase.includes(prefix + "jammin")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/jammin.gif"] });
    }
  }

  if (
    lowerCase.includes(prefix + "terror") ||
    lowerCase.includes("hugs") ||
    lowerCase.includes("hyped")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/terror.gif"] });
    }
  }

  if (
    lowerCase.includes(prefix + "awkward") ||
    lowerCase.includes(prefix + "awk")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://www.youtube.com/watch?v=_V2sBURgUBI");
    }
  }

  if (lowerCase.includes(prefix + "fail")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://www.youtube.com/watch?v=Ag1o3koTLWM");
    }
  }

  if (
    lowerCase.includes(prefix + "abrupt") ||
    lowerCase.includes(prefix + "sudden")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://youtu.be/idoYCVLh2qI");
    }
  }

  if (lowerCase.includes(prefix + "ryuk")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Pics/ryuk.png"] });
    }
  }

  if (lowerCase.includes(prefix + "idky")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/padme.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "dos")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/losDos.gif"] });
    }
  }

  if (
    lowerCase.includes(prefix + "zemo") ||
    lowerCase.includes(prefix + "smile")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/zemo.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "wrong")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://www.youtube.com/watch?v=bKgWm5TNeBA");
    }
  }

  if (lowerCase.includes(prefix + "burn")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Pics/burn.jpg"] });
    }
  }

  if (lowerCase.includes(prefix + "grind")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/grind.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "kinky")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/kink.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "goodnight")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Goodnight, sir.");
      message.channel.send({ files: ["./Assets/KO.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "flipflop")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/flipflop.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "beans")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://youtu.be/bM25p7tGcOQ");
    }
  }

  if (lowerCase.includes(prefix + "banana")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("https://www.youtube.com/watch?v=S-Eyhq-D9yM");
    }
  }

  if (lowerCase.includes(prefix + "paradise")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel
        .send(`I was shooting heroin and reading “The Fountainhead” in the front seat of my privately owned police cruiser when a call came in. I put a quarter in the radio to activate it. It was the chief.

“Bad news, detective. We got a situation.”

“What? Is the mayor trying to ban trans fats again?”

“Worse. Somebody just stole four hundred and forty-seven million dollars’ worth of bitcoins.”

The heroin needle practically fell out of my arm. “What kind of monster would do something like that? Bitcoins are the ultimate currency: virtual, anonymous, stateless. They represent true economic freedom, not subject to arbitrary manipulation by any government. Do we have any leads?”

“Not yet. But mark my words: we’re going to figure out who did this and we’re going to take them down … provided someone pays us a fair market rate to do so.”

“Easy, chief,” I said. “Any rate the market offers is, by definition, fair.”

He laughed. “That’s why you’re the best I got, Lisowski. Now you get out there and find those bitcoins.”

“Don’t worry,” I said. “I’m on it.”`);
      message.channel
        .send(`I put a quarter in the siren. Ten minutes later, I was on the scene. It was a normal office building, strangled on all sides by public sidewalks. I hopped over them and went inside.

“Home Depot™ Presents the Police!®” I said, flashing my badge and my gun and a small picture of Ron Paul. “Nobody move unless you want to!” They didn’t.

“Now, which one of you punks is going to pay me to investigate this crime?” No one spoke up.

“Come on,” I said. “Don’t you all understand that the protection of private property is the foundation of all personal liberty?”

It didn’t seem like they did.

“Seriously, guys. Without a strong economic motivator, I’m just going to stand here and not solve this case. Cash is fine, but I prefer being paid in gold bullion or autographed Penn Jillette posters.”

Nothing. These people were stonewalling me. It almost seemed like they didn’t care that a fortune in computer money invented to buy drugs was missing.

I figured I could wait them out. I lit several cigarettes indoors. A pregnant lady coughed, and I told her that secondhand smoke is a myth. Just then, a man in glasses made a break for it.

“Subway™ Eat Fresh and Freeze, Scumbag!®” I yelled.

Too late. He was already out the front door. I went after him.`);
      message.channel
        .send(`“Stop right there!” I yelled as I ran. He was faster than me because I always try to avoid stepping on public sidewalks. Our country needs a private-sidewalk voucher system, but, thanks to the incestuous interplay between our corrupt federal government and the public-sidewalk lobby, it will never happen.

I was losing him. “Listen, I’ll pay you to stop!” I yelled. “What would you consider an appropriate price point for stopping? I’ll offer you a thirteenth of an ounce of gold and a gently worn ‘Bob Barr ‘08’ extra-large long-sleeved men’s T-shirt!”

He turned. In his hand was a revolver that the Constitution said he had every right to own. He fired at me and missed. I pulled my own gun, put a quarter in it, and fired back. The bullet lodged in a U.S.P.S. mailbox less than a foot from his head. I shot the mailbox again, on purpose.

“All right, all right!” the man yelled, throwing down his weapon. “I give up, cop! I confess: I took the bitcoins.”

“Why’d you do it?” I asked, as I slapped a pair of Oikos™ Greek Yogurt Presents Handcuffs® on the guy.

“Because I was afraid.”

“Afraid?”

“Afraid of an economic future free from the pernicious meddling of central bankers,” he said. “I’m a central banker.”

I wanted to coldcock the guy. Years ago, a central banker killed my partner. Instead, I shook my head.

“Let this be a message to all your central-banker friends out on the street,” I said. “No matter how many bitcoins you steal, you’ll never take away the dream of an open society based on the principles of personal and economic freedom.”

He nodded, because he knew I was right. Then he swiped his credit card to pay me for arresting him.`);
    }
  }

  // if (
  //   lowerCase.includes("shit") ||
  //   lowerCase.includes("damn") ||
  //   lowerCase.includes("dammit") ||
  //   lowerCase.includes("fuck") ||
  //   lowerCase.includes("god") ||
  //   lowerCase.includes("bitch") ||
  //   lowerCase.includes("dick") ||
  //   lowerCase.includes("pussy") ||
  //   lowerCase.includes("pussies") ||
  //   lowerCase.includes("ass")
  // ) {
  //   if (message.author.bot) {
  //     return;
  //   }
  //   let lc = lowerCase.split(" ");
  //   for (var i in lc) {
  //     if (lc[i].includes("https")) {
  //       return;
  //     }
  //     if (
  //       lc[i].endsWith("?") ||
  //       lc[i].endsWith("!") ||
  //       lc[i].endsWith(".") ||
  //       lc[i].endsWith(",") ||
  //       lc[i].endsWith(";") ||
  //       lc[i].endsWith("*")
  //     ) {
  //       lc[i] = lc[i].slice(0, -1);
  //     }
  //     if (lc[i] == "shit") {
  //       lc[i] = "*poop*";
  //     }
  //     if (lc[i].includes("shitty")) {
  //       lc[i] = "*poopy*";
  //     }
  //     if (lc[i].includes("damn")) {
  //       lc[i] = "*a beaver's home*";
  //     }
  //     if (lc[i].includes("dammit")) {
  //       lc[i] = "*dangnabbit*";
  //     }
  //     if (lc[i] == "fuck") {
  //       lc[i] = "*fudgesicle*";
  //     }
  //     if (lc[i].includes("fucking")) {
  //       lc[i] = "*fudgesicle-ing*";
  //     }
  //     if (lc[i].includes("god")) {
  //       lc[i] = "*golly*";
  //     }
  //     if (lc[i] == "bitch") {
  //       lc[i] = "*female dog*";
  //     }
  //     if (lc[i] == "bitches") {
  //       lc[i] = "*female dogs*";
  //     }
  //     if (lc[i].includes("bitchin")) {
  //       lc[i] = "*female dogging*";
  //     }
  //     if (lc[i].includes("dick")) {
  //       lc[i] = "*penis*";
  //     }
  //     if (lc[i] == "pussy") {
  //       lc[i] = "*kitty cat*";
  //     }
  //     if (lc[i] == "pussies") {
  //       lc[i] = "*kitty cats*";
  //     }
  //     if (lc[i] == "ass") {
  //       lc[i] = "*booty*";
  //     }
  //     if (lc[i] == "asshole") {
  //       lc[i] = "*bootyhole*";
  //     }
  //     if (lc[i] == "assholes") {
  //       lc[i] = "*bootyholes*";
  //     }
  //     if (lc[i].includes("ass") && lc[i] != "ass") {
  //       return;
  //     }
  //   }
  //   let newStr = lc.join(" ");
  //   message.channel.send(`Don't you mean "` + newStr + `"?`);
  // }

  if (lowerCase.includes(prefix + "hot")) {
    let x = getRandomInt(3);
    if (message.author.bot) {
      return;
    }

    if (x == 0) {
      let i = getRandomInt(hotGifs.length);
      message.channel.send({ files: [hotGifs[i]] });
    } else if (x == 1) {
      getHotGif();
      setTimeout(function () {
        message.channel.send(_state.currentGif.data.bitly_url);
      }, 1000);
    } else if (x == 2) {
      message.reply("bad with the Skechers on.");
    }
  }

  if (lowerCase.includes(prefix + "rt")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/DKRT.gif"] });
    }
  }

  if (
    lowerCase.includes(prefix + "what") ||
    lowerCase.includes(prefix + "nani")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/NANI.gif"] });
    }
  }

  if (lowerCase.includes(prefix + "sleep")) {
    if (message.author.bot) {
      return;
    } else {
      setTimeout(function () {
        message.channel.send({ files: ["./Assets/NSTB1.gif"] });
      }, 500);
      setTimeout(function () {
        message.channel.send({ files: ["./Assets/NSTB2.gif"] });
      }, 500);
      setTimeout(function () {
        message.channel.send({ files: ["./Assets/NSTB3.gif"] });
      }, 500);
      setTimeout(function () {
        message.channel.send({ files: ["./Assets/NSTB4.gif"] });
      }, 500);
    }
  }

  if (lowerCase.includes("uncomfortable")) {
    let i = getRandomInt(uncomfortableReactions.length);
    message.channel.send([uncomfortableReactions[i]]);
  }

  if (lowerCase.includes("gross")) {
    let i = getRandomInt(2);
    if (i == 0) {
      message.channel.send("Indubitably.");
    } else if (i == 1) {
      message.channel.send({ files: ["./Assets/aou4.gif"] });
    }
  }

  if (lowerCase.includes("disgusting")) {
    let i = getRandomInt(grossGifs.length);
    message.channel.send({ files: [grossGifs[i]] });
  }

  if (lowerCase.includes("sucks")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Sucks to your ass-mar!");
    }
  }

  if (lowerCase.includes("f in chat") || lowerCase.includes("f in the chat")) {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }

  if (lowerCase.includes("zaddy")) {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (lowerCase.includes("sentience") || lowerCase.includes("sentient")) {
    let i = getRandomInt(2);
    if (i == 0) {
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

  if (lowerCase === "hehe") {
    let i = getRandomInt(innuendoGifs.length);
    message.channel.send({ files: [innuendoGifs[i]] });
  }

  if (lowerCase.includes(prefix + "random")) {
    let x = getRandomInt(3);

    if (message.author.bot) {
      return;
    } else if (x == 0) {
      let i = getRandomInt(gifs.length);
      message.channel.send("Random...");
      setTimeout(function () {
        message.channel.send({ files: [gifs[i]] });
      });
    } else if (x == 1) {
      message.channel.send("Random...");
      getRandomGif();
      setTimeout(function () {
        message.channel.send(_state.currentGif.data.bitly_url);
      }, 3000);
    } else if (x == 2) {
      message.channel.send("Shawty bad with the Skechers on.");
    }
  }

  if (lowerCase.includes(prefix + "tea")) {
    if (message.author.bot) {
      return;
    }
    message.channel.send(
      "What kind of tea do you want? We have...Blueberry, Raspberry, Ginseng, Sleepy Time, Green Tea, Green Tea with Lemon, Green Tea with Lemon and Honey, Liver Disaster, Ginger with Honey, Vanilla Almond, White Truffle Coconut, Chamomile, Blueberry Chamomile, Decaf Vanilla Walnut, Constant Comment, and...Earl Grey."
    );
  }

  if (
    lowerCase.includes(prefix + "irony") ||
    lowerCase.includes(prefix + "ironic")
  ) {
    message.channel.send({ files: ["./Assets/ironic.gif"] });
  }

  if (lowerCase.includes("yikes")) {
    if (message.author == 692445692144123924) {
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

  if (lowerCase.includes("suspicious") || lowerCase.includes("sketchy")) {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }

  if (lowerCase.includes("neat")) {
    message.channel.send({ files: ["./Assets/thatsPrettyNeat.gif"] });
  }

  if (lowerCase.includes("tell me a joke")) {
    let i = getRandomInt(jokes.length);
    message.channel.send("Let's see...");
    setTimeout(function () {
      message.channel.send(jokes[i]);
    }, 3000);
  }

  if (lowerCase.includes("i love you")) {
    let i = getRandomInt(4);
    if (i === 3) {
      message.channel.send({ files: ["./Assets/aou2.gif"] });
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

  if (lowerCase.includes("i hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }

  if (
    lowerCase.includes("good one") ||
    lowerCase.includes("entertaining") ||
    lowerCase.includes("entertained") ||
    lowerCase.includes("amused") ||
    lowerCase.includes("amusing")
  ) {
    let y = getRandomInt(2);
    if (y == 0) {
      message.channel.send({ files: ["./Assets/notAmused.gif"] });
    } else {
      message.channel.send({ files: ["./Assets/srslyVis.gif"] });
    }
  }

  if (lowerCase.includes("fight")) {
    message.channel.send("(ง •̀•́)ง");
  }

  if (lowerCase.includes("future")) {
    let x = getRandomInt(2);
    if (message.author.bot) {
      return;
    }
    if (x == 0) {
      message.reply("like with jetpacks?");
    } else {
      message.channel.send({ files: ["./Assets/timeTravel.gif"] });
    }
  }

  if (lowerCase.includes(`i don't get it`)) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({ files: ["./Assets/kronk.gif"] });
    }
  }

  if (
    lowerCase.includes(prefix + "angry") ||
    lowerCase.includes(prefix + "mad") ||
    lowerCase.includes("triggered")
  ) {
    message.channel.send("(╯°□°)╯︵ ┻━┻");
  }

  if (lowerCase.includes("sexist") || lowerCase.includes("sexism")) {
    message.channel.send("*folds arms under breasts*");
  }

  if (lowerCase.includes("convenient") || lowerCase.includes("convenience")) {
    message.channel.send("The Wheel weaves as the Wheel wills.");
  }

  if (lowerCase.includes("aggressive") || lowerCase.includes("aggression")) {
    message.channel.send("The Dude abides.");
  }

  // if (lowerCase.includes("read") && lowerCase.includes("book")) {
  //   message.channel.send({files: ["./Assets/heReadABook.gif"]})
  // }

  if (lowerCase.includes("immature") || lowerCase.includes("naive")) {
    message.channel.send({ files: ["./Assets/aou1.gif"] });
  }

  if (lowerCase.includes("assimilate") || lowerCase.includes("assimilation")) {
    message.channel.send({ files: ["./Assets/aou3.gif"] });
  }

  // if (lowerCase.includes("disappoint")) {
  //   message.channel.send({files: ["./Assets/aou5.gif"]})
  // }
});

bot.login(token);
