import classNames from "classnames/bind";
import Style from './Button.module.scss';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
const cx = classNames.bind(Style);
function Button({
    children,
    to,
    href,
    onClick,
    leftIcon,
    primary = false,
    smailTablet = false,
    ouline = false,
    event = false,
    larger= false,
    medium = false,
    disable = false,
    smail = false,
    ready= false,
    ...passProps
  
}) 
    {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
       
    };
    if(to){
        props.to = to;
        Comp = Link
    }
    else if(href){
        props.href = href;
        Comp = 'a';
        
    }
   
    // remove event listerner when button disable
    if(disable){
      Object.keys(props).forEach((key)=>{
          if(key.startsWith('on') && typeof props[key]=== 'function'){
              delete props[key];
          }
      })
    }
    const classes = 'wrapper';
    return ( 
        <Comp  className={cx(classes,{
                 primary,
                 ouline,
                 event,
                 medium,
                 smail,
                 larger,
                 smailTablet,
                 ready,
                 disable
               
         })}{...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
             {children}
        </Comp>
    );
}
Button.prototype={
    children:PropTypes.node.isRequired,
    to:PropTypes.string,
    href:PropTypes.string,
    onClick:PropTypes.func,
    leftIcon:PropTypes.node,
    primary:PropTypes.bool,
    smailTablet:PropTypes.bool,
    ouline:PropTypes.bool,
    event:PropTypes.bool,
    larger:PropTypes.bool,
    medium:PropTypes.bool,
    disable:PropTypes.bool,
    smail:PropTypes.bool,
    ready:PropTypes.bool,
}
export default Button;