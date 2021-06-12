import firebase from 'firebase'
import { Poles } from '../models/poles'
import { Voites } from '../models/voites'
import Utils from '../utils/utils'
const FecthPoles = async (path) => {
  const PolesDoc = await FecthCollection(path)
  try {
    const Result = PolesDoc.map(async (doc) => {
      const arrUser = []
      const VoiteDoc = await FecthCollection(
        `${path}/${doc.id}/${Utils.SubCollection}`
      )

      VoiteDoc.forEach((element) => {
        arrUser.push(new Voites(element.id, element.data().Username))
      })

      return new Poles(
        doc.id,
        `${path}/${doc.id}/${Utils.SubCollection}`,
        doc.data().Description,
        doc.data().Exp,
        doc.data().TimeStamp,
        doc.data().PoleName,
        doc.data().By,
        arrUser
      )
    })
    return { success: true, massage: 'Get data item.', data: Result }
  } catch (err) {
    return { success: false, massage: err, data: [] }
  }
}

const CreateNewPoles = async (payload) => {
  try {
    const RefPole = await firebase.firestore().collection(payload.collection)
    RefPole.add(payload.pole).then(() => {
      return { success: true, massage: 'Add pole success.' }
    })
  } catch (err) {
    return { success: false, massage: err, data: payload.pole }
  }
}

const InsetVoitPole = async (payload) => {
  try {
    const RefPole = await firebase.firestore().collection(payload.Path)
    RefPole.add(payload.user).then(() => {
      return { success: true, massage: 'voite pole success.' }
    })
  } catch (err) {
    return { success: false, massage: err, data: payload.user }
  }
}

const FecthCollection = async (path) => {
  const RefPath = await firebase.firestore().collection(path).get()
  return RefPath.docs
}
export default { FecthPoles, CreateNewPoles, InsetVoitPole }
