import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Slidebar_Tenant';

export default function Navbar(){
    const [sidebar,setSidebar]=useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <div className="navbar" >
            <Link to="#" className='menu-bars' style={{color:'darkviolet'}} >
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'none'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                            </Link>
                            </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName} style={{listStyleType:'none'}}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}