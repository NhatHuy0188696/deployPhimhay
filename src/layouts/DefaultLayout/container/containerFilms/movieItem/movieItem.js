import classNames from 'classnames/bind';
import Style from './movieItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import images from '~/assets/images';
import Boxlevel from '~/components/boxLevel';

const cx = classNames.bind(Style);
function MovieItem({
    data = false,
    
    col_2 =false,
    col_full = false,
   
    
    
    }) 
{
 
    return   <div className={cx('wrapper',{
        col_2,
        col_full
        
      })}
      
      >
    
      
    <div className={cx('movie-item')}>
        <div className={cx('movie-image')}>
            <img src={data.image }></img>
            <div className={cx('filter-color')}></div>
            <div className={cx('filter-color--hover')}></div>
            <div className={cx('movie-infor')}>
                <h3> {data.mainTitle  }</h3>
                <p>{data.subTitle }</p>
            </div>
            <div className={cx('movie-overview')}>
                <div className={cx('movie-heart')}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={cx('movie-play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </div>
                <div className={cx('movie-evaluate')}>
                    <div className={cx('movie-degree')}>
                    {
                      
                        data.degree === 1 ?<Boxlevel beginner>1</Boxlevel>:
                        data.degree === 2 ?<Boxlevel highBeginer>2</Boxlevel>:
                        data.degree === 3 ?<Boxlevel intermedite>3</Boxlevel> :
                        data.degree === 4 ?<Boxlevel highIntermedite>4</Boxlevel>:''
                       
                    }
                   
                    <div className={cx('movie-level')}>{data.level }</div>
                    </div>

                    
                    <div className={cx('movie-times')}>
                        <img src={images.clock} />
                        <div className={cx('films-time')}>{data.time }</div>
                    </div>
                    <div className={cx('movie-judge')}>
                        <div className={cx('judge-title')}>IMDB</div>
                        <div className={cx('movie-imdb')}>{data.MIDB }</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
}

export default MovieItem;