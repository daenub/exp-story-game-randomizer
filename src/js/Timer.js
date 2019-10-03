import React, {useState, useEffect} from "react"

const TURN_DURATION = 3

export const Timer = ({subscribeToTurns, unsubscribeFromTurns}) => {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const handleTurnChange = () => {
      setTime(0)
    }

    subscribeToTurns(handleTurnChange)

    return () => unsubscribeFromTurns(handleTurnChange)
  }, [])

  useEffect(() => {
    let intervalId

    if (running) {
      intervalId = setInterval(() => {
        setTime(time => ++time)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [running])

  return (
    <div className="timer">
      <strong className="label">Timer</strong>
      <div className={`value ${time > TURN_DURATION ? "warning" : ""}`}>
        {time}
      </div>
      <div className="button-group">
        <button className="button" onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}
