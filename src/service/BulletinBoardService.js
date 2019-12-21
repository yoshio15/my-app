import axios from "axios";

const BulletinBoardService = () => {

  const baseUrl = 'https://firestore.googleapis.com/v1/'
  const address = 'projects/yoshio-app/databases/(default)/documents/postContents'

  const getDocumentList = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl + address)
        .then((response) => {
          resolve(response.data.documents)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const postDocumet = async (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(baseUrl + address, data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        });
    })
  }

  const deleteDocument = async (address) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(baseUrl + address)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        });
    })
  }

  return { getDocumentList, postDocumet, deleteDocument }

}

export default BulletinBoardService