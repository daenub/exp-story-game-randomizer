import './styles/index.scss'

let emotions = [
  "enttäuscht",
  "gespannt",
  "angespannt",
  "vorfreudig",
  "überrascht",
  "stolz",
  "gelangweilt",
  "zuversichtlich",
  "neugierig",
  "belustigt",
  "neugierig",
  "eifersüchtig",
  "verletzt",
  "beleidigt",
  "aggressiv",
  "zornig",
  "gleichgültig",
  "angriffslustig",
  "emotional",
  "verspielt",
  "geschmeichelt",
  "überlegen",
  "erstaunt",
  "beglückt",
  "unaufgeregt",
  "verbittert",
  "zufrieden",
  "ängstlich",
  "schüchtern",
  "aufbrausend",
]

let objects = [
  "altes Telefon",
  "Schaufensterpuppe",
  "Snowboardschuh",
  "Lederjacke",
  "Lupe",
  "Armreif",
  "Ohrringe",
  "Plastik-Flamingo",
  "pinke Sonnenbrille",
  "Trinkflasche",
  "Gitarre",
  "Porzellan",
  "Spiegel",
  "Glasvase",
  "Koffer",
  "Radio",
]


let emotionEl = document.querySelector("[data-value-emotion]")
let objectEl = document.querySelector("[data-value-object]")
let buttonEl = document.querySelector("[data-button]")

function randomize() {
  let randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
  let randomObject = objects[Math.floor(Math.random() * objects.length)]

  emotionEl.textContent = randomEmotion
  objectEl.textContent = randomObject
}

buttonEl.addEventListener('click', randomize)
randomize()