import axiosInstance from '../../axios/axios'
import { constants } from '../../utils/constants'

const uploadNewVideoThunkCreator = async (dispatch, file) => {
    const info = await axiosInstance.post('/video', file)
    dispatch({type: constants.UPLOAD_NEW_VIDEO, payload: info.data})
}

export default uploadNewVideoThunkCreator