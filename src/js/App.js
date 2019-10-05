import React from "react"

import {Provider as ReduxProvider, useDispatch, useSelector} from "react-redux"
import {configureStore} from "./store/store"

import {Timer} from "./Timer"
import {Randomizer} from "./Randomizer"

const App = () => {
  const dispatch = useDispatch()
  const currentTurn = useSelector(state => state.currentTurn)

  const nextTurn = () => {
    dispatch({type: "NEXT_TURN"})
  }

  return (
    <main className="main">
      <div className="turns">
        <strong className="label">Turn</strong>
        <div className="value">{currentTurn + 1}</div>
        <button className="button" onClick={nextTurn}>
          Next Turn
        </button>
      </div>
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
