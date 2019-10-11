import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"

// import {toggleTimer, resetTimer} from "./store/actions.js"
import {timerIsRunning, currentSeconds} from "./store/selectors.js"

const WARNING_TIME = 20
const DANGER_TIME = 30

export const Timer = () => {
  // const dispatch = useDispatch()

  // TODO i have no idea if this is orrect or not
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

  return <div className={`timer ${timeClass}`}>00:{seconds}</div>
}

/*<div className="button-group">
              <button className="button" onClick={() => dispatch(toggleTimer())}>
                {running ? "Pause" : "Start"}
              </button>
              <button className="button" onClick={() => dispatch(resetTimer())}>
                Reset
              </button>
            </div> */
