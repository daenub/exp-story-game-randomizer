import React, {useState, useEffect} from "react"

const WARNING_TIME = 20
const DANGER_TIME = 30

export const Timer = ({subscribeToTurns, unsubscribeFromTurns}) => {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

  const timeClass =
    time > WARNING_TIME ? (time > DANGER_TIME ? "danger" : "warning") : ""

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
      <div className={`value ${timeClass}`}>{time}</div>
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
