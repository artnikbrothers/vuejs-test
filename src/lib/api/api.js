import axios from 'axios'

function makeRequest (request, url) {
  return axios[request]('/api' + url)
    .catch((e) => {
      console.error(e)
    })
}

export default {
  get (url) {
    return makeRequest('get', url)
  },
  post (url) {
    return makeRequest('post', url)
  },
  put (url) {
    return makeRequest('put', url)
  },
  delete (url) {
    return makeRequest('delete', url)
  }
}
