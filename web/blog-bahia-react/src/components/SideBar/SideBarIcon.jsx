import React from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs/';
import icon from '../../images/icons/flor 4.png'
import './SideBarIcon.css'
{/* {isOpen ? <BsFillCaretRightFill style={size} /> : <BsFillCaretLeftFill style={size} />} */}

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <input
      type="image"
      onClick={handleClick}
      className="side-bar-icon"
      src={icon}
    />
  )
}
export default SidebarIcon