import React from "react";
import "../css/sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SidebarData =[
    {
        title: 'Support',
        path: '/support',
        icon: <AiIcons.AiFillQuestionCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <FaIcons.FaHireAHelper />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    },
]