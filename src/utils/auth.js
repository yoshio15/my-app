import firebase from "firebase";

const auth = () => {

  const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => { resolve(response) })
        .catch(error => { reject(error) })
    })
  }

  const signOut = async () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(response => { resolve(response) })
        .catch(error => { reject(error) })
    })
  }

  const signUp = async (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => { resolve(response) })
        .catch(error => { reject(error) })
    })
  }

  return { signIn, signOut, signUp }

}

export default auth