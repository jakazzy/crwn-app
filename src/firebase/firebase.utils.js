import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCGU_jpPVTBgDp03-4WVd9yHK67IQQGcs0",
    authDomain: "crwn-db-eeb8a.firebaseapp.com",
    databaseURL: "https://crwn-db-eeb8a.firebaseio.com",
    projectId: "crwn-db-eeb8a",
    storageBucket: "crwn-db-eeb8a.appspot.com",
    messagingSenderId: "304607546572",
    appId: "1:304607546572:web:de8d8cf88b5487a4b68669"
  };

  export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    const createdAt = new Date()
    if(!snapshot.exists){
      const { displayName, email }= userAuth
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch (error) {
        console.log('error creating user', error.message);
        
      }
    }
     return userRef
      
  }
  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
  export default firebase