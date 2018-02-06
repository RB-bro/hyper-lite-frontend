import {h} from 'hyperapp'


export const container = (children) =>
  h @ 'div', {class:'container'}, children

export const row = (children) =>
  h @ 'div', {class:'row'}, children

export const button = (props, child) => ::
  console.log @ 'props', props
  return h @ 'button', props, child
