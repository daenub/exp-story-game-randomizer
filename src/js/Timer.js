import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"

import {timerIsRunning, currentSeconds} from "./store/selectors.js"

const WARNING_TIME = 20
const DANGER_TIME = 30

const pad0 = n => (n > 9 ? n : "0" + n)

const formatTime = seconds => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)

  return `${pad0(m)}:${pad0(s)}`
}

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(null)

  const running = useSelector(timerIsRunning)
  const seconds = useSelector(state => currentSeconds(state, currentTime))

  const timeClass =
    seconds > WARNING_TIME ? (seconds > DANGER_TIME ? "danger" : "warning") : ""

  useEffect(() => {
    let intervalId

    if (running) {
      intervalId = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [running])

  return <div className={`timer ${timeClass}`}>{formatTime(seconds)}</div>
}
