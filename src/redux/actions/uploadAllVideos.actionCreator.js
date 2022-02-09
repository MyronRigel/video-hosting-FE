import { constants } from '../../utils/constants'

const uploadAllVideosActionCreator = (payload) => {
  return {
    type: constants.GET_ALL_VIDEOS,
    payload: payload.data,
  }
}

export default uploadAllVideosActionCreator
