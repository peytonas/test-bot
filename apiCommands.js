const prefix = process.env.PREFIX;
const axios = require("axios");

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

let _pizzaApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=pizza&rating=r`,
});

let _tacoApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=tacos&rating=r`,
});

let _burgerApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=burger&rating=r`,
});

let _hootApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=hoot&rating=r`,
});

let _state = {
  currentGif: {},
};

function _setState(propName, data) {
  _state[propName] = data;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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

function getPizzaGif() {
  _pizzaApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function getTacoGif() {
  _tacoApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function getBurgerGif() {
  _burgerApi
    .get()
    .then((res) => {
      let giphy = res.data;
      _setState("currentGif", giphy);
    })
    .catch((err) => console.error(err));
}

function noodsGif(message) {
  if (message.author.bot) {
    return;
  } else {
    getNoodsGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url);
    }, 1000);
  }
}

function pizzaGif(message) {
  if (message.author.bot) {
    return;
  } else {
    getPizzaGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url);
    }, 1000);
  }
}

function tacoGif(message) {
  if (message.author.bot) {
    return;
  } else {
    getTacoGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url);
    }, 1000);
  }
}

function burgerGif(message) {
  if (message.author.bot) {
    return;
  } else {
    getBurgerGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url);
    }, 1000);
  }
}

function hootGif(message) {
  if (message.author.bot) {
    return;
  } else {
    getHootGif();
    setTimeout(function () {
      message.channel.send(_state.currentGif.data.bitly_url);
    }, 1000);
  }
}

function hotGif(message) {
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

function randomGif(message) {
  let x = getRandomInt(2);

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
  }
}

module.exports = {
  checkCmd: function (lowerCase, message) {
    found = false;

    if (lowerCase.includes(prefix + "hot")) {
      found = true;
      hotGif(message);
    }

    if (lowerCase.includes(prefix + "noods")) {
      found = true;
      noodsGif(message);
    }

    if (lowerCase.includes(prefix + "pizza")) {
      found = true;
      pizzaGif(message);
    }

    if (lowerCase.includes(prefix + "tacos")) {
      found = true;
      tacoGif(message);
    }

    if (lowerCase.includes(prefix + "burgers")) {
      found = true;
      burgerGif(message);
    }

    if (lowerCase.includes(prefix + "hoot")) {
      found = true;
      hootGif(message);
    }

    if (lowerCase.includes(prefix + "random")) {
      found = true;
      randomGif(message);
    }
  },
};
