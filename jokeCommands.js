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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getJoke(message) {
  let i = getRandomInt(jokes.length);
  message.channel.send("Let's see...");
  setTimeout(function () {
    message.channel.send(jokes[i]);
  }, 1500);
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes("tell me a joke")) {
      found = true;
      getJoke(message);
    }
    return found;
  },
};
