const BaseCollection = () => 'voites'
const SubCollection = () => 'UserVoites'

const DateToTimestamp = (strDate) => {
  const datum = Date.parse(strDate)
  return datum / 1000 + 2678400
}

export default { BaseCollection, DateToTimestamp, SubCollection }
