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
      <button className="button" onClick={onClickNext}>
        {currentTurn + 1 === GAME_DURATION ? "Spiel beenden" : "Nächster Zug"}
      </button>
      <Timer />
      <Randomizer />
    </main>
  )
}

export default () => (
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>
)
