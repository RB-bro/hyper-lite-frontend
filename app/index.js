import { h, app } from "hyperapp"

import counter from './pages/counter'
import home from './pages/home'

import skeleton from './styles/skeleton.css'

const state = @{}
  page: 'home'
  count: 0

const actions = @{}
  down: () => state => @: count: state.count - 1
  up: () => state => @: count: state.count + 10
  counter: () => state => @: page: 'counter'
  home: () => state => @: page: 'home'
  nav: val => state => @: page: val


const view = (state, actions) => ::

  const c_view = viewForPage(state.page)
  return c_view(state, actions)

const main = app(state, actions, view, document.body)

const pageMap = @{}
  'home': home
  'counter': counter

function viewForPage(page) ::

  return pageMap[page] || notFound()

function notFound() ::
  return (state, actions) => h ('div', {class: 'red'}, '404 not found')

