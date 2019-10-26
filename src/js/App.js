import React from "react"

import {Provider as ReduxProvider, useDispatch, useSelector} from "react-redux"
import {configureStore} from "./store/store"
import {nextTurn} from "./store/actions"
import {getCurrentTurn} from "./store/selectors.js"
import {GAME_DURATION} from "./config.js"

import {Timer} from "./Timer"
import {Randomizer} from "./Randomizer"
import {ControlOverlay} from "./Controls"

const App = () => {
  const dispatch = useDispatch()
  const currentTurn = useSelector(getCurrentTurn)

  const onClickNext = () => {
    dispatch(nextTurn())
  }

  return (
    <main className="main">
      <ControlOverlay />
      <div className="scoreboard">
        <div className="scoreboard__turn">
          <h2 className="scoreboard__title">Runde</h2>
          <div className="current-turn">{currentTurn + 1}</div>
        </div>
        <div className="scoreboard__time">
          <h2 className="scoreboard__title">Zeit</h2>
          <Timer />
        </div>
      </div>
      <Randomizer />
      <button className="button" onClick={onClickNext}>
        {currentTurn + 1 === GAME_DURATION ? "Spiel beenden" : "Nächste Runde"}
      </button>
    </main>
  )
}

export default () => (
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>
)
