import {
  AsyncStorage
} from 'react-native'

const baseKey = '@C2:'

const Database = {
  load: (key) => {
    return AsyncStorage.getItem(baseKey+key)
  },
  store: (key, value) => {
    return AsyncStorage.setItem(baseKey+key, JSON.stringify(value))
  },
  flushAll: () => {
    AsyncStorage.multiRemove([
      baseKey+'human_scores',
      baseKey+'personal_scores',
      baseKey+'provider_scores'
    ])
  }
}

module.exports = Database
