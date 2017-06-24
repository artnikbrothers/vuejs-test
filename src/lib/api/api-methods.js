import api from './api.js'

export function fetchUser (id) {
  return api.get('/users/' + id + '.json')
    .then(res => Promise.resolve(res.data.user))
}

export function fetchProfileItems (id) {
  return api.get('/users/' + id + '/items.json')
    .then(res => Promise.resolve(res.data.items))
}

export function fetchProfileBoxes (id) {
  return api.get('/users/' + id + '/boxes.json')
    .then(res => Promise.resolve(res.data))
}
