import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Style from './items.module.scss';
const cx = classNames.bind(Style);

function Items({ data }) {
   

    return (
        <>
            <div className={cx('infor-list')}>
                <img src={data.image} />
                <h4 className={cx('infor-title')}>{data.title}</h4>
                
                <p className={cx('infor-description')}>{data.description}</p>
            </div>
        </>
    );
}

export default Items;
