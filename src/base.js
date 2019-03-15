import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhtVFWTR5BLpDzCTV7v56GjCxB6ZLAEPQ",
    authDomain: "chatbox-app-ca7a4.firebaseapp.com",
    databaseURL: "https://chatbox-app-ca7a4.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base