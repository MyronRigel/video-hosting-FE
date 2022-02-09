import { constants } from '../../utils/constants'

const uploadNewVideoActionCreator = (payload) => {
  return {
    type: constants.UPLOAD_NEW_VIDEO,
    payload: payload.data,
  }
}

export default uploadNewVideoActionCreator