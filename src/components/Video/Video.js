import React from 'react'
import '../../styles/components/Video.scss'
import propTypes from 'prop-types'

const Video = ({src, title}) => {
  return (
    <div className="container">
      <h1>title - {title}</h1>
      <video className="video-card" controls>
        <source src={src}/>
      </video>
    </div>
  )
}

Video.propTypes = {
  src: propTypes.string,
  title: propTypes.string
}


export default Video
