import './styles/index.scss'
import {emotions, objects} from "./js/data.js"

import ReactDOM from "react-dom"
import React from "react"

import App from "./js/App.js"



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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);