import React, {useState, useEffect} from "react"

const TURN_DURATION = 30 * 1000

export const Timer = () => {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)

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
      <div className="value">{time}</div>
      <button className="button" onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
    </div>
  )
}
