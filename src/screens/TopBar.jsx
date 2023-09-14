import React,{useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/topbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from '../screens/Sidebar.jsx';
import { IconContext } from 'react-icons';

export default function TopBar() {
  const [sidebar , setSidebar] = useState(false)

  const showSidebar = ()=> setSidebar(!sidebar)
  return (
    <>
   
    <div className="top">
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="topLeft">
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} style={{left:'100px', background:'none'}}/>
      </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to ="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/donate" className="nav-link">
              Donate
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/volunteer" className="nav-link">
              Volunteer
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">profile and search bar</div>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
    </>
  );
}
