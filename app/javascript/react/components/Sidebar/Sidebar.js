import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const Sidebar = (props) => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleClick = (e) => {
    if (e.currentTarget.id) {
      props.setPage({
        page: "show",
        id: e.currentTarget.id
      })
    } else {
      props.setPage({
        page: "form",
        id: null
      })      
    }
  }

  const lists = props.lists.map((list) => {
    return (
      <li key={list.id} className="side-text">
        <a id={list.id} onClick={handleClick}>
          {list.name}
        </a>
      </li>
    )
  })

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
          {lists}
        <li className="side-text">
          <a onClick={handleClick}>
            Add a list
          </a>
        </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar