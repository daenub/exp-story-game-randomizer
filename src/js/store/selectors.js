import {createSelector} from "reselect"

const emotions = state => state.emotions
const objects = state => state.objects
const places = state => state.places
export const getCurrentTurn = state => state.currentTurn
const time = state => state.time

export const orderedEmotionList = createSelector(
  emotions,
  state => state.emotionsOrder,
  (list, order) => order.map(i => list[i])
)

export const orderedObjectList = createSelector(
  objects,
  state => state.objectsOrder,
  (list, order) => order.map(i => list[i])
)

export const orderedPlaceList = createSelector(
  places,
  state => state.placesOrder,
  (list, order) => order.map(i => list[i])
)

export const orderedTurnList = createSelector(
  orderedEmotionList,
  orderedObjectList,
  orderedPlaceList,
  (emotions, objects, places) => {
    const maxLength = 16 // four times four turns
    const turnList = []

    for (let i = 0; i <= maxLength - 1; i++) {
      turnList.push({
        turn: i + 1,
        emotion: emotions[i],
        object: objects[i],
        place: places[Math.floor(i / 4)],
      })
    }

    return turnList
  }
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
