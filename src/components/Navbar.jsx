import React from 'react'
import "../components/Navbar.css"
import menu_icon from "../assets/menu.png"
import logo from "../assets/logo.png"
import search_icon from "../assets/search.png"
import upload_icon from "../assets/upload.png"
import more_icon from "../assets/more.png"
import notification_icon from "../assets/notification.png"
import profile_icon from "../assets/profile.png"

const Navbar = () => {
  return (
    <nav className="flex-div">
        <div className="nav-left flex-div">
         <img className="menu_icom" src={menu_icon} alt='' />
         <img className="logo" src={logo} alt='' />
        </div>

        <div className="nav-middle flex-div">
           <div className="search_bar flex-div">
         <input type="text" placeholde="search" />
         <img className="search" src={search_icon} alt='' />
           </div>
        </div>

        <div className="nav-right flex-div">
         <img className="upload" src={upload_icon} alt='' />
          <img className="more" src={more_icon} alt='' />
          <img className="notification" src={notification_icon} alt='' />
          <img className="profile" src={profile_icon} alt='' />
        </div>
    </nav>
  )
}

export default Navbar