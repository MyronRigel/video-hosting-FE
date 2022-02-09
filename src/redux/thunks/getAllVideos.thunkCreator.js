import axiosInstance from '../../axios/axios'
import uploadAllVideosActionCreator from '../actions/uploadAllVideos.actionCreator'

const getAllVideosThunkCreator = () => async (dispatch) => {
  const response = await axiosInstance.get('video/all')
  dispatch(uploadAllVideosActionCreator(response))
}

export default getAllVideosThunkCreator