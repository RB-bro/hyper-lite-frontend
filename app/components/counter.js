
import { h } from "hyperapp"

import {button} from '../helper'

export function counter(state, actions) ::
  return @#
    h @ 'h1', null, state.count
    button @ {onclick:() => actions.down()}, "-"
    button @ {onclick:() => actions.up()}, "+"
