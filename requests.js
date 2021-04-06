export default class api_requests {
  _setState(propName, data) {
  _state[propName] = data
}

getRandomGif() {
    _randomGifApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}

getHootGif() {
    _hootApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}

getPlotTwistGif() {
    _plotTwistApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}

getHotGif() {
    _hotGifApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}
  
getNoodsGif() {
    _noodsApi.get()
      .then(res => {
        let giphy = res.data
        _setState("currentGif", giphy)
      })
      .catch(err => console.error(err))
}
}


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

let _hootApi = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=LeMW5S9F7C5VAIirqbA4nWJTV0TQBART&tag=owl&rating=r`
})


let _state = {
  currentGif: {}
}  