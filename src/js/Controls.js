import React from "react"
import {useDispatch, useSelector} from "react-redux"

import {startGame, restartGame} from "./store/actions"

export const ControlOverlay = () => {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.game.status)

  const onClickStart = () => dispatch(startGame())
  const onClickRestart = () => dispatch(restartGame())

  if (gameStatus === "STARTED") {
    return null
  }

  return (
    <div className="control-overlay">
      <div className="control-overlay__content">
        {gameStatus === "NOT_STARTED" ? (
          <button className="button" onClick={onClickStart}>
            Spiel starten
          </button>
        ) : (
          <>
            <p>Das Spiel wurde beendet.</p>
            <button className="button" onClick={onClickRestart}>
              Spiel neustarten
            </button>
          </>
        )}
      </div>
    </div>
  )
}
