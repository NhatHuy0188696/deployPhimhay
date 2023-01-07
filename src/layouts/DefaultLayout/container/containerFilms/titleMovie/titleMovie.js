import classNames from 'classnames/bind';
import Style from './titleMovie.module.scss';

import Boxlevel from '~/components/boxLevel/boxLevel';
const cx = classNames.bind(Style);

function TitleMovie({ children, name = false, logo = false, nextSub = false, level = false }) {
    return (
        <div className={cx('movie')}>
            <div className={cx('movie-title')}>
                {logo ? <img src={logo }></img> : ''}
                {level  && 
                level === 1 ? <Boxlevel beginner>{level}</Boxlevel> : 
                level === 2 ? <Boxlevel highBeginer>{level}</Boxlevel> :
                level === 3 ? <Boxlevel intermedite>{level}</Boxlevel>:
                level === 4 ? <Boxlevel highIntermedite>{level}</Boxlevel>: ''
                }
                <span>{name}</span>

                <img src={nextSub} className={cx('logo-nextSub')}></img>
            </div>

            <div className={cx('movie-films')}>{children}</div>
        </div>
    );
}
export default TitleMovie;
