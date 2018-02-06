
import { h } from "hyperapp"
import {counter} from '../components/counter'

import {container, row} from '../helper'

export default function(state, actions) ::
  return container @ @# 
    row @ @#
      h @ 'div', {class: '1 colmuns'}, []
      h @ 'div', {class: '10 colmuns'}, counter(state, actions)
      h @ 'div', {class: '1 colmuns'}, []

