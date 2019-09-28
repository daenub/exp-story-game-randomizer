import React, {useState} from "react"

import {Timer} from "./Timer"
import {Randomizer} from "./Randomizer"

export default () => {
  const [turn, setTurn] = useState(1)

  const nextTurn = () => setTurn(turn => ++turn)

  return (
    <main className="main">
      <div className="turns">
        <strong className="label">Turn</strong>
        <div className="value">{turn}</div>
        <button className="button" onClick={nextTurn}>Next Turn</button>
      </div>
      <Timer />
      <Randomizer turn={turn} />
    </main>
  )
}