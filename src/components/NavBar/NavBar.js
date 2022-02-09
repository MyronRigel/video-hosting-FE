import React from 'react'
import { Button, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { changeURL } from '../../helpers/changeUrl'
import '../../styles/components/NavBar.scss'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <Button className="link" onClick={changeURL('/', navigate)}>Home</Button>
      <Button className="link" onClick={changeURL('/upload', navigate)}>Upload</Button>
      <Button className="link" onClick={changeURL('/videos', navigate)}>Videos</Button>
    </nav>
  )
}

export default NavBar
