const Discord = require("discord.js");
fs = require("fs");

const bot = new Discord.Client();

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

const diceCommands = require("./diceCommands");
const redditRef = require("./redditRef");
const inspoCommands = require("./inspoCommands");
const jokeCommands = require("./jokeCommands");
const markovCommands = require("./markovCommands");
const apiCommands = require("./apiCommands");
const coreCommands = require("./coreCommands");
const triggerCommands = require("./triggerCommands");
const memeCommands = require("./memeCommands");
const swearCommands = require("./swearCommands");
const videoCommands = require("./videoCommands");

// var logger = fs.createWriteStream('./quotes.txt', {
//   flags: 'a'
// })

bot.on("ready", async () => {
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase();
  // logger.write(message.content)
  if (diceCommands.checkCmd(lowerCase, message)) return;
  if (redditRef.checkCmd(lowerCase, message)) return;
  if (inspoCommands.checkCmd(lowerCase, message)) return;
  if (jokeCommands.checkCmd(lowerCase, message)) return;
  if (markovCommands.checkCmd(lowerCase, message)) return;
  if (apiCommands.checkCmd(lowerCase, message)) return;
  if (coreCommands.checkCmd(lowerCase, message)) return;
  if (triggerCommands.checkCmd(lowerCase, message)) return;
  if (memeCommands.checkCmd(lowerCase, message)) return;
  if (videoCommands.checkCmd(lowerCase, message)) return;
  if (swearCommands.checkCmd(lowerCase, message)) return;

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

  // if (
  //   lowerCase.includes(prefix + "awkward") ||
  //   lowerCase.includes(prefix + "awk")
  // ) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://www.youtube.com/watch?v=_V2sBURgUBI");
  //   }
  // }

  // if (lowerCase.includes(prefix + "fail")) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://www.youtube.com/watch?v=Ag1o3koTLWM");
  //   }
  // }

  // if (
  //   lowerCase.includes(prefix + "abrupt") ||
  //   lowerCase.includes(prefix + "sudden")
  // ) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://youtu.be/idoYCVLh2qI");
  //   }
  // }

  // if (lowerCase.includes(prefix + "wrong")) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://www.youtube.com/watch?v=bKgWm5TNeBA");
  //   }
  // }

  // if (lowerCase.includes(prefix + "beans")) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://youtu.be/bM25p7tGcOQ");
  //   }
  // }

  // if (lowerCase.includes(prefix + "banana")) {
  //   if (message.author.bot) {
  //     return;
  //   } else {
  //     message.channel.send("https://www.youtube.com/watch?v=S-Eyhq-D9yM");
  //   }
  // }
});

bot.login(token);
