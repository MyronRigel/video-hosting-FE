import { constants } from '../../utils/constants'

const initialState = {
  videos: [],
}

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ALL_VIDEOS:
      return {
        ...state,
        videos: [...action.payload],
      }

    case constants.UPLOAD_NEW_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      }

    default:
      return state
  }
}

export default videoReducer