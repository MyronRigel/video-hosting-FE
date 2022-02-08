import React, { useEffect, useState } from 'react'
import './Video.scss'

const Video = ({src, title}) => {
    return (
        <div className='container'>
            <h1>title - {title}</h1>
            <video className='video-card' controls>
                <source src={src}/>
            </video>
        </div>
    )
}

export default Video
