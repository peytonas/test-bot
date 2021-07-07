const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = bot.guilds.cache.map((guild) => guild.id);
fs = require("fs");

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
const counterCommands = require("./counterCommands");

bot.on("ready", async () => {
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase();
  if (counterCommands.checkCmd(lowerCase, message, guild)) return;
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
      !beans | !blog
      !bored | !burn
      !classy | !cooks
      !dos | !fail
      !flipflop | !goodnight
      !grind | !grrm
      !hot | !idky
      !iron | !irony/!ironic
      !jammin | !jt
      !kinky | !markov
      !no | !nani/!what
      !noods | !paradise
      !pork | !porkin
      !random | !rp1
      !rt | !ryuk
      !sleep | !smarf
      !tea | !terror
      !toocool | !tragedy
      !wrong | !zemo/!smile
      `
      );
    }
  }
});

bot.login(token);
