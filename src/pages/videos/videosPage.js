import React, { useEffect } from 'react'
import Video from '../../components/Video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../utils/constants'
import getAllVideosThunkCreator from '../../redux/thunks/getAllVideos.thunkCreator'
import './videosPage.scss'

const VideosPage = () => {

    const dispatch = useDispatch()
    const videos = useSelector(state => state.videoReducer.videos)

    useEffect(() => {
        dispatch(getAllVideosThunkCreator)
    }, [])

    return (
        <div className="container">
            {!!videos.length
                ?
                videos.map(name => {
                    const title = name.split('.')[1]
                    return <Video key={name} src={constants.apiUrl + `/video/${name}`} title={title}/>
                })
                :
                <h1>No videos</h1>
            }
        </div>
    )
}

export default VideosPage