import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../utils/constants'
import getAllVideosThunkCreator from '../../redux/thunks/getAllVideos.thunkCreator'
import Video from '../../components/Video/Video'
import videoReducerSelector from '../../redux/selectors/videoReducer.selector'
import '../../styles/pages/videosPage.scss'

const VideosPage = () => {

  const dispatch = useDispatch()
  const videos = useSelector(videoReducerSelector)

  useEffect(() => {
    dispatch(getAllVideosThunkCreator())
  }, [])

  return (
    <div className="container">
      {videos.length
        ?
        videos.map(name => {
          const title = name.split('.')[1]
          return <Video key={name} src={`${constants.apiUrl}/video/${name}`} title={title}/>
        })
        :
        <h1>No videos</h1>
      }
    </div>
  )
}

export default VideosPage