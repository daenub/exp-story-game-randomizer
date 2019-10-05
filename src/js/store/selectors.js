import {createSelector} from "reselect"

const emotions = state => state.emotions
const objects = state => state.objects
const places = state => state.places
const currentTurn = state => state.currentTurn
const time = state => state.time

export const currentEmotion = createSelector(
  emotions,
  currentTurn,
  (emotions, turn) => emotions[turn]
)

export const currentObject = createSelector(
  objects,
  currentTurn,
  (objects, turn) => objects[turn]
)

export const currentPlace = createSelector(
  places,
  currentTurn,
  (places, turn) => places[Math.floor(turn / 4)]
)

export const timerIsRunning = createSelector(
  time,
  time => time.pausedAt === null && time.startedAt !== null
)

const getSeconds = time => Math.floor(time / 1000)

export const currentSeconds = createSelector(
  time,
  timerIsRunning,
  (_, currentTime) => currentTime,
  (time, timerIsRunning, currentTime) => {
    if (timerIsRunning) {
      return currentTime ? getSeconds(currentTime - time.startedAt) : 0
    } else if (time.startedAt) {
      return getSeconds(time.pausedAt - time.startedAt)
    } else {
      return 0
    }
  }
)
