import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData=[
   
    {
        title:'Final Properties',
        path:'/t_props',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title:'Profile',
        path:'/t_profile',
        icon:<AiIcons.AiFillProfile/>,
        cName:'nav-text'
    },
    {
        title:'Search',
        path:'/search',
        icon:<FaIcons.FaSearch/>,
        cName:'nav-text'
    },
    
    {
        title:'Payment',
        path:'/pay',
        icon:<AiIcons.AiFillPayCircle/>,
        cName:'nav-text'
    },
]