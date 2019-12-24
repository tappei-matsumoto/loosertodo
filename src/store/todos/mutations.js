export function addDemoData (state) {
  state.items.push({ uuid: state.items.length })
}

export function remove (state, index) {
  state.items.splice(index, 1)
}
