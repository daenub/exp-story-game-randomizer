import React, {useEffect, useRef} from "react"
import {useSelector} from "react-redux"

import {getCurrentTurn, orderedTurnList} from "./store/selectors.js"

export const Randomizer = () => {
  const currentTurn = useSelector(getCurrentTurn)
  const turns = useSelector(orderedTurnList)

  const turnList = useRef()
  const turnHeader = useRef()

  useEffect(() => {
    const rowHeight = turnHeader.current.offsetHeight
    let turnMultiplicator = currentTurn - 1

    turnList.current.style.transform = `translateY(${turnMultiplicator *
      rowHeight *
      -1}px)`
  }, [currentTurn, turnList, turnHeader])

  return (
    <div className="randomizer">
      <div className="turn-row turn-row--header" ref={turnHeader}>
        <div className="turn-row__cell turn-row__cell--number">Zug</div>
        <div className="turn-row__cell turn-row__cell--place">Ort</div>
        <div className="turn-row__cell turn-row__cell--emotion">Emotion</div>
        <div className="turn-row__cell turn-row__cell--object">Gegenstand</div>
      </div>
      <div className="turn-list-wrapper">
        <ul className="turn-list" ref={turnList}>
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
