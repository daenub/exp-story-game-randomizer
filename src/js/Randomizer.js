import React from "react"
import {useSelector} from "react-redux"

import {getCurrentTurn, orderedTurnList} from "./store/selectors.js"

export const Randomizer = () => {
  const currentTurn = useSelector(getCurrentTurn)
  const turns = useSelector(orderedTurnList)

  return (
    <div className="randomizer">
      <div className="turn-list-wrapper">
        <ul className="turn-list">
          <li className="turn-row turn-row--header">
            <div className="turn-row__cell turn-row__cell--number">Zug</div>
            <div className="turn-row__cell turn-row__cell--place">Ort</div>
            <div className="turn-row__cell turn-row__cell--emotion">
              Emotion
            </div>
            <div className="turn-row__cell turn-row__cell--object">
              Gegenstand
            </div>
          </li>
          {turns.map(({turn, place, emotion, object}) => (
            <li
              className={`turn-row ${
                turn === currentTurn + 1 ? "turn-row--current" : ""
              }`}
              key={turn}
            >
              <div className="turn-row__cell turn-row__cell--number">
                {turn}
              </div>
              <div className="turn-row__cell turn-row__cell--place">
                {place}
              </div>
              <div className="turn-row__cell turn-row__cell--emotion">
                {emotion}
              </div>
              <div className="turn-row__cell turn-row__cell--object">
                {object}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
