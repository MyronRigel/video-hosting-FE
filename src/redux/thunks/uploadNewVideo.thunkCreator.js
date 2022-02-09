import axiosInstance from '../../axios/axios'
import uploadNewVideoActionCreator from '../actions/uploadNewVideo.actionCreator'

const uploadNewVideoThunkCreator = () => async (dispatch, file) => {
  const info = await axiosInstance.post('/video', file)
  dispatch(uploadNewVideoActionCreator(info))
}

export default uploadNewVideoThunkCreator