import Axios from 'axios'
import { constants } from '../utils/constants'

const axiosInstance = Axios.create({
  baseURL: constants.apiUrl,
})

export default axiosInstance