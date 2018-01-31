import { h, app } from "hyperapp"

const state = {
    count: 0
}

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) =>
  h( 'main'
   , null
   , [ h('h1', null, state.count)
     , h('button', {onclick:() => actions.down()}, "-")
     , h('button', {onclick:() => actions.up()}, "+")]
  )

const main = app(state, actions, view, document.body)
