import classNames from 'classnames/bind';
import Style from './listItem.module.scss';
import Items from '../items/items';
const cx = classNames.bind(Style);

function ListItem({listInfor=[]}) {
    const titleInfor =()=>{
        return listInfor.map((list,index)=>(
            
            <Items key={index} data={list} />
        ))
    }
    
    return <div className={cx('infor-item')}>
        {titleInfor()}
        
    </div>
}

export default ListItem;