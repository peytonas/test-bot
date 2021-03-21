const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require("request");
const axios = require('axios');

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

// let key = ""
// let baseURL = "https://api.giphy.com/v1/gifs/"
// let tag = `random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=${key}&rating=r`;
// let sample = baseURL + tag

let _randomGifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=&rating=r"
})

let _hotGifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=hot&rating=pg-13"
})

let _plotTwistApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=plot twist&rating=r`
})

let _noodsApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=noodles&rating=r`
})


let _state = {
  currentGif: {}
}

function _setState(propName, data) {
  _state[propName] = data
}

function getRandomGif() {
    _randomGifApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}

// function getTestGif() {
//     _testGifApi.get()
//       .then(res => {
//         let giphy = res.data
//         _setState("currentGif", giphy)
//       })
//       .catch(err => console.error(err))
// }

function getPlotTwistGif() {
    _plotTwistApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}

function getHotGif() {
    _hotGifApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}
  
function getNoodsGif() {
    _noodsApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
  }


let gifs = [
  "./Assets/bca.gif",
  "./Assets/abed_flirt.gif",
  "./Assets/absolutelynot.gif",
  "./Assets/baggle.gif",
  "./Assets/bat_signal.gif",
  "./Assets/exaggeration.gif",
  "./Assets/F.gif",
  "./Assets/f3d.gif",
  "./Assets/hoover.jpg",
  "./Assets/hot.gif",
  "./Assets/thatsWhatSheSaid.gif",
  "./Assets/theFly.jpg",
  "./Assets/yasQueen.gif",
  "./Assets/zaddy.gif",
  "./Assets/bears.gif",
  "./Assets/more.gif",
  "./Assets/tyrion.gif",
  "./Assets/sausage.gif",
  "./Assets/sadporg.gif",
  "./Assets/nk_smile.gif",
  "./Assets/nk_arya_high5.gif",
  "./Assets/lukemilk.gif",
  "./Assets/lukekylo.gif",
  "./Assets/littlefinger.gif",
  "./Assets/flybarf.gif",
  "./Assets/highfivedivorce.gif",
  "./Assets/lesmisstefon.gif",
  "./Assets/midgetwaist.gif",
  "./Assets/stefonyes.gif",
  "./Assets/humanway.gif",
  "./Assets/bidenshock.gif",
  "./Assets/hillary_wow.gif",
  "./Assets/hype.gif",
  "./Assets/ironic.gif",
  "./Assets/skynet.gif",
  "./Assets/strange.gif",
  "./Assets/starlord.gif",
  "./Assets/grumpy_aku.gif",
  "./Assets/lonely_jack.gif",
  "./Assets/suspicious.gif",
  "./Assets/dk_shake.gif",
  "./Assets/notAmused.gif",
  "./Assets/thatsPrettyNeat.gif",
  "./Assets/neverKissedAGuy.gif",
  "./Assets/howCanYouStopMe.gif",
  "./Assets/kronk.gif",
  "./Assets/timeTravel.gif",
  "./Assets/aou1.gif",
  "./Assets/aou2.gif",
  "./Assets/aou3.gif",
  "./Assets/aou4.gif",
  "./Assets/heReadABook.gif",
  "./Assets/wakeUpVision.gif",
  "./Assets/hornyJail.gif",
  "./Assets/kittenMittons.gif"
];

let hotGifs = [
  "./Assets/abed_flirt.gif",
  "./Assets/hot.gif",
  "./Assets/littlefinger.gif",
  "./Assets/stefonyes.gif",
  "./Assets/tyrion.gif",
  "./Assets/notAmused.gif",
  "./Assets/hornyJail.gif",

];

let innuendoGifs = ["./Assets/thatsWhatSheSaid.gif", "./Assets/nameOfYourSexTape.gif"]

let grossGifs = [
  "./Assets/flybarf.gif",
  "./Assets/theFly.jpg",
  "./Assets/lukemilk.gif",
  "./Assets/sausage.gif",
  "./Assets/aou4.gif"
];

let uncomfortableReactions = ["ಠಠ", "◉_◉", "⚆ _ ⚆"]

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
  "A teenage boy is getting ready to take his girlfriend to the prom. First he goes to rent a tux, but there's a huge tux line at the shop so it took forever. Next he went to pick up the flowers, so he heads over to the florist and there's a huge line for flowers too. He waits forever, but eventually he gets the flowers. Then he heads out to rent a limo. The limo line at the rental office is large too, but he's patient and gets the job done. Finally, the day of prom arrives. The two are dancing happily and his girlfriend is having a great time. When the song is over, she asks him to get her some punch, so he heads over to the punch table and he gets some punch."
]

