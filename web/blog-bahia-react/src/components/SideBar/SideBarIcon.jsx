import React from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs/'

const size = {
  width: '25px',
  height: '35px',
}

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <span
      onClick={handleClick}
      className="side-bar-icon"

    >
      {isOpen ? <BsFillCaretRightFill style={size} /> : <BsFillCaretLeftFill style={size} />}
    </span>
  )
}
export default SidebarIcon