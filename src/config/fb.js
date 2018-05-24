import { initializeApp, database } from 'firebase'

const config = {
  apiKey: "AIzaSyCeoc3wxsLFgK9vaGN9rZItjPpjQFhQhHk",
  authDomain: "popquiz-d696f.firebaseapp.com",
  databaseURL: "https://popquiz-d696f.firebaseio.com",
  projectId: "popquiz-d696f",
  storageBucket: "",
  messagingSenderId: "283163985891"
};

export default {
  db: () => {
    initializeApp(config)
    return database()
  },

  /** GET All */
  fetchAll: (db, ref) => new Promise(resolve => {
    db.ref(`/${ref}`)
      .once('value')
      .then(v => resolve(v.val()))
  }),

  /** POST One */
  add: (db, ref, key, data) => new Promise(resolve => {
    resolve(db.ref(`/${ref}`).child(key).push(data))
  })
}
