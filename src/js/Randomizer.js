import React from "react"
import {useSelector} from "react-redux"

import {getCurrentTurn, orderedTurnList} from "./store/selectors.js"

const ROW_HEIGHT = 41

export const Randomizer = () => {
  const currentTurn = useSelector(getCurrentTurn)
  const turns = useSelector(orderedTurnList)

  const turnMultiplicator = currentTurn === 0 ? 0 : currentTurn - 1
  const turnListStyle = {
    transform: `translateY(${turnMultiplicator * ROW_HEIGHT * -1}px)`,
  }

  return (
    <div className="randomizer">
      <div className="turn-list-wrapper">
        <ul className="turn-list" style={turnListStyle}>
          {turns.map(({turn, place, emotion, object}) => (
            <li
              className={`turn-row ${
                turn === currentTurn + 1
                  ? "turn-row--current"
                  : turn === currentTurn
                  ? "turn-row--prev"
                  : turn === currentTurn + 2
                  ? "turn-row--next"
                  : ""
              }`}
              key={turn}
            >
              {/*<div className="turn-row__cell turn-row__cell--number">
                {turn}
              </div>*/}
              <div className="turn-row__cell turn-row__cell--place">
                {place}
              </div>
              <div className="turn-row__cell turn-row__cell--object">
                {object}
              </div>
              <div className="turn-row__cell turn-row__cell--emotion">
                {emotion}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
