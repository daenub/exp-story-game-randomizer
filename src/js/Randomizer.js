import React from "react"
import {useSelector} from "react-redux"

import {currentEmotion, currentObject, currentPlace} from "./store/selectors.js"

export const Randomizer = () => {
  const emotion = useSelector(currentEmotion)
  const object = useSelector(currentObject)
  const place = useSelector(currentPlace)

  return (
    <div className="randomizer">
      <strong className="label">Place</strong>
      <div className="value">{place}</div>
      <strong className="label">Emotion</strong>
      <div className="value">{emotion}</div>
      <strong className="label">Object</strong>
      <div className="value">{object}</div>
    </div>
  )
}
