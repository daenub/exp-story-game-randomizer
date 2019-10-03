import React, {useState, useEffect} from "react"

import {emotions, objects, places} from "./data.js"

const getRandomIndex = list => Math.floor(Math.random() * list.length)
const getEmotion = i => emotions[i]
const getObject = i => objects[i]
const getPlace = i => places[i]

export const Randomizer = ({subscribeToTurns, unsubscribeFromTurns}) => {
  const [emotion, setEmotion] = useState(getRandomIndex(emotions))
  const [object, setObject] = useState(getRandomIndex(objects))
  const [place, setPlace] = useState(getRandomIndex(places))

  const shuffle = (turnNumber = null) => {
    // shuffle the place every 4th turn or when the turn isn't specified
    if (turnNumber === null || turnNumber % 4 === 0) {
      setPlace(getRandomIndex(places))
    }

    setEmotion(getRandomIndex(emotions))
    setObject(getRandomIndex(objects))
  }

  useEffect(() => {
    const handleTurnChange = turnNumber => {
      shuffle(turnNumber)
    }

    subscribeToTurns(handleTurnChange)

    return () => unsubscribeFromTurns(handleTurnChange)
  }, [])

  return (
    <div className="randomizer">
      <strong className="label">Place</strong>
      <div className="value">{getPlace(place)}</div>
      <strong className="label">Emotion</strong>
      <div className="value">{getEmotion(emotion)}</div>
      <strong className="label">Object</strong>
      <div className="value">{getObject(object)}</div>
      <button className="button" onClick={() => shuffle()}>
        Shuffle
      </button>
    </div>
  )
}
