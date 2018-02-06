import {h} from 'hyperapp'

import {container, row, button} from '../helper'

const oneColumn = (children=[]) =>
  h @ 'div', {class: '1 column'}, children

const onClick = (action) => @: onclick:() => action()

export default function(state, actions) ::
  console.log @ actions
  return container @ @#
    row @ @#
      oneColumn()
      h @ 'div', {class:'10 columns'}, @#
        'hey there'
        button @ onClick(actions.counter), 'counter'
        button @ {onclick:() => actions.home()}, 'home'
        button @ {onclick:() => actions.nav('dennis')}, 'dennis'

      oneColumn()
    row @ @#
      oneColumn()
      h @ 'div', {class:'10 columns'}, @#
        'home stuff'
      oneColumn()
    row @ @#
      h @ 'div', {class:'10 columns'}, @#
        'some news'
      oneColumn()
      oneColumn()
    row @ @#
      oneColumn()
      oneColumn()
      h @ 'div', {class:'10 columns'}, @#
        'some more intrestin facts there'
    
