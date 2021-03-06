import firebase from 'firebase'
import { Poles, UserVoites } from '../models/Poles'
const FecthPoles = async (CollectionName) => {
  const PolesDoc = await FecthCollection(CollectionName)
  const Result = PolesDoc.map(async (doc) => {
    const arrUser = []
    const UserVoiteDoc = await FecthCollection(
      `${CollectionName}/${doc.id}/UserVoites`
    )

    UserVoiteDoc.forEach((element) => {
      arrUser.push(new UserVoites(element.id, element.data().Username))
    })

    return new Poles(
      doc.id,
      `${CollectionName}/${doc.id}/UserVoites`,
      doc.data().Description,
      doc.data().ImageURL,
      doc.data().Exp,
      doc.data().TimeStamp,
      arrUser
    )
  })

  return Result
}

const FecthCollection = async (subcollection) => {
  const snapshot = await firebase.firestore().collection(subcollection).get()
  return snapshot.docs
}
export default { FecthPoles }
