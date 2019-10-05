// function shuffle(a) {
//   console.log(a)
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = (Math.floor(Math.random() * (i + 1))[(a[i], a[j])] = [a[j], a[i]])
//   }
//   return a
// }

export function initNewGame() {
  return (dispatch, getState) => {
    const {emotions, objects, places} = getState()

    let emotionsOrder = emotions.map((e, i) => i)
    // emotionsOrder = shuffle(emotionsOrder)

    let objectsOrder = objects.map((o, i) => i)
    // objectsOrder = shuffle(objectsOrder)

    let placesOrder = places.map((p, i) => i)
    // placesOrder = shuffle(placesOrder)

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
