import axiosInstance from '../../axios/axios'
import { constants } from '../../utils/constants'

const getAllVideosThunkCreator = async (dispatch) => {
    const info = await axiosInstance.get('video/all')
    dispatch({type: constants.GET_ALL_VIDEOS, payload: info.data})
}

export default getAllVideosThunkCreator