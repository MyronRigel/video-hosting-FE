import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import '../../styles/components/NavBar.scss'

const NavBar = () => {

  const [selected, setSelected] = useState({current: 'home'})

  const handleClick = e => {
    setSelected({current: e.key})
  }

  return (
    <nav className="nav">
      <Menu mode="horizontal" onClick={handleClick} selectedKeys={[selected.current]}>

        <Menu.Item className="link" key="home">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item className="link" key="upload">
          <Link to="/upload">Upload</Link>
        </Menu.Item>

        <Menu.Item className="link" key="videos">
          <Link to="/videos">Videos</Link>
        </Menu.Item>

      </Menu>
    </nav>
  )
}

export default NavBar
