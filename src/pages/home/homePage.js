import React from 'react'
import './home.scss'

const HomePage = () => {
    return (
        <div className='main'>
            <section className='section'>
                <h1>This is home page of video hosting site using NodeJS and ReactJS</h1>
                <img className='img-class' src="https://media-exp1.licdn.com/dms/image/C4E22AQGcHn1MiBBcfA/feedshare-shrink_800/0/1644223434669?e=1647475200&v=beta&t=83loXmDUlrRZyFP8z70MoRN3aNXKedccNHBNW7IYrMo" alt="meme"/>
                <img className='img-class' src="https://media-exp1.licdn.com/dms/image/C4E22AQGQ5w6-aB7UqA/feedshare-shrink_800/0/1643973939606?e=1647475200&v=beta&t=CCuqcLfwATQiU0BS8RyMmETNgDmiPwY2EVM_XgrkTXE" alt="meme"/>
            </section>
        </div>
    )
}

export default HomePage
