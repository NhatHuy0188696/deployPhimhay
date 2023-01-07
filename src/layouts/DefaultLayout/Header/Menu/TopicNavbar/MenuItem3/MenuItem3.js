import Button from "~/components/Button";
import PropTypes from 'prop-types';

import { Fragment } from "react";
function MenuItem3({menuList3}) {
    return <Fragment>
               <li >
                <a href={menuList3.to}>{menuList3.name}</a>
             </li>
           
    </Fragment>
 
    
}
MenuItem3.prototype = {
    menuList3:PropTypes.object,
}
export default MenuItem3;