import React from 'react'
import icon from '../../images/icons/flor 4.png'
import './SideBarIcon.css'

const SidebarIcon = ({ handleClick }) => {
  return (
    <input
      type="image"
      alt="icone da pagina"
      onClick={handleClick}
      className="side-bar-icon"
      src={icon}
    />
  )
}
export default SidebarIcon