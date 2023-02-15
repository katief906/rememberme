import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <div onClick={showSidebar}>
        <FaBars className="menu-bars"/>
      </div> 
      <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
        <ul className="side-menu-items" onClick={showSidebar}>
          <li className="side-menu-toggle">
            <AiOutlineClose className="menu-bars"/>
          </li> 
          <li className="side-text">
            <a>
              Close
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar