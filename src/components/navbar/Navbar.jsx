import { useState } from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/profile.png"
import { Link, useNavigate  } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="nav flex-div">
  <div className="nav-left flex-div">
    <img className="menu-icon" onClick={() => setSidebar( prev => prev === false ? true : false)} src={menu_icon} alt="" />
    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
  </div>

  <div className="nav-middle flex-div">
    <div className="search-box flex-div">
      <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
      <img className="search" src={search_icon} alt="" />
    </div>
  </div>

  <div className="nav-right flex-div">
    <img className="upload" src={upload_icon} alt="" />
    <img className="more" src={more_icon} alt="" />
    <img className="notification" src={notification_icon} alt="" />
    <img className="profile-icon" src={profile_icon} alt="" />
  </div>
</nav>

  )
}

export default Navbar