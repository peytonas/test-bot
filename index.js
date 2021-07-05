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

bot.on("ready", async () => {
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase();
  // logger.write(message.content)
  if (diceCommands.checkCmd(lowerCase, message)) return;
  if (inspoCommands.checkCmd(lowerCase, message)) return;
  if (coreCommands.checkCmd(lowerCase, message)) return;
  if (triggerCommands.checkCmd(lowerCase, message)) return;
  if (markovCommands.checkCmd(lowerCase, message)) return;
  if (memeCommands.checkCmd(lowerCase, message)) return;
  if (videoCommands.checkCmd(lowerCase, message)) return;
  if (apiCommands.checkCmd(lowerCase, message)) return;
  if (jokeCommands.checkCmd(lowerCase, message)) return;
  if (redditRef.checkCmd(lowerCase, message)) return;
  if (swearCommands.checkCmd(lowerCase, message)) return;

  if (lowerCase.includes(prefix + "commands")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send(
        `Commands:
      !abrupt/!sudden | !angry/!mad
      !awkward/!awk | !banana
      !beans | !bored
      !burn | !classy
      !dos | !fail
      !flipflop | !goodnight
      !grind | !grrm
      !hot | !idky
      !irony/!ironic | !jammin
      !jt | !kinky
      !markov | !nani/!what
      !noods | !paradise
      !pork | !random
      !rt | !ryuk
      !sleep | !smarf
      !tea | !terror
      !wrong | !zemo/!smile
      `
      );
    }
  }
});

bot.login(token);
