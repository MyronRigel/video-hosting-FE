import React from 'react'

import './NavBar.scss'
import { Button, Pagination } from 'antd'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

    const changeURL = (path) => {
        navigate(path)
    }
    return (
        <>
            <nav className="nav">
                <Button className="link" onClick={() => changeURL('/')}>Home</Button>
                <Button className="link" onClick={() => changeURL('/upload')}>Upload</Button>
                <Button className="link" onClick={() => changeURL('/videos')}>Videos</Button>
            </nav>
        </>
    )
}

export default NavBar
