import firebase from 'firebase'
import { Poles } from '../models/poles'
import { Voites } from '../models/voites'
import Utils from '../utils/utils'
const FecthPoles = async (path) => {
  try {
    const data = []
    const PolesDoc = await FecthCollection(path)
    PolesDoc.forEach((element) => {
      data.push(
        new Poles(
          element.id,
          element.data().Description,
          element.data().Exp,
          element.data().TimeStamp,
          element.data().PoleName,
          element.data().By,
          element.data().Options,
          []
        )
      )
    })
    return data
  } catch (err) {
    return []
  }
}

const FecthVoites = async (path) => {
  try {
    const data = []
    const PolesDoc = await FecthCollection(path)
    PolesDoc.forEach((element) => {
      data.push(
        new Voites(
          element.data().UserId,
          element.data().Username,
          element.data().Option,
          element.data().RefVoite
        )
      )
    })
    return data
  } catch (err) {
    return []
  }
}

const CreateNewPoles = async (payload) => {
  try {
    // await window.console.log(JSON.stringify(payload.pole))
    const RefPole = await firebase.firestore().collection(payload.collection)
    if (RefPole) {
      RefPole.add({
        Description: payload.pole.Description,
        Exp: payload.pole.Exp,
        TimeStamp: payload.pole.TimeStamp,
        Options: payload.pole.Options,
        PoleName: payload.pole.PoleName,
        By: payload.pole.By,
      })
      return { success: true, massage: 'Add pole success.' }
    }
  } catch (err) {
    return { success: false, massage: err }
  }
}

const InsetVoitPole = async (payload) => {
  try {
    const RefPole = await firebase.firestore().collection(payload.Path)
    const result = RefPole.add({
      UserId: payload.user.UserId,
      Username: payload.user.Username,
      Option: payload.user.Option,
      RefVoite: payload.user.RefVoite,
    })
    if (result) {
      return { success: true, massage: 'voite pole success.' }
    }
  } catch (err) {
    return { success: false, massage: err, data: payload.user }
  }
}

const DeletePole = async (documentPoleId) => {
  window.console.log(documentPoleId)
  try {
    await firebase
      .firestore()
      .collection(Utils.BaseCollection())
      .doc(documentPoleId)
      .delete()

    const RefVoite = await firebase
      .firestore()
      .collection(Utils.SubCollection())
      .where('RefVoite', '==', documentPoleId)
    const result = await RefVoite.get()
    result.forEach((doc) => {
      doc.ref.delete()
    })
    return {
      success: true,
      massage: 'Delete success.',
    }
  } catch (err) {
    return {
      success: false,
      massage: err,
    }
  }
}

const FecthCollection = async (path) => {
  const RefPath = await firebase.firestore().collection(path).get()
  return RefPath.docs
}
export default {
  FecthPoles,
  CreateNewPoles,
  InsetVoitPole,
  FecthVoites,
  DeletePole,
}
