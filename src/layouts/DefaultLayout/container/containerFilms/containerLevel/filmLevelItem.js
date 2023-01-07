import classNames from 'classnames/bind';
import Style from './containerLevel.module.scss';

const cx = classNames.bind(Style);
function FilmLevelItem({children}) {
    return <div className={cx('movie-list')}>
       {children}
    
</div>;
}

export default FilmLevelItem;