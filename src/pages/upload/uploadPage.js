import React from 'react'
import {Upload } from 'antd'
import UploadComponent from '../../components/UploadD&D/Upload'


const UploadPage = () => {
    // const [video, setVideo] = useState(null)
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    //
    // const selectFile = event => {
    //     setVideo(event.target.files[0])
    // }
    //
    // const addNewVideo = () => {
    //     const formData = new FormData()
    //     formData.append('video', video)
    //     uploadNewVideoThunkCreator(dispatch, formData)
    //     navigate('/videos')
    // }


    return (
        <>
            {/*<input type="file" onChange={selectFile}/>*/}
            {/*<button onClick={addNewVideo}>send</button>*/}
            <UploadComponent />
        </>
    )
}

export default UploadPage
