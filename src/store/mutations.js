import * as types from './mutation-types'

export default {

  [types.GET_TITLE] (title) {
    return title.replace(/\.md$/, '')
      .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
  }

};
