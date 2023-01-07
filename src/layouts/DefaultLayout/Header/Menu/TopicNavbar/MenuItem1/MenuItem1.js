import Button from "~/components/Button";
import PropTypes from 'prop-types';
import { Fragment } from "react";
function MenuItem1({menuList1}) {
    return <Fragment>
               <li >
                <a href={menuList1.to}>{menuList1.name}</a>
             </li>
           
    </Fragment>
 
    
}
MenuItem1.prototype = {
    menuList1:PropTypes.object,
}
export default MenuItem1;