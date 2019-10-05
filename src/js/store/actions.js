import {timerIsRunning} from "./selectors.js"

function shuffle(a) {
  let j, x, i
  let array = a.concat()

  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }

  return array
}

export function initNewGame() {
  return (dispatch, getState) => {
    dispatch({type: "NEW_GAME"})

    const {emotions, objects, places} = getState()

    let emotionsOrder = emotions.map((e, i) => i)
    emotionsOrder = shuffle(emotionsOrder)

    let objectsOrder = objects.map((o, i) => i)
    objectsOrder = shuffle(objectsOrder)

    let placesOrder = places.map((p, i) => i)
    placesOrder = shuffle(placesOrder)

    dispatch({
      type: "SET_EMOTIONS_ORDER",
      list: emotionsOrder,
    })

    dispatch({
      type: "SET_OBJECTS_ORDER",
      list: objectsOrder,
    })

    dispatch({
      type: "SET_PLACES_ORDER",
      list: placesOrder,
    })
  }
}

export function nextTurn() {
  return dispatch => {
    dispatch({type: "NEXT_TURN"})
    dispatch({
      type: "RESET_TIMER",
      time: new Date().getTime(),
    })
  }
}

export function toggleTimer() {
  return (dispatch, getState) => {
    const state = getState()
    const {time} = state

    const running = timerIsRunning(state)

    if (running) {
      dispatch(pauseTimer())
    } else {
      dispatch(startTimer(time.startedAt, time.pausedAt))
    }
  }
}

export function startTimer(startedAt = null, pausedAt = null) {
  const passedTime = startedAt && pausedAt ? pausedAt - startedAt : 0

  return {
    type: "START_TIMER",
    time: new Date().getTime() - passedTime,
  }
}

export function pauseTimer() {
  return {
    type: "PAUSE_TIMER",
    time: new Date().getTime(),
  }
}

export function resetTimer() {
  return {
    type: "RESET_TIMER",
  }
}
