import classNames from 'classnames/bind';
import Styles from './bannerContainer.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import { bannerSlick } from '~/assets/images';
const cx = classNames.bind(Styles);
function BannerItem({ data }) {
    return (
        <div className={cx('slider-content')}>
            <div className={cx('slider-item')}>
                <div className={cx('slider-image')}>
                    <img src={data.thumbnail || data.background || bannerSlick.banner8}></img>
                </div>
                <div className={cx('slider-infor')}>
                    <h1 className={cx('slider-infor--name')}>{data.name || data.original_title || data.mainTitle}</h1>
                    <div className={cx('slider-type--score')}>
                        <div className={cx('slider-score')}>
                            IMDB <span>{data.IMBD || data.vote_average || data.MIDB}</span>
                        </div>
                        {data.GenreMovie
                            ? data.GenreMovie.map((movie, index) => (
                                  <div key={index} className={cx('slider-genre')}>
                                      <a>{movie.genre}</a>
                                  </div>
                              ))
                            : (data.popularity = '')}
                        {data.level ? (
                            <div className={cx('slider-genre')}>
                                <a>{data.level}</a>
                            </div>
                        ) : (
                            (data.level = '')
                        )}
                        {data.time ? (
                            <div className={cx('slider-genre')}>
                                <a>{data.time}</a>
                            </div>
                        ) : (
                            (data.time = '')
                        )}
                        
                    </div>

                    <div className={cx('slider-title')}>{data.titlie || data.overview || data.description}</div>

                    <div className={cx('slider-option')}>
                        <Button event smail>
                            <FontAwesomeIcon className={cx('slider-icon')} icon={faPlay}></FontAwesomeIcon>
                            Xem Thử
                        </Button>
                        <Button ouline smail>
                            <FontAwesomeIcon className={cx('slider-icon')} icon={faHeart}></FontAwesomeIcon>
                            Yêu Thích
                        </Button>
                    </div>
                </div>

                <div className={cx('shadow')}></div>
            </div>
        </div>
    );
}

export default BannerItem;
