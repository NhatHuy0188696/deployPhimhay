import Trending from './trending';
import FeatureFilm from './FeatureFilm';
import ContainerLevel from './containerLevel/containerLevel';
import classNames from 'classnames/bind';
import Style from './containerFilms.module.scss';
const cx = classNames.bind(Style);
function ContainerFilms() {
    return (
        <div className={cx('container-films')}>
            <Trending />
            <FeatureFilm />
            <ContainerLevel />
        </div>
    );
}

export default ContainerFilms;
