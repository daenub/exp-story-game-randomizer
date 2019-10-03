import React, {useState, useRef} from "react"

import {Timer} from "./Timer"
import {Randomizer} from "./Randomizer"

export default () => {
  const [turn, setTurn] = useState(1)
  const turnSubsriptions = useRef([])

  const subscribeToTurns = fn => turnSubsriptions.current.push(fn)
  const unsubscribeFromTurns = fn =>
    (turnSubsriptions.current = turnSubsriptions.current.filter(
      item => item !== fn
    ))

  const nextTurn = () => {
    setTurn(turn => {
      let nextTurn = ++turn
      turnSubsriptions.current.forEach(fn => fn(nextTurn))
      return nextTurn
    })
  }

  return (
    <main className="main">
      <div className="turns">
        <strong className="label">Turn</strong>
        <div className="value">{turn}</div>
        <button className="button" onClick={nextTurn}>
          Next Turn
        </button>
      </div>
      <Timer {...{subscribeToTurns, unsubscribeFromTurns}} />
      <Randomizer {...{subscribeToTurns, unsubscribeFromTurns, turn}} />
    </main>
  )
}
