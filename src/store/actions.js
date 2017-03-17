import axios from 'axios'
import config from '../config'

const Cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

let getTitle = (title) => {
  return title.replace(/\.md$/, '')
    .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
}

let getDate = (title) => {
  return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
}

export default {
  getArticles () {
    if (Cache.has('list')) {
      // Read from cache
      return Promise.resolve(Cache.get('list'))
    } else {
      let url = `https://api.github.com/repos/${config.repo}/contents/posts?ref=master`;
      return axios.get(url)
        .then( resp => resp.data
          , err => {
            console.log(err)
          })
        .then(arr => {
          // Data cleaning
          const list = arr.map(({name, sha, size}) => ({
            title: getTitle(name),
            date: getDate(name),
            sha,
            size
          }))
          // Save into cache
          Cache.set('list', list)
          // ..then return
          return list
        })
    }
  },
  getArticleDetail ({commit}, hash) {
    const httpOpts = {
      // https://developer.github.com/v3/media/#raw-1
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    const cacheKey = 'post.' + hash
    if (Cache.has(cacheKey)) {
      // Read from cache
      return Promise.resolve(Cache.get(cacheKey))
    } else {
      const url = `https://api.github.com/repos/${config.repo}/git/blobs/${hash}`
      return axios.get(url, httpOpts)
        .then(res => res.data)
        .then(content => {
          // Save into cache
          Cache.set(cacheKey, content)
          // ..then return
          return content
        })
    }
  }
}
