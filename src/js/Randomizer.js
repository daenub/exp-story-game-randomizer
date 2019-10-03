import React, {useState} from "react"

import {emotions, objects} from "./data.js"

const getRandomIndex = list => Math.floor(Math.random() * list.length)
const getEmotion = i => emotions[i]
const getObject = i => objects[i]

export const Randomizer = () => {
  const [emotion, setEmotion] = useState(getRandomIndex(emotions))
  const [object, setObject] = useState(getRandomIndex(objects))

  const shuffle = () => {
    setEmotion(getRandomIndex(emotions))
    setObject(getRandomIndex(objects))
  }

  return (
    <div className="randomizer">
      <strong className="label">Emotion</strong>
      <div className="value">{getEmotion(emotion)}</div>
      <strong className="label">Object</strong>
      <div className="value">{getEmotion(object)}</div>
      <button className="button" onClick={shuffle}>
        Shuffle
      </button>
    </div>
  )
}
