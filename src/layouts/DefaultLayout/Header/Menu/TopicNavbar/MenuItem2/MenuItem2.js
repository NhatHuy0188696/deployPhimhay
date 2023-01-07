import Button from "~/components/Button";
import PropTypes from 'prop-types';

import { Fragment } from "react";
function MenuItem2({menuList2}) {
    return <Fragment>
               <li >
                <a href={menuList2.to}>{menuList2.name}</a>
             </li>
           
    </Fragment>
 
    
}
MenuItem2.prototype = {
    menuList2:PropTypes.object,
}
export default MenuItem2;