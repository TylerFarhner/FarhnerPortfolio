import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import InstagramIcon from "../Icons/InstagramIcon";
import GithubIcon from "../Icons/GithubIcon";
import ResumeIcon from "../Icons/ResumeIcon";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        
        <div className="ExternalIcons">
            {/* INSTAGRAM */}
            <a
              className="ExternalIcon"
              href="https://www.instagram.com/tyfriedrice/"
              rel="noreferrer"
              target="_blank"
              >
              <InstagramIcon />
            </a>

            {/* GITHUB */}
            <a
              className="ExternalIcon"
              href="https://github.com/TylerFarhner"
              rel="noreferrer"
              target="_blank"
              >
              <GithubIcon />
            </a>

            {/* RESUME */}
            <a
              className="ExternalIcon"
              href="https://www.dropbox.com/s/xsvgrztq8hmj72b/FarhnerResume.pdf?dl=0"
              rel="noreferrer"
              target="_blank"
              >
              <ResumeIcon />
            </a>
          </div>
              </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
