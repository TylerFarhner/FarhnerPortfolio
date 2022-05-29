import React from 'react';

import InstagramIcon from "../Icons/InstagramIcon";
import GithubIcon from "../Icons/GithubIcon";
import ResumeIcon from "../Icons/ResumeIcon";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Cameras',
    path: '/Cameras',
    cName: 'nav-text'
  },
  {
    title: 'Coding',
    path: '/Coding',
    cName: 'nav-text'
  },
  {
    title: 'Consulting',
    path: '/Consulting',
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <ResumeIcon />,
    cName: 'nav-text'
  },
];
