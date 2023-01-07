import classNames from "classnames/bind";
import Style from './boxlevel.module.scss';
const cx = classNames.bind(Style)
function Boxlevel({
    beginner = false,
    highBeginer  = false,
    intermedite  = false, 
    highIntermedite  = false,
    children
}) {
    let Comp = 'button';
    const classes = "wrapper";
    return <Comp className={cx(classes,{
        beginner,
        highBeginer,
        intermedite,
        highIntermedite,})}
  
     >{children}</Comp>
     
}

export default Boxlevel;