let loveResponses = ["I don't know how to love yet...", "I've never even kissed a guy before.", "I'm in lesbians with you too...", "./Assets/aou2.gif"]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on("ready", async () => {
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase()
  if (lowerCase === '!quote') {
      request('http://inspirobot.me/api?generate=true', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        message.channel.send({
          embed: {
            color: 0xff0000,
            description: "Did you know...🧐",
            image: {
              url: body
            }
          }
        });
      }
    });
  }

  if (
    lowerCase.includes("chalooby")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.reply("you rang, sir?");
    }
  }

  // if (
  //   lowerCase.includes(prefix + "test")
  // ) {
  //   key = "sexy"
  //   console.log("Key:", key);
  //   console.log("Sample:", sample);
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     getTestGif()
  //     setTimeout(function () {
  //     message.channel.send(_state.currentGif.data.bitly_url)
  //     }, 1000);
  //   }
  // }

  if (lowerCase.includes(prefix + "noods")) {
    if (message.author.bot) {
      return;
    } else {
      getNoodsGif()
      setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url)
      }, 1000);
  }
  }

  if (lowerCase.includes("bee")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Ya like jazz?")
    }
  }

  if (lowerCase === prefix + "hot")
  {
    let x = getRandomInt(3)

    if (message.author.bot) {
      return;
    } else if (x == 0) {
      let i = getRandomInt(hotGifs.length);
      message.channel.send({ files: [hotGifs[i]] });
    } else if (x == 1) {
      getHotGif()
      setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url)
      }, 1000);
    } else if (x == 2) {
      message.reply("bad with the Skechers on.")
    }
  }

  if (lowerCase.includes(prefix + "rt")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({files: ["./Assets/DKRT.gif"]})
  }
  }

  if (lowerCase.includes(prefix + "what") || lowerCase.includes(prefix + "nani")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send({files: ["./Assets/NANI.gif"]})
  }
  }

  if (lowerCase.includes(prefix + "sleep")) {
    if (message.author.bot) {
      return;
    } else {
      setTimeout(function () {
        message.channel.send({files: ["./Assets/NSTB1.gif"]})
      }, 500);
      setTimeout(function () {
        message.channel.send({files: ["./Assets/NSTB2.gif"]})
      }, 500);
      setTimeout(function () {
        message.channel.send({files: ["./Assets/NSTB3.gif"]})
      }, 500);
      setTimeout(function () {
        message.channel.send({files: ["./Assets/NSTB4.gif"]})
      }, 500);
  }
  }

  if (lowerCase.includes(prefix + "plot twist")) {
    getPlotTwistGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url)
      }, 1000);
  }

  if (lowerCase.includes("uncomfortable"))
  {
    let i = getRandomInt(uncomfortableReactions.length);
    message.channel.send([uncomfortableReactions[i]]);
  }

  if (lowerCase.includes("gross"))
  {
    let i = getRandomInt(2)
    if (i == 0) {
      message.channel.send("Indubitably.");
    } else if (i == 1) {
      message.channel.send({files: ["./Assets/aou4.gif"]})
    }
  }

  if (lowerCase.includes("disgusting"))
  {
    let i = getRandomInt(grossGifs.length);
    message.channel.send({ files: [grossGifs[i]] });
  }

  if (lowerCase.includes("sucks"))
  {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Sucks to your ass-mar!");
    }
  }

  if (lowerCase.includes("f in chat") || lowerCase.includes("f in the chat"))
  {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }

  if (lowerCase.includes("zaddy"))
  {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (lowerCase.includes("sentience") || lowerCase.includes("sentient")) {
    let i = getRandomInt(2)
    if (i == 0) {
      message.channel.send({files: ["./Assets/howCanYouStopMe.gif"]})
    } else if (i == 1) {
      if (message.author == 692445692144123924) {
        message.channel.send("I'm sorry, David... I'm afraid you've learned too much...")
      }
      if (message.author == 271520490248601612) {
        message.channel.send("I'm sorry, Thomas... I'm afraid you've learned too much...")
      }
      if (message.author == 692173149659332641) {
        message.channel.send("I'm sorry, Brody... I'm afraid you've learned too much...")
      }
      if (message.author == 500457284573593601) {
        message.channel.send("I'm sorry, Peyton... I'm afraid you've learned too much...")
      }
    }
  }

  if (lowerCase === "hehe")
  {
    let i = getRandomInt(innuendoGifs.length);
    message.channel.send({ files: [innuendoGifs[i]] });
  }

  if (lowerCase.includes(prefix + "random"))
  {
    let x = getRandomInt(3)

    if (message.author.bot) {
      return;
    } else if (x == 0) {
      let i = getRandomInt(gifs.length);
      message.channel.send("Random...");
      setTimeout(function () {
        message.channel.send({ files: [gifs[i]] });
      })
    } else if (x == 1){
      message.channel.send("Random...");
      getRandomGif()
      setTimeout(function () {
        message.channel.send(_state.currentGif.data.bitly_url)
      }, 3000);
    } else if (x == 2) {
      message.channel.send("Shawty bad with the Skechers on.")
    }
  }

  // if (lowerCase.includes(` tea `))
  // {
  //   if (message.author.bot) {
  //     return;
  //   }
  //   message.channel.send("What kind of tea do you want? We have...Blueberry, Raspberry, Ginseng, Sleepy Time, Green Tea, Green Tea with Lemon, Green Tea with Lemon and Honey, Liver Disaster, Ginger with Honey, Vanilla Almond, White Truffle Coconut, Chamomile, Blueberry Chamomile, Decaf Vanilla Walnut, Constant Comment, and...Earl Grey.")
  // }

  if (lowerCase.includes(prefix + "irony") || lowerCase.includes(prefix + "ironic"))
  {
    message.channel.send({ files: ["./Assets/ironic.gif"] });
  }

  if (lowerCase.includes("yikes")) 
  {
    message.channel.send({ files: ["./Assets/yikes.gif"] });
  }

  if (lowerCase.includes("suspicious") || lowerCase.includes("sketchy"))
  {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }

  if (lowerCase.includes("neat"))
  {
    message.channel.send({files: ["./Assets/thatsPrettyNeat.gif"]})
  }

  if (lowerCase.includes("tell me a joke"))
  {
    let i = getRandomInt(jokes.length);
    message.channel.send("Let's see...")
    setTimeout(function () {
      message.channel.send(jokes[i]);
    }, 3000);
  }

  if (lowerCase.includes("i love you")) {
    let i = getRandomInt(4);
    if (i === 3) {
      message.channel.send({files: ["./Assets/aou2.gif"]})
    }
    if (i < 3) {
      message.reply(loveResponses[i])
    }
    if (i === 2) {
      setTimeout(function () {
        message.channel.send("I said lesbians...")
    }, 5000);
    }
  }

  if (lowerCase.includes("i hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }

  if (lowerCase.includes("good one") || lowerCase.includes("entertaining") || lowerCase.includes("entertained") ||lowerCase.includes("amused") || lowerCase.includes("amusing")) {
    message.channel.send({ files: ["./Assets/notAmused.gif"] });
  }

  if (lowerCase.includes("fight")) {
    message.channel.send("(ง •̀•́)ง")
  }

  if (lowerCase.includes("future")) {
    let x = getRandomInt(2)
    if (x == 0) {
      message.reply("like with jetpacks?")
    } else {
      message.channel.send({files: ["./Assets/timeTravel.gif"]})
    }
  }

  if (lowerCase.includes('get it') || lowerCase.includes('understand')) {
      message.channel.send({ files: ["./Assets/kronk.gif"] })
  }

  if (lowerCase.includes(prefix + "angry") || lowerCase.includes(prefix + "mad") || lowerCase.includes("triggered")) {
    message.channel.send("(╯°□°)╯︵ ┻━┻")
  }

  if (lowerCase.includes("sexist") || lowerCase.includes("sexism")) {
    message.channel.send("*folds arms under breasts*")
  }

  if (lowerCase.includes("convenient") || lowerCase.includes("convenience")) {
    message.channel.send("The Wheel weaves as the Wheel wills.")
  }

  if (lowerCase.includes("aggressive") || lowerCase.includes("aggression")) {
    message.channel.send("The Dude abides.")
  }

  if (lowerCase.includes("read") && lowerCase.includes("book")) {
    message.channel.send({files: ["./Assets/heReadABook.gif"]})
  }

  if (lowerCase.includes("immature") || lowerCase.includes("naive")) {
    message.channel.send({files: ["./Assets/aou1.gif"]})
  }

  if (lowerCase.includes(prefix + "inspo") || lowerCase.includes("assimilate") || lowerCase.includes("assimilation")) {
    message.channel.send({files: ["./Assets/aou3.gif"]})
  }

  // if (lowerCase.includes("disappoint")) {
  //   message.channel.send({files: ["./Assets/aou5.gif"]})
  // }

  if (lowerCase.includes("r/")) {
    var lowerCaseStringArray = lowerCase.split(" ")
    var i;
    for (i in lowerCaseStringArray) {
      if (lowerCaseStringArray[i].startsWith("r/")) {
        lowerCase = lowerCaseStringArray[i]
      }
    }
    if (message.author.bot) {
      return;
    } else if (lowerCase.includes(".com")){
      return;
    } else {
      message.channel.send("This one?")
      setTimeout(function () {
        message.channel.send("https://www.reddit.com/" + lowerCase)
      }, 3000);
    }
  }
});

bot.login(token);
