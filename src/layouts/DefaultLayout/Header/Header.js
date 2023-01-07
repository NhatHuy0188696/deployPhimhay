import classNames from "classnames/bind";
import Style from './Header.module.scss';

import 'tippy.js/dist/tippy.css'; 
import { Link } from "react-router-dom"
import Menu from "./Menu";
import images from "~/assets/images";
import { useEffect, useState } from 'react';
import { Usecreensize } from "~/hooks";
import config from "~/config";
const cx = classNames.bind(Style)
function Header() {
    const [scrollHeight,setScrollHeight] = useState(window.scrollY)
    useEffect(()=>{
        const handlescroll = () =>{
            setScrollHeight(window.scrollY)
           
        }
        return window.addEventListener('scroll',handlescroll)
    },[scrollHeight])
   const newWidth = Usecreensize(window.innerWidth);
   
    return <header className={cx('wrapper')}
    style={scrollHeight >= 1  && newWidth >= 1023 ?  {
               backgroundColor:'#232323',
               marginTop:'-21px',
               height:'80px',
               transition:'all 0.2s'
            }:{ 
            }}
    >
            <Menu>
                <div className={cx('logo')}>
                <Link to={config.routes.home}> <img src={images.logo} alt="logo"></img></Link>  
                </div>
            </Menu>
    </header>
}

export default Header;