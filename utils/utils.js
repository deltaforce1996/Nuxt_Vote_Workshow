import { UserVoites } from '../models/Poles'
const MapSubArrsy = (users) => () => {
  return users.map(() => {
    return new UserVoites(users.id, users.data().Username)
  })
}
export default MapSubArrsy
